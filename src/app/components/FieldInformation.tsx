import {
    Typography,
    Box,
    Button,
} from '@mui/material';


const FieldInformation: React.FC = () => {
    return (
        <div>
            <Box className="fieldInformation" sx={{ display: 'flex' }} >
                <Typography variant="h6" sx={{ my: 2 }}>
                    - Selected Field Information
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button variant="contained"
                        style={{ margin: "2px" }}>Request Service
                    </Button>
                </Box>
            </Box>
        </div>
    );

}

export default FieldInformation;