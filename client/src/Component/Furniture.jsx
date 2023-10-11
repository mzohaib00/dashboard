import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


export default function ImgMediaCard() {
    return (
        <>
            <Typography level="h1" variant="h5" sx={{ fontWeight: 'bold', marginTop: 10, marginLeft: 5.7 }}>
                OUR FURNITURE
            </Typography>
            <Typography variant="body2"
                sx={{ fontSize: '16px', marginLeft: 5, marginTop: 1, color: 'rgb(12,12,12)', }}>
                which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
            </Typography>
            <div style={{ display: 'flex' }}>
                <Card sx={{ maxWidth: 280, paddingLeft: 3, paddingRight: 3, paddingTop: 5, backgroundColor: 'rgb(247,250,250)', marginLeft: 5.7, marginTop: 6, }} elevation={0} >
                    <CardMedia sx={{ borderRadius: 0 }}
                        component="img"
                        alt="green iguana"
                        height="280"
                        image="https://atlas-content-cdn.pixelsquid.com/stock-images/brown-armchair-sofa-YaKoN81-600.jpg" />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div" sx={{ fontWeight: 'bold' }}>
                            BROWN CHAIR DESIGN
                        </Typography>
                        <Typography variant="body2">
                            <span style={{ fontWeight: 'bold', color: 'rgb(125,183,190)', fontSize: '16px' }}>$ </span> 100.00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{ marginLeft: 23, marginTop: -8, color: 'rgb(125,183,190)', fontWeight: 'bold' }}>BUY NOW</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 280, paddingLeft: 3, paddingRight: 3, paddingTop: 5, backgroundColor: 'rgb(247,250,250)', marginLeft: 5.7, marginTop: 6, }} elevation={0} >
                    <CardMedia sx={{ borderRadius: 0 }}
                        component="img"
                        alt="green iguana"
                        height="280"
                        image="https://urbangalleria.com/cdn/shop/products/Mocca.png?v=1603713522" />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div" sx={{ fontWeight: 'bold' }}>
                            DOUBLE BED DESIGN
                        </Typography>
                        <Typography variant="body2">
                            <span style={{ fontWeight: 'bold', color: 'rgb(125,183,190)', fontSize: '16px' }}>$ </span> 200.00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{ marginLeft: 23, marginTop: -8, color: 'rgb(125,183,190)', fontWeight: 'bold' }}>BUY NOW</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 280, paddingLeft: 3, paddingRight: 3, paddingTop: 5, backgroundColor: 'rgb(247,250,250)', marginLeft: 5.7, marginTop: 6, }} elevation={0} >
                    <CardMedia sx={{ borderRadius: 0 }}
                        component="img"
                        alt="green iguana"
                        height="280"
                        image="https://atlas-content-cdn.pixelsquid.com/stock-images/plush-white-chair-JeKkra0-600.jpg" />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div" sx={{ fontWeight: 'bold' }}>
                            HOUSE CHAIR DESIGN
                        </Typography>
                        <Typography variant="body2">
                            <span style={{ fontWeight: 'bold', color: 'rgb(125,183,190)', fontSize: '16px' }}>$ </span> 200.00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{ marginLeft: 23, marginTop: -8, color: 'rgb(125,183,190)', fontWeight: 'bold' }}>BUY NOW</Button>
                    </CardActions>
                </Card>

            </div>

            <div style={{ display: 'flex' }}>
                <Card sx={{ maxWidth: 280, paddingLeft: 3, paddingRight: 3, paddingTop: 5, backgroundColor: 'rgb(247,250,250)', marginLeft: 5.7, marginTop: 6, }} elevation={0} >
                    <CardMedia sx={{ borderRadius: 0 }}
                        component="img"
                        alt="green iguana"
                        height="280"
                        image="https://atlas-content-cdn.pixelsquid.com/assets_v2/246/2465326680709797398/jpeg-600/G03.jpg?modifiedAt=1" />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div" sx={{ fontWeight: 'bold' }}>
                            BROWN TABLE DESIGN
                        </Typography>
                        <Typography variant="body2">
                            <span style={{ fontWeight: 'bold', color: 'rgb(125,183,190)', fontSize: '16px' }}>$ </span> 100.00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{ marginLeft: 23, marginTop: -8, color: 'rgb(125,183,190)', fontWeight: 'bold' }}>BUY NOW</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 280, paddingLeft: 3, paddingRight: 3, paddingTop: 5, backgroundColor: 'rgb(247,250,250)', marginLeft: 5.7, marginTop: 6, }} elevation={0} >
                    <CardMedia sx={{ borderRadius: 0 }}
                        component="img"
                        alt="green iguana"
                        height="280"
                        image="https://atlas-content-cdn.pixelsquid.com/stock-images/blue-armchair-arm-chair-AEo0rkF-600.jpg" />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div" sx={{ fontWeight: 'bold' }}>
                            BLUE CHAIR DESIGN
                        </Typography>
                        <Typography variant="body2">
                            <span style={{ fontWeight: 'bold', color: 'rgb(125,183,190)', fontSize: '16px' }}>$ </span> 200.00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{ marginLeft: 23, marginTop: -8, color: 'rgb(125,183,190)', fontWeight: 'bold' }}>BUY NOW</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 280, paddingLeft: 3, paddingRight: 3, paddingTop: 5, backgroundColor: 'rgb(247,250,250)', marginLeft: 5.7, marginTop: 6, }} elevation={0} >
                    <CardMedia sx={{ borderRadius: 0 }}
                        component="img"
                        alt="green iguana"
                        height="280"
                        image="https://atlas-content-cdn.pixelsquid.com/stock-images/black-coffee-table-zeL7Q3B-600.jpg" />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div" sx={{ fontWeight: 'bold' }}>
                            BROWN TABLE DESIGN
                        </Typography>
                        <Typography variant="body2">
                            <span style={{ fontWeight: 'bold', color: 'rgb(125,183,190)', fontSize: '16px' }}>$ </span> 200.00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{ marginLeft: 23, marginTop: -8, color: 'rgb(125,183,190)', fontWeight: 'bold' }}>BUY NOW</Button>
                    </CardActions>
                </Card>

            </div>
        </>



    );
}