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

export default function TheTeam() {
    const mystyle = {
        display: "flex",
        "flex-wrap": "wrap",
        "justify-content": "center"
    };
    return (
        <Row>
            <Col style={mystyle}>
                <div className="px-5">
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Chiara Prigione</span>
                            <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                Natural Renewable Resources Engineering Student
                            </small>
                        </h5>
                        <div className="mt-1">
                            <a href="https://www.linkedin.com/in/chiara-prigione/">
                                <Button
                                    className="btn-icon-only rounded-circle"
                                    color="primary"
                                >
                                    <i className="fa fa-linkedin" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-5">
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Maximiliano Sotar</span>
                            <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                Mechatronic Engineering Student
                            </small>
                        </h5>
                        <div className="mt-1">
                            <a href="https://www.linkedin.com/in/d-maximiliano-sotar-maidana/">
                                <Button
                                    className="btn-icon-only rounded-circle"
                                    color="primary"
                                >
                                    <i className="fa fa-linkedin" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-5">
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Manuel López</span>
                            <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                Ingeniería Industrial
                            </small>
                        </h5>
                        <div className="mt-1">
                            <a href="https://www.linkedin.com/in/manuelignaciolopez/">
                                <Button
                                    className="btn-icon-only rounded-circle"
                                    color="primary"
                                >
                                    <i className="fa fa-linkedin" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col style={mystyle}>
                <div className="px-5">
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Anabella Bottasso</span>
                            <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                Estudiante de Ingeniería Industrial
                            </small>
                        </h5>
                        <div className="mt-1">
                            <a href="https://www.linkedin.com/in/anabella-natal%C3%AD-bottasso-471a11138/">
                                <Button
                                    className="btn-icon-only rounded-circle"
                                    color="primary"
                                >
                                    <i className="fa fa-linkedin" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-5">
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Gabriel Vitelli</span>
                            <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                Mechatronic Engineering Student
                            </small>
                        </h5>
                        <div className="mt-1">
                            <a href="https://www.linkedin.com/in/anabella-natal%C3%AD-bottasso-471a11138/">
                                <Button
                                    className="btn-icon-only rounded-circle"
                                    color="primary"
                                >
                                    <i className="fa fa-linkedin" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-5">
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1" style={{ "font-size": "1rem" }}>Augusto Antonelli</span>
                            <small className="h6 text-muted" style={{ "font-size": "0.7rem" }}>
                                Estudiante de ingeniería química
                            </small>
                        </h5>
                        <div className="mt-1">
                            <a href="https://www.linkedin.com/in/augusto-nevio-antonelli-pol/">
                                <Button
                                    className="btn-icon-only rounded-circle"
                                    color="primary"
                                >
                                    <i className="fa fa-linkedin" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}