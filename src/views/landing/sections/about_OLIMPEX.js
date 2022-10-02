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

// img
import us from "../imgs/us.jpeg"


export default function About_OLIMPEX() {
    return (
        <>
            <section className="section bg-secondary">
                <Container>
                    <Row className="row-grid align-items-center">
                        <Col md="6">
                            <div className="pl-md-5">
                                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                    <i className="ni ni-single-02" />
                                </div>
                                <h3> About Olympex </h3>
                                <p className="lead">
                                    We are a multidisciplinary group of Argentinian students who live in the province of Mendoza, in the proximity of the Andean range. Due to the water crisis we’ve been facing since 2010, we live the consequences of climate change everyday and this is what inspired us to help others understand the role of water in our lives and how our future depends on us.
                                </p>
                                <h4> Mission </h4>
                                <p>
                                    Our purpose is to educate people about how climate change is drastically affecting their lives based on factual
                                    evidence provided by NASA and how they can take action from their role in their community.
                                </p>
                                <h4> VISSION </h4>
                                <p>
                                    We seek our program to reach other locations where the water cycle plays as important a role as it
                                    does in Washington State while OLYMPEX continues the collection of data.
                                </p>
               
                            </div>
                        </Col>
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
                                        Design System
                                    </h4>
                                    <p className="lead text-italic text-white">
                                        The Arctic Ocean freezes every winter and much of the
                                        sea-ice then thaws every summer, and that process will
                                        continue whatever happens.
                                    </p>
                                </blockquote>
                            </Card>
                        </Col>
                    </Row> 
                </Container>
            </section>
        </>
    )
}