import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";


function HomeVideo() {
    const [viewWidth] = useState(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    console.log(viewWidth);
    return(
        <Container fluid >

            <div>
                {viewWidth >= 768 ?
                    <video loop autoPlay muted src={baseUrl + "/assets/HisGirlFridayTrim2.mp4"}  className="myMovie" />
                :
                    <img src={baseUrl + "/assets/featuredImg.jpg"} alt="His Girl Friday Still" className="myImg"/>
                }
            </div>
                   
        </Container>
    );
}

export default HomeVideo;

