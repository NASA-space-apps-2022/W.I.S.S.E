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
import us from "../imgs/olympex2.jpg"


export default function About_OLIMPEX() {
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
                                        About Olympex
                                    </h4>
                                    <p className="lead text-italic text-white">
                                        OLYMPEX is the most recent field experiment based on campaigns during short periods of time created by NASA to study storms passing over West Coast mountain ranges of the Americas. Its main target is to provide better understanding and thus better prediction about storm patterns and other phenomena hydrological cycles in the area of Washington state as well.. Its name was inspired by the Olympic Mountains, the original place where data we have been working with was collected.
                                    </p>
                                    <a href="https://ghrc.nsstc.nasa.gov/home/field-campaigns/olympex "> More information </a>
                                </blockquote>
                            </Card>
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
                                        Our research
                                    </h4>
                                    <p className="lead text-italic text-white">
                                        we have done an intes work of analisis of the apex data, that work was plasmated in this paper:
                                    </p>
                                    <a href="">
                                        <Button
                                            block
                                            className="btn-white"
                                            color="default"
                                            size="lg"
                                        >
                                            read our paper
                                        </Button>
                                    </a>
                                </blockquote>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}