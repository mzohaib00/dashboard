import Carousel from 'react-bootstrap/Carousel';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import { ImageListItem } from '@mui/material';
import img1 from "./slider-img.png"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Section() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%", color: "black" }}>
            <Carousel className="bg-black text-white" style={{ height: "80%", width: "90%", color:"black"}}>
            <Carousel.Item className='border h-100'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={6}>
                            <Item sx={{ textAlign: "start", padding: "50px" }}>
                                <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
                                    FOR ALL YOUR
                                    FURNITURE NEEDS
                                </Typography>
                                <Typography variant="subtitle1" sx={{ marginTop: "40px", color: "black" }}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                </Typography>

                                <Button variant="contained">CONTACT US</Button>
                                <Button variant="contained">ABOUT</Button>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Item style={{ height: "100%"}}>
                                <ImageList>
                                    <ImageListItem>
                                        <img src={img1} alt="" style={{ height: "100%", width: "100%" }}/>
                                    </ImageListItem>
                                </ImageList>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>



            </Carousel.Item>
            <Carousel.Item>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={6}>
                            <Item sx={{ textAlign: "start", padding: "50px" }}>
                                <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
                                    FOR ALL YOUR
                                    FURNITURE NEEDS
                                </Typography>
                                <Typography variant="subtitle1" sx={{ marginTop: "40px", color: "black" }}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                </Typography>

                                <Button variant="contained">CONTACT US</Button>
                                <Button variant="contained">ABOUT</Button>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Item style={{ height: "100%"}}>
                                <ImageList>
                                    <ImageListItem>
                                    <img src={img1} alt="" style={{ height: "100%", width: "100%" }}/>                                    </ImageListItem>
                                </ImageList>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Carousel.Item>
            <Carousel.Item>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={6}>
                            <Item sx={{ textAlign: "start", padding: "50px" }}>
                                <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
                                    FOR ALL YOUR
                                    FURNITURE NEEDS
                                </Typography>
                                <Typography variant="subtitle1" sx={{ marginTop: "40px", color: "black" }}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                </Typography>

                                <Button variant="contained">CONTACT US</Button>
                                <Button variant="contained">ABOUT</Button>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Item style={{ height: "100%"}}>
                                <ImageList>
                                    <ImageListItem>
                                    <img src={img1} alt="" style={{ height: "100%", width: "100%" }}/>                                    </ImageListItem>
                                </ImageList>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Carousel.Item>
        </Carousel>
        </div >
    );
}

export default Section;