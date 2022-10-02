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

import TheTeam from "./TheTeam";

// img
import us from "../imgs/us.jpeg"
// import augusto from "./imgs/us/augusto.jpg"
import augusto from "../imgs/us/augusto.jpg"
import chiara from "../imgs/us/chiara.jpg"

export default function AboutUs() {
    return (
        <>
            <section className="section bg-secondary">
                <Container>
                    <Row className="row-grid align-items-center">
                        <Col md="6">
                            <Card className="bg-default shadow border-0">
                                <CardImg
                                    alt="..."
                                    // src={require("assets/img/theme/img-1-1200x1000.jpg")}
                                    src={us}
                                    top
                                />
                                <blockquote className="card-blockquote">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg-bg"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 583 95"
                                    >
                                        <polygon
                                            className="fill-default"
                                            points="0,52 583,95 0,95"
                                        />
                                        <polygon
                                            className="fill-default"
                                            opacity=".2"
                                            points="0,42 583,95 683,0 0,95"
                                        />
                                    </svg>
                                    <h4 className="display-3 font-weight-bold text-white">
                                        
                                    </h4>
                                    <p className="lead text-italic text-white">
                                        
                                    </p>
                                </blockquote>
                            </Card>
                        </Col>
                        <Col md="6">
                            <div className="pl-md-5">
                                {/* <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                    <i className="ni ni-single-02" />
                                </div> */}
                                <h3> About us</h3>
                                <p className="lead">
                                    We are a multidisciplinary group of Argentinian students who live in the province of Mendoza, in the proximity of the Andean range. Due to the water crisis we’ve been facing since 2010, we live the consequences of climate change everyday and this is what inspired us to help others understand the role of water in our lives and how our future depends on us.
                                </p>
                                <h4> Mission </h4>
                                <p>
                                    Our purpose is to educate people about how climate change is drastically affecting their lives based on factual
                                    evidence provided by NASA and how they can take action from their role in their community.
                                </p>
                                <h4> VISION </h4>
                                <p>
                                    We seek our program to reach other locations where the water cycle plays as important a role as it
                                    does in Washington State while OLYMPEX continues the collection of data.
                                </p>
                                {/* <a
                                    className="font-weight-bold text-warning mt-5"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    A beautiful UI Kit for impactful websites
                                </a> */}
                            </div>
                            {/* <Row>
                                <Col className="mb-6 mb-lg-0" lg="4" md="6">
                                    <div className="px-5">
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Chiara Prigione</span>
                                                <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                                    Natural Renewable Resources Engineering Student
                                                </small>
                                            </h5>
                                            <div className="mt-1">
                                                <a href="https://www.linkedin.com/in/chiara-prigione/"> 
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="primary"
                                                >
                                                    <i className="fa fa-linkedin" />
                                                </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="mb-6 mb-lg-0" lg="4" md="6">
                                    <div className="px-5">
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1" style={{ "font-size": "1rem" }}>David Maximiliano Sotar Maidana</span>
                                                <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                                    Estudiante de Ing. Mecatrónica
                                                </small>
                                            </h5>
                                            <div className="mt-1">
                                                <a href="https://www.linkedin.com/in/d-maximiliano-sotar-maidana/"> 
                                                    <Button
                                                        className="btn-icon-only rounded-circle"
                                                        color="primary"
                                                    >
                                                        <i className="fa fa-linkedin" />
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-6 mb-lg-0" lg="4" md="6">
                                    <div className="px-5">
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Manuel Ignacio López</span>
                                                <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                                    Ingeniería Industrial 
                                                </small>
                                            </h5>
                                            <div className="mt-1">
                                                <a href="https://www.linkedin.com/in/manuelignaciolopez/"> 
                                                    <Button
                                                        className="btn-icon-only rounded-circle"
                                                        color="primary"
                                                    >
                                                        <i className="fa fa-linkedin" />
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="mb-6 mb-lg-0" lg="4" md="6">
                                    <div className="px-5">
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Anabella Natalí Bottasso</span>
                                                <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                                    Estudiante de Ingeniería Industrial
                                                </small>
                                            </h5>
                                            <div className="mt-1">
                                                <a href="https://www.linkedin.com/in/anabella-natal%C3%AD-bottasso-471a11138/"> 
                                                    <Button
                                                        className="btn-icon-only rounded-circle"
                                                        color="primary"
                                                    >
                                                        <i className="fa fa-linkedin" />
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="mb-6 mb-lg-0" lg="4" md="6">
                                    <div className="px-5">
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1" style={{ "font-size": "1rem" }}>gabi</span>
                                                <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                                    Marketing Strategist
                                                </small>
                                            </h5>
                                            <div className="mt-1">
                                                <a href="https://www.linkedin.com/in/anabella-natal%C3%AD-bottasso-471a11138/"> 
                                                    <Button
                                                        className="btn-icon-only rounded-circle"
                                                        color="primary"
                                                    >
                                                        <i className="fa fa-linkedin" />
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-6 mb-lg-0" lg="4" md="6">
                                    <div className="px-5">
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Augusto Antonelli</span>
                                                <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                                    Estudiante de ingeniería química
                                                </small>
                                            </h5>
                                            <div className="mt-1">
                                                <a href="https://www.linkedin.com/in/augusto-nevio-antonelli-pol/"> 
                                                    <Button
                                                        className="btn-icon-only rounded-circle"
                                                        color="primary"
                                                    >
                                                        <i className="fa fa-linkedin" />
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            */}

                            <TheTeam></TheTeam>



                        </Col>
                    </Row> 
                </Container>
            </section>



            {/* <section className="section section-lg">
                <Container>
                    <Row className="justify-content-center text-center mb-lg">
                        <Col lg="8">
                            <h2 className="display-3">The amazing Team</h2>
                            <p className="lead text-muted">
                                According to the National Oceanic and Atmospheric
                                Administration, Ted, Scambos, NSIDClead scentist, puts the
                                potentially record maximum.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mb-6 mb-lg-0" lg="3" md="6">
                            <div className="px-5">
                                <img
                                    alt="..."
                                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                    src={augusto}
                                    style={{ width: "125px" }}
                                />
                                <div className="pt-4 text-center">
                                    <h5 className="title">
                                        <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Augusto Antonelli</span>
                                        <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                            Marketing Strategist
                                        </small>
                                    </h5>
                                </div>
                            </div>
                        </Col>

                        <Col className="mb-6 mb-lg-0" lg="3" md="6">
                            <div className="px-5">
                                <img
                                    alt="..."
                                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                    src={chiara}
                                    style={{ width: "125px" }}
                                />
                                <div className="pt-4 text-center">
                                    <h5 className="title">
                                        <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Chiara Prigione</span>
                                        <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                            Marketing Strategist
                                        </small>
                                    </h5>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    

                </Container>
            </section> */}


            {/* <section className="section section-lg bg-gradient-default"> */}
            <section className="section section-lg educate">
                <Container className="">
                    <Row className="text-center justify-content-center">
                        <Col lg="10">
                            <h2 className="display-3 text-white"> Why educate? </h2>

                        </Col>
                    </Row>
                    <Row className="row-grid mt-5">
                        <Col lg="4">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-settings text-primary" />
                            </div>
                            <h5 className="text-white mt-3">Action-oriented</h5>
                            <p className="text-white mt-3">
                                Citizens take action, action promotes policies, policies develops plans and aspirations to enact locally.
                            </p>
                        </Col>
                        <Col lg="4">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-ruler-pencil text-primary" />
                            </div>
                            <h5 className="text-white mt-3">Encouraging hope</h5>
                            <p className="text-white mt-3">
                                busting curiosity and optimism, this programme inspires others to discover ways to get involved from a social and civic perspective.
                            </p>
                        </Col>
                        <Col lg="4">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-atom text-primary" />
                            </div>
                            <h5 className="text-white mt-3">Evidence-based</h5>
                            <p className="text-white mt-3">
                                Starting with evidence, people trust the source and start spreading awareness.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="separator separator-bottom separator-skew zindex-100">
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
        </>
    )
}