/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

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

const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footers/SimpleFooter.js";
import MainSection from "./sections/MainSection";
import WhatStings from "./sections/WhatStings";
import FloodOfChanges from "./sections/FloodOfChanges";
import IFollowRivers from "./sections/IFollowRivers";

import Games from "./sections/Games";

import HowHelp from "./sections/HowIHelp";
import AboutUs from "./sections/about_us";
import About_OLIMPEX from "./sections/about_OLIMPEX"


import img_tipo_corpora from "./imgs/Logo_Lavanda.png"

const mystyle = {
  display: "flex",
  "justify-content": "center"
};

const img_corpora = {
  width: "90%",
};

const p_style = {
 "font-size": "0.7rem"
}

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  
  render() {
    return (
      <>
        <DemoNavbar id="home" />
        <main ref="main">

          <MainSection/>

          <section className="section section-lg bg-gradient-default">
                <Container className="">
                    <Row className="text-center justify-content-center">
                        <Col lg="10">
                            <h2 className="display-3 text-white"> Washington’s climate is changing for sure. </h2>
                            <p className="text-white mt-3" style={p_style}> Have you ever felt like everybody talks about Climate Change… but it doesn’t affect you at all? This is for you, Washington citizens… Some shocking facts that will blow your mind: </p>
                        </Col>
                    </Row>
                    <Row className="row-grid mt-5">
                        <Col lg="3">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-settings text-primary" />
                            </div>
                            <h5 className="text-white mt-3">During the last 20 years, 9 out of 10 coastal floods have been caused by human action.</h5>
                            <p className="text-white mt-3" style={p_style}>
                            It is known that floods are a natural hazard in the western of U.S.A, but each year its frequency has arised due to climate change and citizens are suffering the harmful consequences.
                            </p>
                        </Col>
                        <Col lg="3">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-ruler-pencil text-primary" />
                            </div>
                            <h5 className="text-white mt-3">The state’s Department of Agriculture is proyecting crop losses of $1,2 billion due to the “wet drought” issue</h5>
                            <p className="text-white mt-3" style={p_style}>
                            Eventhough rainning events are about to increase, this water is not captured and impacts on the loss of soil, among others. 
                            </p>
                        </Col>
                        <Col lg="3">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-atom text-primary" />
                            </div>
                            <h5 className="text-white mt-3">In Washington, there are more than 380,000 people living in areas at an elevated risk of inland flooding. </h5>
                            <p className="text-white mt-3" style={p_style}>
                            Floods have created a difficult life situation among Washington citizens and a loss in economy that goverment expects to increase each year.   
                            </p>
                        </Col>
                        <Col lg="3">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-atom text-primary" />
                            </div>
                            <h5 className="text-white mt-3">By each degree temperature rises, the economic loss in agriculture due to plagues </h5>
                            <p className="text-white mt-3" style={p_style}>
                            increases between 10 and 25 percent. According to a study made by the Science magazine, we know that raising of temperatures supports the increasing of harmful bugs which affect crops, such as the stik bug in the western area of the U.S. Over the past century, most of the state has warmed one to two degrees (F).
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

          {/* <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Carefully crafted components
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}

          <WhatStings/>

          <FloodOfChanges/>

          <IFollowRivers/>

          {isMobile == false ? <Games/> : null }

          

          <HowHelp/>

          <AboutUs/>

          <h1 style={{textAlign: "center"}}> Our secret recipe to reach you </h1>

          <section className="" style={mystyle}>  
            <img src={img_tipo_corpora} style={img_corpora}/>
          </section>

          <About_OLIMPEX/>

          <section className="section section-lg pt-0">
            <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        Do you wanna see something cool?
                      </h3>
                      {/* <p className="lead text-white mt-3">
                        palabras inspiradoras
                      </p> */}
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <a href="">
                        <Button
                          block
                          className="btn-white"
                          color="default"
                          size="lg"
                        >
                        check out this!
                        </Button>
                      </a>
                    </Col>
                  </Row>
                </div>
              </Card>
          </section>

          
          <Footer/>

        </main>
      </>
    );
  }
}

export default Landing;
