import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";


function HomeVideo() {
    const [viewWidth] = useState(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    console.log(viewWidth);
    return(
        <Container fluid >

            <div>
                {/* <Row className="rowText1">
                    <Col md="12">
                        <p>Join a community of classic film lovers.</p>
                    </Col>
                </Row> */}
                {viewWidth >= 768 ?
                    <video loop autoPlay muted src="/assets/HisGirlFridayTrim2.mp4"  className="myMovie" />
                :
                    <img src="/assets/featuredImg.jpg" alt="His Girl Friday Still" className="myImg"/>
                }
                {/* <Row className="rowText2">
                    <Col md="8">
                        <p>Join a community of classic film lovers.</p>
                    </Col>
                </Row> */}
            </div>
                   
        </Container>
    );
}

export default HomeVideo;

