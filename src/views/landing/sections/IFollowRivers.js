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

export default function IFollowRivers() {
    return (
        <>
            {/* title */}
            <section className="section section-lg section-shaped pb-250" id="IFollowRivers">
                <div className="shape shape-style-1 shape-rives">
                </div>
                {/* first section */}
                <Container className="py-lg-md d-flex">
                    <div className="col px-0">
                        <Row>
                            <Col lg="6">
                                <h1 className="display-3 text-white">
                                    I Follow rivers
                                    <span> Do I? go to the rivers, with the rivers, downhill with the river  </span>
                                </h1>
                                <p className="lead text-white">
                                    chamullo
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


        </>
    )
}