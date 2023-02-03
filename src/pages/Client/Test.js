import React from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
const Test = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xxl={5}>
              <>
                {/* <PreviewCardHeader title="Form Grid" /> */}
                <CardBody>
                  <p className="text-muted">
                    More complex forms can be built using our grid classes. Use
                    these for form layouts that require multiple columns, varied
                    widths, and additional alignment options.{" "}
                    <span className="fw-medium">
                      Requires the <code>$enable-grid-classes</code> Sass
                      variable to be enabled
                    </span>{" "}
                    (on by default).
                  </p>
                  <div className="live-preview">
                    <Form>
                      <Row>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="firstNameinput"
                              className="form-label"
                            >
                              First Name
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter your firstname"
                              id="firstNameinput"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="lastNameinput"
                              className="form-label"
                            >
                              Last Name
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter your lastname"
                              id="lastNameinput"
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label
                              htmlFor="compnayNameinput"
                              className="form-label"
                            >
                              Company Name
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter company name"
                              id="compnayNameinput"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="phonenumberInput"
                              className="form-label"
                            >
                              Phone Number
                            </Label>
                            <Input
                              type="tel"
                              className="form-control"
                              placeholder="+(245) 451 45123"
                              id="phonenumberInput"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="emailidInput"
                              className="form-label"
                            >
                              Email Address
                            </Label>
                            <Input
                              type="email"
                              className="form-control"
                              placeholder="example@gamil.com"
                              id="emailidInput"
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label
                              htmlFor="address1ControlTextarea"
                              className="form-label"
                            >
                              Address
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Address 1"
                              id="address1ControlTextarea"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="citynameInput"
                              className="form-label"
                            >
                              City
                            </Label>
                            <Input
                              type="email"
                              className="form-control"
                              placeholder="Enter your city"
                              id="citynameInput"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="ForminputState"
                              className="form-label"
                            >
                              State
                            </Label>
                            <select
                              id="ForminputState"
                              className="form-select"
                              data-choices
                              data-choices-sorting="true"
                            >
                              <option>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="text-end">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </CardBody>
              </>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Test;
