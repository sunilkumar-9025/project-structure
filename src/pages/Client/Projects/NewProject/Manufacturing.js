import React, { useState } from 'react'
import { Container, Row, Col, Label, Input, Button } from "reactstrap"
import Select from "react-select";
// import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader'
import { useNavigate } from 'react-router-dom';

const Manufacturing = () => {
  const navigate = useNavigate();
  const SingleOptions = [
    { value: 'Choices 1', label: 'Choices 1' },
    { value: 'Choices 2', label: 'Choices 2' },
    { value: 'Choices 3', label: 'Choices 3' },
    { value: 'Choices 4', label: 'Choices 4' }
  ];
  const ManufacturingData = ['One time Project', 'Retainer'];
  const [manufaturingPeriod, setManufacturingPeriod] = useState();
  const [formulation, setFormulation] = useState();
  const [quantity, setQuantity] = useState();
  function handleSelectGroups(formulation) {
    setFormulation(formulation);
  }
  function handleSelectGroups1(quantity) {
    setQuantity(quantity);
  }
  const onSave = () => {
  
    let Data = { manufaturingPeriod: manufaturingPeriod, formulation: formulation, quantity: quantity };
    console.log(Data)
    navigate("/packaging")
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              {/* <PreviewCardHeader title="Manufacturing" /> */}
              <div className="card-body">
                <Row className='mt-5'>
                  {ManufacturingData.map((element, index) => <Col xxl={2} key={index}>
                    <div className="form-check form-radio-primary mb-3">
                      <Input className="form-check-input" type="radio" name="manufacturing" id={element} value={element} onChange={(e) => {setManufacturingPeriod(e.target.value)} }/>
                      <Label className="form-check-label" htmlFor={element}>
                        {element}
                      </Label>
                    </div>
                  </Col>)}
                </Row>
                <Row className='mt-3'>
                  <Col xxl={3} lg={3}>
                    <div className="form-group">
                      <Label htmlFor="ProjectType" className="form-label ">Formulation</Label>
                      <Select
                        searchable
                        onChange={(e) => 
                          setFormulation(e.label)
                        }
                        options={SingleOptions}
                        
                      />
                    </div>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col xxl={3} lg={3}>
                    <div className="form-group">
                      <Label htmlFor="ProjectType" className="form-label ">Quantity</Label>
                      <Select
                        searchable
                        onChange={(e) => {
                          setQuantity(e.label)
                        }}
                        options={SingleOptions}
                      
                      />
                    </div>
                  </Col>
                </Row>
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

export default Manufacturing