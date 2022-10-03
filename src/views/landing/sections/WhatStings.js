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

import paper from "../../../paper.pdf"

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
                                    WHAT STINKS?
                                    {/* <span> slogan </span> */}
                                </h1>
                                {/* <p className="lead text-white">
                                    chamullo
                                </p> */}
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
                    <h3> Climate change and bugs, a hidden consequence </h3>
                    <p>
                        The stink bug comes from Asia and it’s been around 20 years since it arived to the U.S.. As a potential plague, stink bug contaminates the plants, by altering its flavor and leaving a thin layer of white film underneath the skin of the fruit. Consequences of Climate Change, such as the increasing temperatures and atmospheric moisture has provided the perfect conditions for this little but powerful bug to spread among the U.S. 
                    </p>

                    <h3> Impact </h3>
                    <p> During outbreak years, the brown marmorated stink bug has caused significant losses to tree fruit producers, damaging apples, berries and pears. All these are grown in Washington state. According to the USApple, Mid-Atlantic apple growers lost $37 million last year. Damages are not significant in our study area right now, but it does not mean it won’t be at some point. 
                    </p>

                    <h3> Validating Information </h3>
                    <p> Due to the fact that there is not enough information to probe the variables related with the distribution of the bug, we implemented diverse tools such as Maxent and Machine Learning empiric models to relate data collected by OLYMPEX and the Pest Management Science. You can find all this data at the CASEI platform from NASA. Through these models we evaluated potential spread of the species and found out that its ecological zone will expand to the North and the Northwest coasts as well.

                    </p>
                    <a href={paper}>
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