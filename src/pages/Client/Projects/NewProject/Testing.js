import React from 'react'
import { Container, Row, Col, Label, Input,Button } from 'reactstrap'
// import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Testing = () => {
  const navigate =useNavigate();
  const TestingFields = ['Certified Vegan', 'Safe for Children', 'Organic Beauty Certification', 'Safe for preganancy Women', 'Talc free'];
  const [testingData,setTestingData]= useState([]);
  const onChecked =(e)=>{
      let data = e.target.value;
      if(testingData.includes(data)){
      let unchecked =testingData.filter((element)=>{
        return element !== data;
       });
       setTestingData(unchecked);
      }
      else{
        setTestingData([...testingData,data]);
      }
   };
   const onSave =()=>{
    console.log(testingData,"hello");
    navigate('/manufacturing');
   }
   
     
  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              {/* <PreviewCardHeader title="Testing & Claims" /> */}
              <div className="card-body">
                <Row>
                  <Col  xxl={3}>
                    <div className='title mt-4'>
                      Based on your products Labs suggests this Certification  to claim.
                    
                    </div>
                  </Col>
                </Row>
                {TestingFields.map((element, index) => (<Row key={index}><Col xxl={3}>
                  <div className="form-check form-check-outline form-check-info  mt-4">
                    <Input className="form-check-input" type="checkbox" id={element} value={element} onChange={(e)=>(onChecked(e))}/>
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

export default Testing