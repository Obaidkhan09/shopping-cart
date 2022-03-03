import { Paper } from '@mui/material'
import img1 from '../../assets/lady.jpg'
import { Grid } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const products = [
        {
            id : 1,
            name: "iPhone X",
            description: "Material UI is a React component library based on Google's Material Design. Tailwind CSS is a CSS framework that comes with predefined classes rather than components as the building blocks of UI design. Consider Material UI if you are an avid React user and don't have the time to build a custom UI from scratch.",
            img: "https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/i/p/iphonex-spacegray-34br-34fl-2up-us-en-screen.jpg",
            price : 499,
        },
        {
            id : 2,
            name: "iPhone 11",
            description: "Material UI is a React component library based on Google's Material Design. Tailwind CSS is a CSS framework that comes with predefined classes rather than components as the building blocks of UI design. Consider Material UI if you are an avid React user and don't have the time to build a custom UI from scratch.",
            img: "https://www.mytrendyphone.eu/images/iPhone-11-Pro-64GB-Space-Grey-0190199388765-16092019-01-p.jpg",
            price : 699,
        },
        {
            id : 3,
            name: "iPhone 12",
            description: "Material UI is a React component library based on Google's Material Design. Tailwind CSS is a CSS framework that comes with predefined classes rather than components as the building blocks of UI design. Consider Material UI if you are an avid React user and don't have the time to build a custom UI from scratch.",
            img: "https://images.macrumors.com/article-new/2019/10/iphone12black.jpg",
            price : 849,
        },
        {
            id : 4,
            name: "iPhone 13",
            description: "Material UI is a React component library based on Google's Material Design. Tailwind CSS is a CSS framework that comes with predefined classes rather than components as the building blocks of UI design. Consider Material UI if you are an avid React user and don't have the time to build a custom UI from scratch.",
            img: "https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dw0eb0752e/images/061/23/61233730-2.jpg?sw=1000&sh=1000&sm=fit",
            price : 999,
        }
    ];
    const [alignment, setAlignment] = useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    }
    const { productID } = useParams();
    const id = products[productID];
    console.log(id);
    const { name, img, description, price } = id;
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
                elevation={2}
                style={{
                    width: '95%',
                    backgroundColor: 'white',
                    boxShadow: '3px 3px 5px rgb(0,0,0,0.7)',
                    borderRadius: '15px',
                    height: '50%',
                    margin: 40,
                    padding: 30
                }}>
                <Grid container style={{}}>
                    <Grid item xs={12} sm={5}>
                        <Paper elevation={3} style={{ borderRadius: 20 }}>
                            <img src={img} style={{ objectFit: 'fill', width: '100%', height: 'auto', borderRadius: 20, aspectRatio: 16 / 9 }} />
                        </Paper>
                    </Grid>


                    <Grid item xs={12} sm={6} ml={5} mt={3}>
                        <Paper
                            elevation={3}
                            style={{
                                backgroundColor: 'white',
                                padding: '15px 15px',
                                width: '8rem',
                                borderRadius: '15px'
                            }}>
                            <h5 style={{ color: '#E8542B', margin: 0 }}>
                                <CheckCircleOutlineIcon style={{ fontSize: '1rem' }} />
                                &nbsp; Official Website
                            </h5>
                        </Paper>
                        <h2>{name}</h2>
                        <h6>{description}</h6>
                        <h5 style={{ marginBottom : 10 }}>Colors</h5>
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            size='small'
                        >
                            <ToggleButton value="web">Black</ToggleButton>
                            <ToggleButton value="android">White</ToggleButton>
                            <ToggleButton value="ios">Blue</ToggleButton>
                        </ToggleButtonGroup>
                        <h4>Price : &nbsp; &nbsp; &nbsp; ${price}</h4>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
