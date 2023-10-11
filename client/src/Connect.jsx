import React from "react";

import Box from "@mui/material/Box"
import { CardMedia, Typography, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const btn = {
    width: "150px",
    backgroundColor: "#3c52b2",
    color: "#fff",
    marginLeft: "10px",
    marginTop: "20px",
    '&:hover': {
        backgroundColor: '#fff',
        color: '#3c52b2'
    }
},
    same = {
        color: "white",
        width: "100%",
        height: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        '&:hover': {
            color: 'orange'
        }
    }

const Connect = () => {
    return (
        <div>

            <Box sx={{ width: "100%", padding: "50px 0px", margin: "auto", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: { lg: "row", md: "row", sm: "column", xs: " column" }, bgcolor: "rgb(249,250,250)" }}>
                <Box sx={{ width: { lg: "46%", md: "46%", sm: "96%", xs: "96%" }, height: "100%", padding: "10px 0", background: "rgb(249,250,250)", display: "flex", flexDirection: 'column' }}>
                    <Typography variant="h5" sx={{ fontWeight: "bolder", marginLeft: "7px" }}>CONTACT US</Typography>
                    <TextField sx={{ '& > :not(style)': { m: 1, width: { lg: 'auto', md: "auto", sm: "auto", xs: "auto" }, marginTop: "25px" } }} id="filled-basic" label="Your Name" variant="filled" />
                    <TextField sx={{ '& > :not(style)': { m: 1, width: { lg: 'auto', md: "auto", sm: "auto", xs: "auto" }, marginTop: "25px" } }} id="filled-basic" label="Your Name" variant="filled" />
                    <TextField sx={{ '& > :not(style)': { m: 1, width: { lg: 'auto', md: "auto", sm: "auto", xs: "auto" }, marginTop: "25px" } }} id="filled-basic" label="Your Name" variant="filled" />
                    <TextField sx={{ '& > :not(style)': { m: 1, width: { lg: 'auto', md: "auto", sm: "auto", xs: "auto" }, height: "11ch", marginTop: "30px" }, }} id="filled-basic" label="Your Name" variant="filled" />
                    <Button sx={btn} variant="outlined">SEND</Button>
                </Box>
                <Box item sx={{ width: { lg: "46", md: "46%", sm: "96%", xs: "96%" }, border: "1px solid black" }}>
                    <CardMedia
                        sx={{ height: "500px" }}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_1AliiMXw7MgndXNNE_3Uz5iUFWFe1O37g&usqp=CAU"
                    />
                </Box>
            </Box>








            <Box sx={{ width: "100%", backgroundColor: "gray" }}>

                <Box sx={{ width: "94%", margin: "auto", display: "flex", justifyContent: "center", flexDirection: { lg: "row", md: "row", sm: "column", xs: " column" }, color: "white" }}>

                    <Box sx={same}>
                        <LocalPhoneIcon />
                        <Typography variant="">Call:+01 12345678990</Typography>
                    </Box>
                    <Box sx={same}>
                        <EmailIcon />
                        <Typography variant="">Email:mail@domain.com</Typography>
                    </Box>
                    <Box sx={same}>
                        <LocationOnIcon />
                        <Typography variant="">Location</Typography>
                    </Box>
                </Box>



                <Box sx={{ width: "90%", margin: "auto", display: "flex", justifyContent: "center", justifyContent: "space-between", flexDirection: { lg: "row", md: "row", sm: "column", xs: " column" }, color: "white" }}>

                    <Box sx={{ width: "100%", height: "auto", padding: "40px 0px", display: "flex", justifyContent: "flex-start", flexDirection: 'column', alignItems: { lg: "flex-start", md: "flex-start", sm: "center", xs: "center" } }}>

                        <Typography variant="h5" sx={{ fontWeight: "bolder", marginLeft: "9px" }}>QUICK LINKS</Typography>

                        <Box sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "column", xs: " column" }, justifyContent: 'center', alignItems: 'center', width: "100%", marginTop: "20px" }}>
                            <Box sx={{ width: "50%", display: 'flex', flexDirection: 'column', alignItems: { lg: "flex-start", md: "flex-start", sm: "center", xs: " center" } }}>
                                <Typography variant="h6" sx={{ marginLeft: "9px" }}>Home</Typography>
                                <Typography variant="h6" sx={{ marginLeft: "9px" }}>Furniture</Typography>
                                <Typography variant="h6" sx={{ marginLeft: "9px" }}>Contect Us</Typography>
                            </Box>
                            <Box sx={{ width: "50%", display: 'flex', flexDirection: 'column', alignItems: { lg: "flex-start", md: "flex-start", sm: "center", xs: " center" } }}>
                                <Typography variant="h6" sx={{ marginLeft: "9px" }}>About</Typography>
                                <Typography variant="h6" sx={{ marginLeft: "9px" }}>Blog</Typography>
                            </Box>
                        </Box>

                    </Box>



                    <Box sx={{ width: "100%", height: "auto", padding: "40px 0px", display: 'flex', flexDirection: "column", alignItems: { lg: "flex-start", md: "flex-start", sm: "center", xs: "center" } }}>

                        <Typography variant="h5" sx={{ fontWeight: "bolder" }}>INSTAGRAM FEEDS</Typography>
                        ,
                        <Box sx={{ width: "70%", height: "25vh" }}>

                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                                <Card sx={{ width: "30%", height: "10vh", border: "1px solid black" }}>
                                    <CardMedia sx={{ height: '100%' }}
                                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s'
                                    />
                                </Card>

                                <Card sx={{ width: "30%", height: "10vh", border: "1px solid black" }}>
                                    <CardMedia sx={{ height: '100%' }}
                                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s'
                                    />
                                </Card>

                                <Card sx={{ width: "30%", height: "10vh", border: "1px solid black" }}>
                                    <CardMedia sx={{ height: '100%' }}
                                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s'
                                    />
                                </Card>

                            </Box>


                            <Box sx={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
                                <Card sx={{ width: "30%", height: "10vh", }}>
                                    <CardMedia sx={{ height: '100%' }}
                                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s'
                                    />
                                </Card>
                                <Card sx={{ width: "30%", height: "10vh", border: "1px solid black" }}>
                                    <CardMedia sx={{ height: '100%' }}
                                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s'
                                    />
                                </Card>
                                <Card sx={{ width: "30%", height: "10vh", border: "1px solid black" }}>
                                    <CardMedia sx={{ height: '100%' }}
                                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s'
                                    />
                                </Card>

                            </Box>

                        </Box>



                    </Box>
                    <Box sx={{ width: "100%", height: "auto", padding: "40px 0px", display: 'flex', flexDirection: "column", alignItems: { lg: "flex-start", md: "flex-start", sm: "center", xs: "center" } }}>
                        <Typography variant="h5" sx={{ fontWeight: "bolder", marginLeft: "10px" }}>Subscribe To Our Newsletter</Typography>

                        <TextField sx={{ '& > :not(style)': { m: 1, width: '100%', marginTop: "25px" }, }} id="filled-basic" label="Your Name" variant="filled" />
                        <Button sx={btn} variant="outlined">Subscribe</Button>


                        <Box sx={{ width: "80%", marginTop: "20px", display: "flex", justifyContent: "space-between", marginLeft: "10px" }}>
                            <Card sx={{ width: "20%", height: "7vh", border: "1px solid black" }}>
                                <CardMedia sx={{ height: '100%' }}
                                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s'
                                />
                            </Card>
                            <Card sx={{ width: "20%", height: "7vh", border: "1px solid black" }}>
                                <CardMedia sx={{ height: '100%' }}
                                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s'
                                />
                            </Card>
                            <Card sx={{ width: "20%", height: "7vh", border: "1px solid black" }}>
                                <CardMedia sx={{ height: '100%' }}
                                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s'
                                />
                            </Card>

                            <Card sx={{ width: "20%", height: "7vh", border: "1px solid black" }}>
                                <CardMedia sx={{ height: '100%' }}
                                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s'
                                />
                            </Card>

                        </Box>

                    </Box>


                </Box>

            </Box>
        </div >

    )
}
export default Connect