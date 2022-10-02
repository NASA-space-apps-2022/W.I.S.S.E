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
                            <div className="pl-md-5">
                                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                    <i className="ni ni-world" />
                                </div>
                                <h3>  Washington’s climate is changing for sure.  </h3>
                                <p className="lead">
                                    Have you ever felt like everybody talks about Climate Change… but it doesn’t affect you at all? This is for you, Washington citizens… Some shocking facts that will blow your mind: 
                                </p>
                                <h4> During the last 20 years, 9 out of 10 coastal floods have been caused by human action </h4>
                                <p>
                                    It is known that floods are a natural hazard in the western of U.S.A, but each year its frequency has arised due to climate change and citizens are suffering the harmful consequences.
                                </p>

                                <h4> The state’s Department of Agriculture is proyecting crop losses of $1,2 billion due to the “wet drought” issue </h4>
                                <p> Eventhough rainning events are about to increase, this water is not captured and impacts on the loss of soil, among others.  </p>

                                <h4> In Washington, there are more than 380,000 people living in areas at an elevated risk of inland flooding.  </h4>
                                <p> Floods have created a difficult life situation among Washington citizens and a loss in economy that goverment expects to increase each year. </p>
                               
                                <h4> By each degree temperature rises, the economic loss in agriculture due to plagues </h4>
                                <p> increases between 10 and 25 percent. According to a study made by the Science magazine, we know that raising of temperatures supports the increasing of harmful bugs which affect crops, such as the stik bug in the western area of the U.S. Over the past century, most of the state has warmed one to two degrees (F).  </p>
               
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
                                        About Olympex
                                    </h4>
                                    <p className="lead text-italic text-white">
                                        OLYMPEX is the most recent field experiment based on campaigns during short terms created by NASA to study storms passing over West Coast mountain ranges of the Americas. Its main target is to solve the need for validation of climate phenomena and a better undestanding of the hydrological cycle in the area of Washington state . Its name was inspired by Olympic Mountains, the original place where data we have been working with was collected. 
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