// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

export default function MainTitle() {
    return (
        <>
            <div className="position-relative">
                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-1 shape-index">
                    </div>
                    {/* first section */}
                    <Container className="py-lg-md d-flex">
                        <div className="col px-0">
                            <Row>
                                <Col lg="6">
                                    <h1 className="display-3 text-white">
                                       
                                        <span> Campaigns are short… but help for sure! </span>
                                    </h1>
                                    <p className="lead text-white">
                                    We are W.I.S.S.E,  an educational platform that helps to raise awareness among citizens about the impacts of climate change in local water cycles based on the evidence collected by the OLYMPEX campaign sponsored by NASA at Washington state. 
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-white"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>

                {/* 1st Hero Variation */}
            </div>

            <section className="section section-lg pt-lg-0 mt--200" id="sections">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <Row className="row-grid">
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                <i className="ni ni-pin-3" />
                                            </div>
                                            <h6 className="text-primary text-uppercase">
                                                What stinks?
                                            </h6>
                                            <p className="description mt-3">
                                            Climate change and bugs, a hidden consequence  <br></br> <span style={{color: "white"}}>kk</span> </p>
                                            {/* <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div> */}
                                            <a href="#WhatStings">
                                            <Button
                                                className="mt-4"
                                                color="primary"
                                            >
                                                Learn more
                                            </Button>
                                            </a>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                <i className="ni ni-pin-3" />
                                            </div>
                                            <h6 className="text-success text-uppercase">
                                                A flood of changes
                                            </h6>
                                            <p className="description mt-3">
                                            What causes floods in Washington state? It rains pineapples? Wet droughts? I don’t get it!
                                            </p>
                                            <a href="#FloodOfChanges">
                                            <Button
                                                className="mt-4"
                                                color="success"
                                            >
                                                Learn more
                                            </Button>
                                            </a>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                <i className="ni ni-pin-3" />
                                            </div>
                                            <h6 className="text-warning text-uppercase">
                                                I Follow rivers
                                            </h6>
                                            <p className="description mt-3">
                                            How Olympic mountains snowfall and rainfall are related to Cascade mountain range precipitations
                                            </p>
                                            <a href="#IFollowRivers">
                                            <Button
                                                className="mt-4"
                                                color="warning"
                                            >
                                                Learn more
                                            </Button>
                                            </a>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}