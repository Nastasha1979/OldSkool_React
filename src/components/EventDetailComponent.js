import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class EventDetail extends Component {

    render(props){
        if(props.eventsData) {
            return(
                <Container fluid>
                    <Row>
                        <Col>{props.eventsData.title}</Col>
                    </Row>
                </Container>
            );
        } else {
            return <div>ERROR</div>
        }
    }
}

export default EventDetail;