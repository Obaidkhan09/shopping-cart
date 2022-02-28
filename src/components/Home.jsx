import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { getItem } from '../features/productSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function Home() {
    const dispatch = useDispatch();
    // const dataList = [
    //     {
    //         name: "iPhone X",
    //         description: "The iPhone X contains Apple's A11 Bionic system-on-chip.!",
    //         img: "https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/i/p/iphonex-spacegray-34br-34fl-2up-us-en-screen.jpg",
    //     },
    //     {
    //         name: "iPhone 11",
    //         description: "The iPhone 11 contains Apple's A13 Bionic system-on-chip.!",
    //         img: "https://www.mytrendyphone.eu/images/iPhone-11-Pro-64GB-Space-Grey-0190199388765-16092019-01-p.jpg",
    //     },
    //     {
    //         name: "iPhone 12",
    //         description: "The iPhone 12 contains Apple's A14 Bionic system-on-chip.!",
    //         img: "https://images.macrumors.com/article-new/2019/10/iphone12black.jpg",
    //     },
    //     {
    //         name: "iPhone 13",
    //         description: "The iPhone 13 contains Apple's A15 Bionic system-on-chip.!",
    //         img: "https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw0eb0752e/images/061/23/61233730-2.jpg?sw=1000&sh=1000&sm=fit",
    //     }
    // ];
    const dataList = useSelector(getItem);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    return (
        <div>
            <Grid container>
                {dataList.map((item) => (
                    <Grid key={item.name} item xs={12} sm={4} md={3}
                    style={{ display: 'flex', justifyContent: "center" }} >
                        <Card sx={{ maxWidth: 235, borderRadius : '15px', marginTop : '30px' }} elevation={8}>
                            <CardMedia
                                component="img"
                                alt={item.name}
                                height="220"
                                image={item.img}
                                style={{ top: "0px" }}
                            />
                            <div
                            style={{
                                border : "1px solid #ff5722",
                                borderRadius : "0px 0px 15px 15px"
                            }}
                            >
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.description}
                                    </Typography>
                                    <Typography variant="h5" mt={1}>
                                        $ {item.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant='contained'
                                        size="small"
                                        sx={{
                                            "&.MuiButton-contained": { color: "white", backgroundColor : "#ff5722" }
                                            }}
                                    >
                                        Details
                                    </Button>
                                    <Button
                                    size="small"
                                    variant='outlined'
                                    sx={{
                                        "&.MuiButton-outlined": { color: "#ff5722", borderColor : "#ff5722" }
                                        }}
                                        onClick={()=>handleAddToCart(item)}
                                    >
                                        Add to Cart
                                    </Button>
                                </CardActions>
                            </div>
                        </Card>
                    </Grid>
                ))
                }
            </Grid>
        </div>

    )
}
