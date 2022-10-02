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

import { useMediaQuery } from 'react-responsive';

export default function Games() {
    const iframe_stuyle = {
        "min-height": "550px",
        width: "100%"
    };
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        <>
            <section className="section section-lg bg-gradient-default" id="games">
                <Container className="">
                    <Row className="text-center justify-content-center">
                        <Col lg="10">
                            <h2 className="display-3 text-white"> Games! </h2>

                            <p className="lead text-white">
                                We are convinced that the best way to learn is by playing, that is why we propose this game
                            </p>

                        </Col>
                    </Row>

                    {/* <Row className="row-grid mt-5">
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
                                Cheering curiosity and optimism, this programme inspires others to discover ways to get involved from a social and civic perspective.
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
                    </Row> */}
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

            {isMobile == true ? null :<iframe src="https://nasa-space-apps-2022.github.io/wumpus-world-simulator/" style={iframe_stuyle} title="description"></iframe>}

            <iframe src="https://quizizz.com/join/quiz/6339c1c87c2d2e001ded6a53/start?studentShare=true" style={iframe_stuyle} title="description"></iframe>

            
        </>
    )
}