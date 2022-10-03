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

import Paper from "../../../../src/paper.pdf"

export default function FloodOfChanges() {
    return (
        <>
            {/* title */}
            <section className="section section-lg section-shaped pb-250" id="FloodOfChanges">
                <div className="shape shape-style-1 shape-floods">
                </div>
                {/* first section */}
                <Container className="py-lg-md d-flex">
                    <div className="col px-0">
                        <Row>
                            <Col lg="6">
                                <h1 className="display-3 text-white">
                                    A FLOOD OF CHANGES
                                    {/* <span> Did you know that the main source of risk  </span> */}
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
                    <h3> What causes floods in Washington state? It rains pineapples? Wet droughts? I don’t get it! </h3>
                    <p>  
                        This is where our water cycle begins. When superficial water from the North Pacific Ocean  is warmed, it evaporates and starts creating clouds. These big air masses are composed of high amounts of water vapor displaces, receiving the name of “atmospheric rivers”. Due to Climate Change temperatures have increased, causing strong and persistent large-scale flow of warm moist air, associated with heavy precipitations, a phenomenon called “The Pineapple Express”.  Nowadays, scientists believe that Washington state is facing “Wet Droughts”. The region had plenty of storms blow across over the winter, but because of record warm temperatures, most precipitation fell as rain instead of snow, incapable of being absorbed by the soil. 
                    </p>

                    <h3> Impact </h3>
                    <p> 
                        Among the damages these floods can cause we find:
                        <ul>
                            <li> Loss of soil valuable for the agricultural industry and quick erosion of earth material. </li>
                            <li> Loss of cattle and native fauna. </li>

                            <li> Loss of opportunities of use of water. </li>
                        </ul>
                        According to the “States at Risks” project, it is estimated that rains will increase 19% by 2080. 
                    </p>

                    <h3> Validating Information </h3>
                    <p> How can a study made in an isolated peninsula in western Washington State be useful ?
                        Along our validation process we will infer how strongly correlated these mountain formations precipitations are.
                        Also, the U.S. has confirmed it could suffer an aproximated economic loss by floods of 50 billion dollars in 2022 (NOW!). 
                    </p>
                    <a href={Paper}>
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