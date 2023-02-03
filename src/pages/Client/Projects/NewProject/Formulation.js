import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Col, Row, Label, Input, Card } from 'reactstrap'
// import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Dropzone from "react-dropzone";




const Formulation = () => {
  const formulationData = ['Add Formulation', 'Build Formulation']
  const navigate = useNavigate();
  const [selectedFiles, setselectedFiles] = useState([]);
  const [selectCategory, setCategory] = useState();
  const [textArea, setTextarea] = useState();

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  const onSave = () => {
    console.log({ formulationdata: selectCategory, File: selectedFiles, Description: textArea });
    navigate("/testing")
  }

  return (
    <React.Fragment>

      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              {/* <PreviewCardHeader title="Formulation" /> */}
              <div className="card-body">   
                <Row className='mt-5'>
                  {formulationData.map((element, index) => <Col xxl={2} lg={2} key={index}>
                    <div className="form-check form-radio-primary mb-3">
                      <Input className="form-check-input" type="radio" name="Projecttype" id={element} value={element} onChange={(e) => setCategory(e.target.value)} />
                      <Label className="form-check-label" htmlFor={element}>
                        {element}
                      </Label>
                    </div>
                  </Col>)}
                </Row>
                <Row>
                  <Col xxl={12}></Col>
                </Row>
                <Row className='mt-5'>
                  <Col xxl={2} lg={3}>
                    <Label className="form-check-label mb-2" htmlFor="formradioRight5">
                      Upload formulation details
                    </Label>
                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        handleAcceptedFiles(acceptedFiles);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone dz-clickable">
                          <div
                            className="dz-message needsclick"
                            {...getRootProps()}
                          >
                            <div className="mb-3">
                              <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                            </div>
                            <p >Drop files here or click to upload.</p>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="list-unstyled mb-0" id="file-previews"  >
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </Col>
                  <Col xxl={2} lg={2}>
                    <div>
                      <Label htmlFor="exampleFormControlTextarea5" className="form-label">Example Textarea</Label>
                      <textarea className="form-control" id="exampleFormControlTextarea5" rows="3" onChange={(e) => setTextarea(e.target.value)}></textarea>
                    </div>
                  </Col>
                </Row>

                <Row className='mt-5'>
                  <Col xxl={4} lg={4}>
                    <Button color="secondary" style={{ width: "100%" }} onClick={onSave}> Save </Button>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col xxl={4} lg={4}>
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

export default Formulation