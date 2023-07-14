import ReactMapGL, {
  Layer,
  Source,
} from 'react-map-gl'
import { useState } from 'react';

interface PolygonCord {
  polygonCord: Object;
  layerColor: string;
  Token?: string
}


export default function Map(props: PolygonCord) {
  const [Token] = useState(process.env.APP_TOKEN);
  const [viewPort, setViewPort] = useState({
    latitude: 38.36608763608586,
    longitude: -98.77518131832352,
    zoom: 4
  })

  const geojson = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: props.polygonCord,
    },
  };

  const layerStyle = {
    id: "maine",
    type: "fill",
    source: "maine", // reference the data source
    layout: {},
    paint: {
      "fill-color": props.layerColor || "#0080ff", // blue color fill
      "fill-opacity": 0.5,
    },
  };

  // Add a black outline around the polygon.
  const layerOutlineStyle = {
    id: "outline",
    type: "line",
    source: "maine",
    layout: {},
    paint: {
      "line-color": props.layerColor,
      "line-width": 3,
    },
  };

  return (

    <div style={{ width: "100%", height: "80%" }}>
      <ReactMapGL
        initialViewState={viewPort}
        mapboxAccessToken={props.Token}
        mapStyle="mapbox://styles/mapbox/streets-v11"


      >
        {console.log(props.Token, 'Token Token')}
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerOutlineStyle} />

        </Source>

      </ReactMapGL>
    </div>
  );

}