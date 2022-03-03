import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import img1 from '../../assets/open.jpg'
import img2 from '../../assets/suits.jpg'
import img3 from '../../assets/phones.jpg'
import { useState } from 'react';


export default function Slider() {
    const fadeImages = [
        {
            id: 1,
            url: `${img1}`,
            caption: <h1 style={{ color: 'white', textShadow: '1.5px 1.5px 2px rgb(0,0,0,0.7)' }}>Welcome to Our Store.<br /> We Provide 24/7 Service</h1>
        },
        {
            id: 2,
            url: `${img2}`,
            caption: <h1 style={{ color: 'white', textShadow: '1.5px 1.5px 2px rgb(0,0,0,0.5)' }}>We Offer Huge Variety Quality Garanteed</h1>
        },
        {
            id: 3,
            url: `${img3}`,
            caption: <h1 style={{ color: 'white', textShadow: '1.5px 1.5px 2px rgb(0,0,0,0.5)', textAlign: 'center' }}>Most Loved Phones on Installment Available</h1>
        },
    ];
    let [ sliderHeading, setSliderHeading ] = useState('1.4rem');
    let [ headingMarginTop, setHeadingMarginTop ] = useState('150px');

    const screenSize = () => {
        if (window.innerWidth < 1000 && window.innerWidth > 800) {
            setSliderHeading('1.2rem');
            setHeadingMarginTop('100px');
        }
        else if (window.innerWidth < 800 && window.innerWidth > 550) {
            setSliderHeading('0.9rem');
            setHeadingMarginTop('50px');
        }
        else if (window.innerWidth < 550) {
            setSliderHeading('0.6rem');
            setHeadingMarginTop('25px');
        }
        else {
            setSliderHeading('1.4rem');
            setHeadingMarginTop('150px');
        }
    }
    window.addEventListener('load', screenSize)
    window.addEventListener('resize', screenSize);
    return (
        <div className="slide-container">
            <Fade>
                {fadeImages.map((item) => (
                    <div key={item.id} className="each-fade" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            style={{ objectFit: 'fill', width: '100%', height: "auto" }}
                            src={item.url}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                zIndex: '1',
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: `${headingMarginTop}`,
                                fontSize: `${sliderHeading}`,

                            }}
                        >
                            {item.caption}
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}
