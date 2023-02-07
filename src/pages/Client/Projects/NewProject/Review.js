import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import PreviewCardHeader from '../../../../Components/Common/PreviewCardHeader'

const Review = () => {
  const navigate = useNavigate();
  const reviewData = [
    { label: "Formulation", path: "/formulation" },
    { label: "Testing & Certification", path: "/testing" },
    { label: "Manufaturing", path: "/manufacturing" },
    { label: "Packaging", path: "/packaging" },
    { label: "Launch", path: "/launch" },
  ];

  const onLaunch = () => {
    navigate("/aknowledgement");
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <PreviewCardHeader title="Review" />
              <div className="card-body">
                {reviewData.map((element, index) => (
                  <Row className="mt-4 mb-2" key={index}>
                    <Col xxl={3} lg={3}>
                      {element.label}
                    </Col>
                    <Col xxl={1} lg={1}>
                      <i
                        className="las la-pencil-alt"
                        onClick={() => navigate(element.path)}
                        style={{ cursor: "pointer", fontSize: "20px" }}
                      ></i>
                    </Col>
                  </Row>
                ))}

                <Row className="mt-5">
                  <Col xxl={3} lg={3}>
                    <Button
                      color="secondary"
                      style={{ width: "100%" }}
                      onClick={onLaunch}
                    >
                      {" "}
                      Launch{" "}
                    </Button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xxl={3} lg={3}>
                    <Button color="light" style={{ width: "100%" }}>
                      {" "}
                      Save as Drafts{" "}
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Review;
