import {
    Typography,
    Box,
    Divider,
    Grid,
    Stack,
    Paper,
    Card,
    CardContent
} from '@mui/material';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#cdd1d1',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const FieldView: React.FC = () => {
    return (
        <div>
            <Box m={4} sx={{ flexGrow: 1 }}>
                <Grid
                    spacing={3}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >

                    <Grid item md={4}>
                        <Box sx={{ width: '100%' }}>
                            <Stack spacing={1}>
                                <Item>My Field</Item>
                            </Stack>


                            <Card sx={{ minWidth: 275 }} className='cardContentCus'>
                                <CardContent >

                                    <Typography variant="body2" sx={{ fontSize: 14 }} color="text.secondary">
                                        Field List Dropdown view
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Box>
                    </Grid>


                    <Grid item md={3}>
                        <Box sx={{ width: '100%' }} >
                            <Stack spacing={2} >
                                <Item>Field Data</Item>
                            </Stack>
                            <Grid container className='verticalGrid'>
                                <Grid item xs>
                                    <div className='leftDiv'>
                                        <h5>Drainage Classification</h5>
                                        <p>Soil</p>
                                        <p>Tile</p>
                                        <p>Yield</p>
                                        <p>Wetiands</p>
                                    </div>
                                </Grid>
                                <Divider orientation="vertical" variant="middle" flexItem ></Divider>
                                <Grid item xs>
                                    <div className='rightDiv'>
                                        <p>Weather</p>
                                        <p>Crop history</p>
                                        <p>Hail history</p>
                                        <p>NDVi</p>
                                    </div>
                                </Grid>
                            </Grid>

                        </Box>
                    </Grid>
                    <Grid item md={5}>
                        <Box sx={{ width: '95%' }} className="fourGridCls" >
                            <Grid
                                spacing={1}
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 1 }}
                            >
                                <Grid item md={3}>
                                    <Box sx={{ width: '96%' }}>
                                        <Stack >
                                            <Item>Field Monitor</Item>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item md={3}>
                                    <Box sx={{ width: '94%' }}>
                                        <Stack >
                                            <Item>Field Insight</Item>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item md={3}>
                                    <Box sx={{ width: '93%' }}>
                                        <Stack >
                                            <Item>Field Notes</Item>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item md={3}>
                                    <Box sx={{ width: '96%' }}>
                                        <Stack >
                                            <Item>Share Status</Item>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Card sx={{ minWidth: 275 }} className='cardContentCus fourGridCls'>
                                <CardContent >

                                    <Typography variant="body2" sx={{ fontSize: 14 }} color="text.secondary">
                                        Data, Graph & Table
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                    </Grid>

                </Grid>
            </Box>
        </div>
    );

}

export default FieldView;