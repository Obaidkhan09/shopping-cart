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
import Slider from './slider/Slider';
import { useState } from 'react';

export default function Home() {
    const dispatch = useDispatch();
    const dataList = useSelector(getItem);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    let [ headingSize, setHeadingSize ] = useState('3rem');
    const screenSize = () => {
        if (window.innerWidth < 1000 && window.innerWidth > 800) {
            setHeadingSize('2rem');
        }
        else if (window.innerWidth < 800 && window.innerWidth > 550) {
            setHeadingSize('1.5rem');
        }
        else if (window.innerWidth < 550) {
            setHeadingSize('1.2rem');
        }
        else setHeadingSize('3rem')
    }
    window.addEventListener('load', screenSize);
    window.addEventListener('resize', screenSize);
    return (
        <div>
            <Slider />
            <div style={{ display:'flex', justifyContent:'center' }}>
                <h1 style={{
                    marginTop: '55px',
                    textAlign: 'center',
                    fontFamily: 'Lobster',
                    fontSize: `${headingSize}`,
                    backgroundColor: 'white',
                    boxShadow: '3px 3px 5px rgb(0,0,0,0.5)',
                    width: '50%',
                    borderRadius: '15px'
                }}>
                    New Arrival
                </h1>
            </div>
            <Grid container>
                {dataList.map((item) => (
                    <Grid key={item.name} item xs={12} sm={4} md={3}
                        style={{ display: 'flex', justifyContent: "center" }} >
                        <Card sx={{ maxWidth: 235, borderRadius: '15px', margin: '55px 0px' }} elevation={8}>
                            <CardMedia
                                component="img"
                                alt={item.name}
                                height="220"
                                image={item.img}
                                style={{ top: "0px" }}
                            />
                            <div
                                style={{
                                    border: "1px solid #ff5722",
                                    borderRadius: "0px 0px 15px 15px"
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
                                            "&.MuiButton-contained": { color: "white", backgroundColor: "#ff5722" }
                                        }}
                                    >
                                        Details
                                    </Button>
                                    <Button
                                        size="small"
                                        variant='outlined'
                                        sx={{
                                            "&.MuiButton-outlined": { color: "#ff5722", borderColor: "#ff5722" }
                                        }}
                                        onClick={() => handleAddToCart(item)}
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
