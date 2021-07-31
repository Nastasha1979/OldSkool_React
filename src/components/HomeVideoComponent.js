import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";


function HomeVideo(props) {
    const [viewWidth] = useState(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    if(props.isLoading){
        return(
            <div className="text-center m-auto my-5">
                <Loading />
            </div>
        );
    }
    return(
        <Container fluid >

            <div className="homeContainer">
                {viewWidth >= 768 ?
                    <video loop autoPlay muted src={baseUrl + "/assets/HisGirlFridayTrim2.mp4"}  className="myMovie" />
                :
                    <img src={baseUrl + "/assets/featuredImg.jpg"} alt="His Girl Friday Still" className="myImg"/>
                }
            </div>
            <div className={viewWidth >= 768 ? "overText" : "overText2"}>
                <h1 style={{color: "white"}}>Come take a trip through the past...</h1>    
            </div> 
            <div className={viewWidth >= 768 ? "underText" : "underText2"}>
                <h1 style={{color: "white"}}>...And journey with friends</h1>
            </div>  
        </Container>
    );
}

export default HomeVideo;

