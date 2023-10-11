import React from "react";
import { AppBar, CardMedia, Box, Card, Typography, } from "@mui/material";


const styles = {
    appBar: {
        width: '100%',
        height: '50px',
        bgcolor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: '24%',
        height: '80%',
        bgcolor: "black",
        border: '1px solid white',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
};

function Cafe() {
    return (
        <div>

            <AppBar sx={styles.appBar}>
                <Card sx={styles.card}>
                    <Typography sx={{ color: "white" }} variant="p">HOME</Typography>
                </Card>
                <Card sx={styles.card}>
                    <Typography sx={{ color: "white" }} variant="p">ABOUT</Typography>
                </Card>
                <Card sx={styles.card}>
                    <Typography sx={{ color: "white" }} variant="p">MENU</Typography>
                </Card>
                <Card sx={styles.card}>
                    <Typography sx={{ color: "white" }} variant="p">WHERE</Typography>
                </Card>
            </AppBar>

            <Box>
                <Card sx={{ height: "500px", }}>
                    <CardMedia
                        sx={{ height: "100%" }}
                        image='https://www.w3schools.com/w3images/coffeehouse.jpg'
                    />
                </Card>
            </Box>

            <Box>
                <Card  sx={{ width:"190px", height: "30px",  bgcolor: "black" , margin:"30px auto", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Typography sx={{ color: "white" }} variant="p">ABOUT THE CAFE</Typography>
                </Card>
            </Box>

        </div>
    )
}
export default Cafe