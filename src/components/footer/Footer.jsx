import Typography from '@mui/material/Typography';
import { Grid, List, ListItem } from "@mui/material";
import '../../index.css'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Footer() {
    const categories = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const products = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const screenSize = () => {
    }

  return (
    <div id="footer"
            style={{
                width: '100% !important',
                backgroundColor: "black",
                padding: "24px",
                color: "white",
                height: "55%",
                display : 'flex',
                justifyContent : 'center'
            }}>
            <Grid container style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
                <Grid item lg={3} md={4} sm={6} xs={12} style={{ paddingBottom: "0px" }}>
                    <Typography variant="h4" fontFamily="Alata" style={{ marginBottom: "1.2rem", marginLeft : '22px' }}>
                        Categories
                    </Typography>
                    <List>
                        {products.map((item, index) => (
                            <ListItem key={index} style={{ fontSize: "1rem", padding: "0px", marginBottom: "5px", marginLeft : '22px' }}
                                className="onHover"
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Typography variant="h4" fontFamily="Alata" style={{ marginBottom: "1.2rem", marginLeft : '22px' }}>
                        Products
                    </Typography>
                    <List>
                        {categories.map((item, index) => (
                            <ListItem key={index} style={{ fontSize: "1rem", padding: "0px", marginBottom: "5px", marginLeft : '22px' }}
                                className="onHover"
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                {/* <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Typography variant="h4" fontFamily="Alata" style={{ marginBottom: "1.2rem" }}>
                        Diff Checkers
                    </Typography>
                    <List>
                        {checkers.map((item, index) => (
                            <ListItem key={index} style={{ fontSize: "1rem", padding: "0px", marginBottom: "5px" }}
                                className="onHover"
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Grid> */}
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Typography variant="h4" fontFamily="Alata" style={{ marginBottom: "1.2rem", marginLeft : '22px' }}>
                        About Us
                    </Typography>
                    
                    {/* <List>
                        {coders.map((item, index) => (
                            <ListItem key={index} style={{ fontSize: "1rem", padding: "0px", marginBottom: "5px", marginLeft : '22px' }}
                                className="onHover"
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List> */}
                    <Typography style={{ fontSize: "1rem", padding: "0px", marginBottom: "20px", marginLeft : '22px' }}>
                        Lakson Square building 03, Floor No #07, Opposite to Karachi Press Club, Karachi.
                    </Typography>
                    <Typography style={{ fontSize: "1rem", padding: "0px", marginBottom: "5px", marginLeft : '22px' }}>
                        24/7 Serving our Customers.
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ textAlign : 'center', paddingTop : '12px' }}>
                    <Typography fontSize="0.75rem">
                        {/* <CopyrightIcon css={css`padding-top : 12px; margin-top : 15px; color : #E8542B `} /> */}
                        Copyright 2020 Doubledrop, LLC{'\u00A0'}|{'\u00A0'}
                        <a css={css`color: #E8542B;`}>{'\u00A0'}Privacy Notice{'\u00A0'}</a>{'\u00A0'}|
                        {'\u00A0'}<a css={css`color: #E8542B;`}>{'\u00A0'}Cookie Policy{'\u00A0'}</a>
                    </Typography>
                </Grid>
            </Grid>
        </div>
  )
}
