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
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col
} from "reactstrap";

class Modals extends React.Component {
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        <Row>
          <Col md="4">
          </Col>
          <Col md="4">
            <Button
              block
              className="mb-3"
              color="primary"
              type="button"
              onClick={() => this.toggleModal("defaultModal")}
            >
              About the Game!
            </Button>
            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                  About the Game!
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <h4> Use your arrow keys to move around finding fruit and avoiding the waves and Bugs! </h4>
                <p> You attack the bugs with the space key and collect fruit with the return key.</p>
                <h4> Why Bugs are “the enemy”? </h4>
                <p> Stink Bugs are the most harmful plague in the U.S. right now. They stink, they cause allergies and they damage crops. </p>
                <h4> What about the fruits? </h4>
                <p> Stink bugs feed on agricultural products and contaminate them, try to save them all!  </p>
                <h4> What 's your weapon? </h4>
                <p> The target of the game is to raise awareness about the importance of slowing down this plague for the food safety of Washington state.    </p>
                <h4> What 's that wave? </h4>
                <p>Floods are quite harmful in Washington state, research shows this is the main problem in the state and the one with higher risk. But did you know floods are 75% human caused!?
                  Many people have died recently due to this issue, and we find it important to raise awareness.</p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>

        </Row>
      </>
    );
  }
}

export default Modals;
