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

export default function WhatStings() {
    return (
        <>
            {/* title */}
            <section className="section section-lg section-shaped pb-250" id="WhatStings">
                <div className="shape shape-style-1 shape-stink">
                </div>
                {/* first section */}
                <Container className="py-lg-md d-flex">
                    <div className="col px-0">
                        <Row>
                            <Col lg="6">
                                <h1 className="display-3 text-white">
                                    What stinks?
                                    <span> slogan </span>
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

            <section className="section section-lg pt-6">
                <Container className="py-lg-md">
                    <h3> How Olympic mountains snowfall and rainfall are related to Cascade mountain range precipitations </h3>
                    <p>  Did you know how highly your water supply and the fruit you eat relies on snow from the Cascades? How can Western and Estern Washington have different weather? Do you understand the importance of water conservation? Read more about this in the following article.
                    </p>

                    <h3> Impact </h3>
                    <p> We need to bathe in less time! Turn off the faucet when brushing your teeth! How many times have we heard this?
                        Even though it's not false we save some water by applying these practices, we need to be better informed about which are the primary water uses, so as to better focus our solutions.
                        Washington State University, Vineland, and other researchers may have solutions that can make strong impacts.
                    </p>

                    <h3> Validating Information </h3>
                    <p> How can a study made in an isolated peninsula in western Washington State be useful ?
                        Along our validation process we will infer how strongly correlated these mountain formations precipitations are.
                    </p>
                    <a href="">
                        <Button
                            block
                            className="btn-warning"
                            size="lg"
                        >
                            read our paper
                        </Button>
                    </a>
                </Container>
            </section>

        </>
    )
}