"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from "@mui/material";

import Map from './components/Map'
import Header from './components/Header'
import FieldInformation from './components/FieldInformation'
import FieldView from './components/FieldView'

const Token: any = process.env.NEXT_PUBLIC_APP_TOKEN

export default function Home() {



  const blueShade = "#0080ff";
  const [polygonCord, setPolygonCord] = useState([]);

  const [isupdate, setisupdate] = useState(0);

  const fetchGeojson = () => {
    axios.get('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson')
      .then(response => {
        let polygonArr = response.data.features.map((el: any) => el.geometry.coordinates[0])
        setPolygonCord(polygonArr)

        console.log(polygonArr, 'ssssssssssssss')


      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    fetchGeojson()
  }, [isupdate]);


  return (

    <Container maxWidth="lg">
      <Header></Header>
      {

        polygonCord.length > 0 ?
          <Map polygonCord={polygonCord} layerColor={blueShade} Token={Token}></Map>
          : ''
      }

      <FieldInformation></FieldInformation>
      <FieldView></FieldView>




    </Container>
  )
}
