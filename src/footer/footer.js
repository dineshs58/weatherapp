import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import './footer.css';


function Footers()
{
    return(
        <>
        <div className="back_Ground">
        <Container>
            
            <Row>
                <Col lg={12}>
                    <Row>
                        <Col lg={3} md={12}>
                            <div className="footers">
                                <h4>Reference</h4>
                                <p>Legend</p>
                                <p>Glossary</p>
                                <p>World</p>
                                <p>Knowledge Base</p>
                            </div>
                        </Col>
                        <Col lg={3} md={12}>
                            <div className="footers">
                                <h4>Company</h4>
                                <p>Photo</p>
                                <p>News</p>
                                <p>Conatct Us</p>
                            </div>
                        </Col>
                        <Col lg={3} md={12}>
                            <div className="footers">
                                <h4>Support</h4>
                                <p>1800-250-5260</p>
                                <p>support@example.com</p>
                                <p>support@example.com</p>
                            </div>
                        </Col>
                        <Col lg={3} md={12}>
                            <div className="footers">
                                <p><img src={require('../assert/Coluds.png')} width={40} height={40} alt=""/>  LiveWeather</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                            </div>
                        </Col>
                        <hr className="container text-white my-3 "></hr>
                        <h5 className="container text-white text-center">2022-2023 © Weather. All rights reserved.</h5>
                    </Row>
                </Col>
            </Row>
            
        </Container>
        </div>
        </>
    )
}
export default Footers