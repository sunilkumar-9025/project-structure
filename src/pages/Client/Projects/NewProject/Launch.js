import React from 'react'
import { Col, Row, Input, Label, Container, Button } from 'reactstrap';
// import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Launch = () => {
  const navigate = useNavigate();
  const launchTypeData = ['Launch exclusively at Sublime Life', 'Test Sublime Life'];
  const [launchType, setlaunchType] = useState([]);
  const onChecked = (e) => {
    let data = e.target.value;
    if (launchType.includes(data)) {
      let unchecked = launchType.filter((element) => {
        return element !== data;
      });
      setlaunchType(unchecked);
    }
    else {
      setlaunchType([...launchType, data]);
    }
  };
  const onSave =()=>{
    let launchData={
      Launch:launchType
    }
    console.log(launchData);
    navigate("/review")
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              {/* <PreviewCardHeader title="Launch" /> */}
              <div className="card-body">
                {launchTypeData.map((element, index) => (<Row key={index}><Col xxl={3}>
                  <div className="form-check form-check-outline form-check-info  mt-4">
                    <Input className="form-check-input" type="checkbox" id={element} value={element} onChange={(e) => (onChecked(e))} />
                    <Label className="form-check-label" for={element}>
                      {element}
                    </Label>
                  </div>

                </Col> </Row>))}
                <Row className='mt-5'>
                  <Col xxl={3} lg={3}>
                    <Button color="secondary" style={{ width: "100%" }} onClick={onSave}> Save </Button>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col xxl={3} lg={3}>
                    <Button color="light" style={{ width: "100%" }}> Save  as Drafts </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Launch