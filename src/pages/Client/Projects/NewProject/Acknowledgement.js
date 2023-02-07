import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const Acknowledgement = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}>
            <Card className="mt-5">
              <CardBody className="text-center my-5">
                <img src="correct.png" width={200} />
                <p className="mb-5">
                  Thank you for launching your Project at Bsaas
                </p>
                <p className="text-start ms-5" style={{ fontSize: "16px" }}>
                  <i className="ri-play-mini-fill me-3"></i> You can track your
                  project in the existing project section
                </p>
                <p
                  className="text-start ms-5 mb-5"
                  style={{ fontSize: "16px" }}
                >
                  <i className="ri-play-mini-fill me-3"></i>Our team will reach
                  out to you within 48 hrs
                </p>
                <Button onClick={() => navigate("/existingProjects")} style={{width:"200px"}}>
                  Continue
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Acknowledgement;
