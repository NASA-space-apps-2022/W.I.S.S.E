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

export default function HowHelp() {
    const [occupation, setoccupation] = useState("Student")
    const [data, setdata] = useState()
    const [img, setimg] = useState()

   useEffect(() => {
    switch (occupation) {
        case 'Student':
            setdata("SDG 13 focuses on climate change. Climate change is caused by anthropogenic emissions of CO2 and other greenhouse gasses. It is affecting every country on every continent. It is disrupting national economies and affecting lives. Go global! Create a network and get to know problematics in other parts of the world. Share your experience learning about the water cycle and its role in our lives and keep learning!.")
            break;
        case 'Scientist':
            setdata()
            break;
        case 'Authority':
            setdata("SDG 16 intends peaceful and inclusive societies based on respect for human rights, protection of the most vulnerable, the rule of law and good governance at all levels. Promote water policies and campaigns that support this kind of data collection. Spread awareness among other authorities and help connect people who face consequences of these phenomena. Alone we can go faster, but together we can go further.")
            break
        case 'Citizen':
            setdata("SDG 11 aims to renew and plan cities and other human settlements in a way that offers opportunities for all, with access to basic services, energy, housing, transportation and green public spaces, while reducing resource use and environmental impact. Your action DOES MAKE A CHANGE.")
            break;
        case 'Producer':
            setdata("SDG 2 seeks sustainable solutions to end hunger in all its forms by 2030 and to achieve food security. While facing plagues on your lands, search for alternativy and sustainable solutions. Check the Good Agricultural Practices provided by FAO, share them with your partners and communicate how you’re implementing these sustainable practices.")
            break;
        case 'Educator':
            setdata("SDG 4 aims at ensuring inclusive and equitable quality education and promotes lifelong learning opportunities for all. Share these factual information and share it with your students! Grow among them curiosity and awareness on the topics. Promote new ways of learning climate sciences and stemas among them.")
            break;
        default:      
    }
   },[occupation])

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
                        <h4 className="display-3 text-white">How can i help? </h4>
                        <p className="text-white">
                            We believe that together we can create a brighter future. Find out which Sustainable Development Goal you would be helping the world with your local action.
                        </p>
                    </div>
                </div>

                <div>
                    <Button color={occupation == "Student" ? "primary" : "neutral"} type="button" onClick={() => setoccupation("Student")}>
                        Student
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
                    <Button color={occupation == "Authority" ? "primary" : "neutral"} type="button" onClick={() => setoccupation("Authority")}>
                        Authority
                    </Button>
                    <Button color={occupation == "Scientist" ? "primary" : "neutral"} type="button" onClick={() => setoccupation("Scientist")}>
                        Scientist
                    </Button>
                </div>

                <DataCard data={data} title={occupation}/>


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

function DataCard({data, title}) {
    return (
        <Card className="shadow shadow-lg--hover mt-5">
            <CardBody>
                <div className="d-flex px-3">
                    <div>
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h5 className="title text-success">
                           {title}
                        </h5>
                        <p>
                            {data}
                        </p>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}