import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import img1 from '../../assets/open.jpg'
import img2 from '../../assets/suits.jpg'
import img3 from '../../assets/phones.jpg'


export default function Slider() {
    const fadeImages = [
        {
            url: `${img1}`,
            caption: <h1 style={{ color: '#E8542B', textShadow: '1.5px 1.5px 2px rgb(0,0,0,0.7)' }}>Welcome to Our Store.<br /> We Provide 24/7 Service</h1>
        },
        {
            url: `${img2}`,
            caption: <h1 style={{ color: '#E8542B', textShadow: '1.5px 1.5px 2px rgb(0,0,0,0.5)' }}>We Offer Huge Variety Quality Garanteed</h1>
        },
        {
            url: `${img3}`,
            caption: <div style={{ color: '#E8542B', textShadow: '1.5px 1.5px 2px rgb(0,0,0,0.5)', textAlign : 'center' }}>
                <h1>Most Loved Phones on Installment Available</h1>
                <h1>Yes. You Heard it Right.!</h1>
            </div>
        },
    ];
    return (
        <div className="slide-container">
            <Fade>
                {fadeImages.map((item) => (
                    <div className="each-fade" style={{ display: 'flex', justifyContent: 'center' }}>
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
                                top: '40%'
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
