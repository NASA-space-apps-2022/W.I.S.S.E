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
import Modals from "views/IndexSections/Modals";

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

            {isMobile == true ? null : <>
                <Modals/>
                <iframe scrolling="no" src="https://nasa-space-apps-2022.github.io/wumpus-world-simulator/" style={iframe_stuyle} title="description"></iframe>
            </> }

            <iframe scrolling="no" src="https://quizizz.com/join/quiz/6339c1c87c2d2e001ded6a53/start?studentShare=true" style={iframe_stuyle} title="description"></iframe>

            
        </>
    )
}