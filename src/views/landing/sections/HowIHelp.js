// reactstrap components
import { useEffect } from "react";
import { useState } from "react";
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

import two from "../imgs/how_imgs/2.png"
import four from "../imgs/how_imgs/4.png"
import nine from "../imgs/how_imgs/9.png"
import eleven from "../imgs/how_imgs/11.png"
import twelve from "../imgs/how_imgs/12.png"
import Thirteen from "../imgs/how_imgs/13.png"
import fifteen from "../imgs/how_imgs/15.png"
import sixteen from "../imgs/how_imgs/16.png"

export default function HowHelp() {
    const [occupation, setoccupation] = useState("Student")
    const [data, setdata] = useState()
    const [link, setlink] = useState()

    useEffect(() => {
        switch (occupation) {
            case 'Student':
                setlink("https://dnrtrustlands.org/a-climate-solution/?utm_source=P3D&utm_medium=Search&utm_campaign=P3D_Search&gclid=Cj0KCQjwyt-ZBhCNARIsAKH1174vhlzETer5SBz6b99h_kNm3RktZsZpfWKqwEJxdOTEuVR9Wd8q1SkaAsF4EALw_wcB ")
                setdata("SDG 13 focuses on climate change. Climate change is caused by anthropogenic emissions of CO2 and other greenhouse gasses. It is affecting every country on every continent. It is disrupting national economies and affecting lives. Go global! Create a network and get to know problematics in other parts of the world. Share your experience learning about the water cycle and its role in our lives and keep learning! ")
                break;
            case 'Decision makers':
                setlink("https://mrsc.org/Home/Explore-Topics/Environment/Water-Topics/Water-Rights.aspx ")
                setdata("SDG 16 intends peaceful and inclusive societies based on respect for human rights, protection of the most vulnerable, the rule of law and good governance at all levels. Promote water policies and campaigns that support this kind of data collection. Spread awareness among other decision makers and help connect people who face consequences of these phenomena. Alone we can go faster, but together we can go further.")
                break;
            case 'Scientist':
                setlink("https://www.earthdata.nasa.gov/learn/data-user-profiles ")
                setdata("The SDG 15 aims to protect, restore and promote the sustainable use of terrestrial ecosystems, sustainably manage the forests, combating desertification, arrest and reverse land degradation and halt the loss of biodiversity. As a scientist, you know more about this fact than anyone else. Your responsibility has to do with getting in contact among other scientists and the NASA team members sharing your research that supports our data.")
                break;
            case 'Citizen':
                setlink("https://www.wawater.com/conservation/water-conservation/ ")
                setdata("SDG 11 aims to renew and plan cities and other human settlements in a way that offers opportunities for all, with access to basic services, energy, housing, transportation and green public spaces, while reducing resource use and environmental impact. Your action DOES MAKE A CHANGE. Implement sustainable habits in your daily life and get involved with others issues and find ways for helping them. ")
                break;
            case 'Producer':
                setlink("https://www.fao.org/3/i6677e/i6677e.pdf ")
                setdata("SDG 2 seeks sustainable solutions to end hunger in all its forms by 2030 and to achieve food security, while SDG 12 encourages more sustainable consumption and production patterns through various measures. While facing plagues issues on your lands, search alternatives from a sustainable perspective. Check the Good Agricultural Practices provided by FAO, share them with your partners and communicate how you’re implementing them. This way you would not just be making a change in the agricultural industry, but also you would be providing other sanitary places and important biodiversity. ")
                break;
            case 'Educator':
                setlink("https://doh.wa.gov/sites/default/files/legacy/Documents/4200//water_smart.pdf ")
                setdata("SDG 4 aims at ensuring inclusive and equitable quality education and promotes lifelong learning opportunities for all. Share this factual information and show it to your students! Grow among them curiosity and awareness on the topics. Promote new ways of learning climate sciences and STEMS among them. You can start from the link below.")
                break;
            default:
        }
    }, [occupation])

    return (
        <section className="section pb-0 bg-gradient-warning">
            <Container>
                <div className="d-flex px-3">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                            <i className="ni ni-bulb-61 text-primary" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-white">How can I help? </h4>
                        <p className="text-white">
                            We believe that together we can create a brighter future. Find out which Sustainable Development Goal you would be helping the world with your local action.
                        </p>
                    </div>
                </div>

                <h3 className=" text-white"> what is your occupation? </h3>

                <div>
                    <Button color={occupation == "Student" ? "primary" : "neutral"} type="button" onClick={() => setoccupation("Student")}>
                        Student
                    </Button>
                    <Button color={occupation == "Decision makers" ? "primary" : "neutral"} type="button" onClick={() => setoccupation("Decision makers")}>
                        Decision makers
                    </Button>
                    <Button color={occupation == "Educator" ? "primary" : "neutral"} type="button" onClick={() => setoccupation("Educator")}>
                        Educator
                    </Button>
                    <Button color={occupation == "Producer" ? "primary" : "neutral"} type="button" onClick={() => setoccupation("Producer")}>
                        Producer
                    </Button>
                    <Button color={occupation == "Citizen" ? "primary" : "neutral"} type="button" onClick={() => setoccupation("Citizen")}>
                        Citizen
                    </Button>
                    <Button color={occupation == "Scientist" ? "primary" : "neutral"} type="button" onClick={() => setoccupation("Scientist")}>
                        Scientist
                    </Button>
                </div>

                <DataCard data={data} title={occupation} link={link}/>


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
    )
}

function DataCard({ data, title ,link}) {
    return (
        <Card className="shadow shadow-lg--hover mt-5">
            <CardBody>
                <div className="d-flex px-3">
                    <div>
                        {/* <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                        </div> */}

                        
                        
                        {title == "Student" ? <><img src={Thirteen} style={{height: "100px"}}/></> : null }
                        
                        {title == "Decision makers" ? <><img src={nine} style={{height: "100px"}}/> <img src={sixteen} style={{height: "100px"}}/></> : null }
                        
                        {title == "Educator" ? <><img src={four} style={{height: "100px"}}/></> : null }

                        {title == "Producer" ? <><img src={two} style={{height: "100px"}}/><img src={twelve} style={{height: "100px"}}/></> : null }
                       
                        {title == "Citizen" ? <><img src={eleven} style={{height: "100px"}}/></> : null }

                        {title == "Scientist" ? <><img src={fifteen} style={{height: "100px"}}/></> : null }
                    </div>
                    <div className="pl-4">
                        <h5 className="title text-success">
                            {title}
                        </h5>
                        <p>
                            {data}
                        </p>
                        <a
                            className="text-warning"
                            href={link}
                        >
                            Learn more
                        </a>
                    </div>
                    
                </div>
            </CardBody>
        </Card>
    )
}