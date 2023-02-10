import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  Input,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Row,
  Label,
  TabPane,
  TabContent,
  FormFeedback,
  Button,
} from "reactstrap";
import classnames from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  formulationRadioOption,
  testingCheckboxOption,
  manufacturingRadioOption,
  FormulationOptions,
  QuantityOptions,
  procurementCheckboxOption,
  PackagingRadioOption,
  ContainerOptions,
  MaterialOptions,
  launchCheckboxOption,
  reviewData,
} from "../../../Components/constants/projects";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import PreviewCardHeader from "../../../Components/Common/PreviewCardHeader";
import Select from "react-select";
const Index = () => {
  const [data, setData] = useState([]);
  const [activeTab, setactiveTab] = useState(1);
  const [progressbarvalue, setprogressbarvalue] = useState(0);
  const [passedSteps, setPassedSteps] = useState([1]);
  const [selectedFiles, setselectedFiles] = useState([]);

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

  function toggleTab(tab, value) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 7) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
    setprogressbarvalue(value);
  }

  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      formulation: "",
      formulationFile: [],
      formulationDescription: "",
      testing: [],
      manufacturing: "",
      formulationType: "",
      quantity: "",
      procurement: [],
      packaging: "",
      container: "",
      material: "",
      design: [],
      designDescription: "",
      launch: [],
    },
    validationSchema: Yup.object({
      formulation: Yup.string().required("Please Select Formulation"),
      // formulationFile: Yup.array().min(1, "Please Upload Formulation"),
      formulationDescription: Yup.string().required(
        "Please Enter  Formulation Description"
      ),
      testing: Yup.array().min(1, "Please Select Testing Options"),
      manufacturing: Yup.string().required("Please Select Manufacturing"),
      formulationType: Yup.string().required("Please Select Formulation Type"),
      quantity: Yup.string().required("Please Select Quantity"),
      procurement: Yup.array().min(1, "Please Select Procurement Options"),
      packaging: Yup.string().required("Please Select Packaging"),
      container: Yup.string().required("Please Select Container Type"),
      material: Yup.string().required("Please Select Material For Container"),
      designDescription: Yup.string().required(
        "Please Enter Design Description"
      ),
      launch: Yup.array().min(1, "Please Select Launching Options"),
      // design:
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Col xl={12}>
            <Card style={{ minHeight: "80vh" }}>
              <CardHeader>
                <h2 className="mb-4">New Project</h2>
                <div className="progress-nav mb-4">
                  <Progress
                    value={progressbarvalue}
                    style={{ height: "1px" }}
                  />

                  <Nav
                    className="nav-pills progress-bar-tab custom-nav"
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        to="#"
                        id="pills-gen-info-tab"
                        className={classnames(
                          {
                            active: activeTab === 1,
                            done: activeTab <= 7 && activeTab >= 0,
                          },
                          "rounded-pill"
                        )}
                        onClick={() => {
                          toggleTab(1, 0);
                        }}
                        tag="button"
                        disabled
                      >
                        <i className="mdi mdi-account-reactivate"></i>{" "}
                        Formulation
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        id="pills-gen-info-tab"
                        className={classnames(
                          {
                            active: activeTab === 2,
                            done: activeTab <= 7 && activeTab > 1,
                          },
                          "rounded-pill"
                        )}
                        onClick={() => {
                          toggleTab(2, 20);
                        }}
                        tag="button"
                        disabled
                      >
                        Testing & Claims
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        id="pills-gen-info-tab"
                        className={classnames(
                          {
                            active: activeTab === 3,
                            done: activeTab <= 7 && activeTab > 3,
                          },
                          "rounded-pill"
                        )}
                        onClick={() => {
                          toggleTab(3, 40);
                        }}
                        tag="button"
                        disabled
                      >
                        Manufacturing
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        id="pills-gen-info-tab"
                        className={classnames(
                          {
                            active: activeTab === 4,
                            done: activeTab <= 7 && activeTab >= 4,
                          },
                          "rounded-pill"
                        )}
                        onClick={() => {
                          toggleTab(4, 60);
                        }}
                        tag="button"
                        disabled
                      >
                        Packaging
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        id="pills-gen-info-tab"
                        className={classnames(
                          {
                            active: activeTab === 5,
                            done: activeTab <= 7 && activeTab >= 5,
                          },
                          "rounded-pill"
                        )}
                        onClick={() => {
                          toggleTab(5, 80);
                        }}
                        tag="button"
                        disabled
                      >
                        Launch
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        id="pills-gen-info-tab"
                        className={classnames(
                          {
                            active: activeTab === 6,
                            done: activeTab <= 7 && activeTab >= 6,
                          },
                          "rounded-pill"
                        )}
                        onClick={() => {
                          toggleTab(6, 100);
                        }}
                        tag="button"
                        disabled
                      >
                        Review
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </CardHeader>
              <CardBody>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit();
                    return false;
                  }}
                  action="#"
                  className="form-steps"
                >
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={1}>
                      <Row>
                        <Col lg={4}>
                          <PreviewCardHeader title="Formulation" />
                          <div className="mb-5">
                            <Label
                              htmlFor="Formulation"
                              className="form-label"
                            ></Label>
                            <Row>
                              {formulationRadioOption.map((element, idx) => {
                                return (
                                  <Col key={idx}>
                                    <Input
                                      type="radio"
                                      className="form-check-input me-3"
                                      id={element.value}
                                      name="formulation"
                                      value={element.value}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      // invalid={
                                      //   formik.errors.formulation ? true : false
                                      // }
                                    />
                                    <Label
                                      className="form-check-label"
                                      htmlFor={element.value}
                                    >
                                      {element.label}
                                    </Label>
                                  </Col>
                                );
                              })}
                              {formik.touched.formulation &&
                              formik.errors.formulation ? (
                                <div
                                  className="formikerror ms-4"
                                  type="invalid"
                                >
                                  {formik.errors.formulation}
                                </div>
                              ) : null}
                            </Row>
                          </div>

                          <div className="mb-5">
                            <Row>
                              <Col lg={5}>
                                <Label>Upload Formulation Detail</Label>
                                <Dropzone
                                  onDrop={(acceptedFiles) => {
                                    handleAcceptedFiles(acceptedFiles);
                                  }}
                                  onChange={(acceptedFiles) =>
                                    formik.setFieldValue(
                                      formik.values.formulationFile,
                                      acceptedFiles
                                    )
                                  }
                                  onBlur={formik.handleBlur}
                                  invalid={
                                    formik.touched.formulationFile &&
                                    formik.errors.formulationFile
                                      ? true
                                      : false
                                  }
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
                                        <Label>
                                          Drop files here or click to upload.
                                        </Label>
                                      </div>
                                    </div>
                                  )}
                                </Dropzone>
                                {formik.touched.formulationFile &&
                                formik.errors.formulationFile ? (
                                  <FormFeedback type="invalid">
                                    {formik.errors.formulationFile}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col lg={2} />
                              <Col lg={5}>
                                <Label htmlFor="formulationDescription">
                                  Description
                                </Label>
                                <Input
                                  type="textarea"
                                  className="form-control"
                                  name="formulationDescription"
                                  id="formulationDescription"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  rows="8"
                                  value={formik.values.formulationDescription}
                                  invalid={
                                    formik.touched.formulationDescription &&
                                    formik.errors.formulationDescription
                                      ? true
                                      : false
                                  }
                                />
                                {formik.touched.formulationDescription &&
                                formik.errors.formulationDescription ? (
                                  <FormFeedback type="invalid">
                                    {formik.errors.formulationDescription}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                            </Row>
                          </div>

                          <div className="mt-5 mb-3">
                            <Button
                              style={{ width: "100%" }}
                              disabled={
                                !formik.dirty
                                  ? true
                                  : formik.errors.formulation ||
                                    formik.errors.formulationFile ||
                                    formik.errors.formulationDescription
                                  ? true
                                  : false
                              }
                              onClick={() => toggleTab(activeTab + 1, 20)}
                            >
                              Save & Next
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId={2}>
                      <Row>
                        <Col lg={4}>
                          <PreviewCardHeader title="Testing & Claims" />
                          <div className="mb-5">
                            <Label
                              htmlFor="testing"
                              className="form-label"
                            ></Label>
                            <Row>
                              {testingCheckboxOption.map((element, idx) => {
                                return (
                                  <Col lg={12} key={idx} className="mb-3">
                                    <Input
                                      type="checkbox"
                                      className="form-check-input me-3"
                                      id={element.value}
                                      name="testing"
                                      value={element.value}
                                      checked={formik.values.testing.includes(
                                        element.value
                                      )}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      // invalid={
                                      //   formik.touched.testing &&
                                      //   formik.errors.testing
                                      //     ? true
                                      //     : false
                                      // }
                                    />
                                    <Label
                                      className="form-check-label"
                                      htmlFor={element.value}
                                    >
                                      {element.label}
                                    </Label>
                                  </Col>
                                );
                              })}
                              {formik.touched.testing &&
                              formik.errors.testing ? (
                                <div
                                  className="formikerror ms-4"
                                  type="invalid"
                                >
                                  {formik.errors.testing}
                                </div>
                              ) : null}
                            </Row>
                          </div>
                          <div className="mb-5">
                            <Row>
                              <Col lg={5}>
                                <Button
                                  onClick={() => {
                                    toggleTab(activeTab - 1, 0);
                                  }}
                                  style={{ width: "100%" }}
                                >
                                  Back
                                </Button>
                              </Col>
                              <Col lg={2} />
                              <Col lg={5}>
                                <Button
                                  style={{ width: "100%" }}
                                  disabled={
                                    formik.errors.testing ? true : false
                                  }
                                  onClick={() => toggleTab(activeTab + 1, 40)}
                                >
                                  Save & Next
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId={3}>
                      <Row>
                        <Col lg={4}>
                          <PreviewCardHeader title="Manufacturing" />
                          <div className="mb-4">
                            <Label
                              htmlFor="manufacturing"
                              className="form-label"
                            ></Label>
                            <Row>
                              {manufacturingRadioOption.map((element, idx) => {
                                return (
                                  <Col key={idx}>
                                    <Input
                                      type="radio"
                                      className="form-check-input me-3"
                                      id={element.value}
                                      name="manufacturing"
                                      value={element.value}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      // invalid={
                                      //   formik.touched.manufacturing &&
                                      //   formik.errors.manufacturing
                                      //     ? true
                                      //     : false
                                      // }
                                    />
                                    <Label
                                      className="form-check-label"
                                      htmlFor={element.value}
                                    >
                                      {element.label}
                                    </Label>
                                  </Col>
                                );
                              })}
                              {formik.touched.manufacturing &&
                              formik.errors.manufacturing ? (
                                <div
                                  className="formikerror ms-4"
                                  type="invalid"
                                >
                                  {formik.errors.manufacturing}
                                </div>
                              ) : null}
                            </Row>
                          </div>
                          <div className="mb-4">
                            <Label
                              htmlFor="formulationType"
                              className="form-label"
                            >
                              Formulation
                            </Label>
                            <Select
                              id="formulationType"
                              name="formulationType"
                              value={defaultValue(
                                FormulationOptions,
                                formik.values.formulationType
                              )}
                              onChange={(newValue) =>
                                formik.setFieldValue(
                                  "formulationType",
                                  newValue.value
                                )
                              }
                              options={FormulationOptions}
                            />
                            {formik.touched.formulationType &&
                            formik.errors.formulationType ? (
                              <div className="formikerror ms-4" type="invalid">
                                {formik.errors.formulationType}
                              </div>
                            ) : null}
                          </div>
                          <div className="mb-4">
                            <Label htmlFor="quantity" className="form-label">
                              Quantity
                            </Label>
                            <Select
                              id="quantity"
                              name="quantity"
                              value={defaultValue(
                                QuantityOptions,
                                formik.values.quantity
                              )}
                              onChange={(newValue) =>
                                formik.setFieldValue("quantity", newValue.value)
                              }
                              options={QuantityOptions}
                            />
                            {formik.touched.quantity &&
                            formik.errors.quantity ? (
                              <div className="formikerror ms-4" type="invalid">
                                {formik.errors.quantity}
                              </div>
                            ) : null}
                          </div>
                          <div className="mb-5">
                            <Label htmlFor="procurement" className="form-label">
                              Procurement Process
                            </Label>
                            <Row>
                              {procurementCheckboxOption.map((element, idx) => {
                                return (
                                  <Col lg={12} key={idx} className="mb-3">
                                    <Input
                                      type="checkbox"
                                      className="form-check-input me-3"
                                      id={element.value}
                                      name="procurement"
                                      value={element.value}
                                      checked={formik.values.procurement.includes(
                                        element.value
                                      )}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      // invalid={
                                      //   formik.touched.procurement &&
                                      //   formik.errors.procurement
                                      //     ? true
                                      //     : false
                                      // }
                                    />
                                    <Label
                                      className="form-check-label"
                                      htmlFor={element.value}
                                    >
                                      {element.label}
                                    </Label>
                                  </Col>
                                );
                              })}
                              {formik.touched.procurement &&
                              formik.errors.procurement ? (
                                <div
                                  className="formikerror ms-4"
                                  type="invalid"
                                >
                                  {formik.errors.procurement}
                                </div>
                              ) : null}
                            </Row>
                          </div>
                          <div className="mb-5">
                            <Row>
                              <Col lg={5}>
                                <Button
                                  onClick={() => {
                                    toggleTab(activeTab - 1, 20);
                                  }}
                                  style={{ width: "100%" }}
                                >
                                  Back
                                </Button>
                              </Col>
                              <Col lg={2} />
                              <Col lg={5}>
                                <Button
                                  style={{ width: "100%" }}
                                  disabled={
                                    formik.errors.manufacturing ||
                                    formik.errors.formulationType ||
                                    formik.errors.quantity ||
                                    formik.errors.procurement
                                      ? true
                                      : false
                                  }
                                  onClick={() => toggleTab(activeTab + 1, 60)}
                                >
                                  Save & Next
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId={4}>
                      <Row>
                        <Col lg={5}>
                          <PreviewCardHeader title="Packaging" />
                          <div className="mb-3">
                            <Label
                              htmlFor="packaging"
                              className="form-label"
                            ></Label>
                            <Row>
                              {PackagingRadioOption.map((element, idx) => {
                                return (
                                  <Col key={idx}>
                                    <Input
                                      type="radio"
                                      className="form-check-input me-3"
                                      id={element.value}
                                      name="packaging"
                                      value={element.value}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      // invalid={
                                      //   formik.touched.packaging &&
                                      //   formik.errors.packaging
                                      //     ? true
                                      //     : false
                                      // }
                                    />
                                    <Label
                                      className="form-check-label"
                                      htmlFor={element.value}
                                    >
                                      {element.label}
                                    </Label>
                                  </Col>
                                );
                              })}
                              {formik.touched.packaging &&
                              formik.errors.packaging ? (
                                <div className="formikerror" type="invalid">
                                  {formik.errors.packaging}
                                </div>
                              ) : null}
                            </Row>
                          </div>
                          <div className="mb-3">
                            <Label
                              htmlFor="containerType"
                              className="form-label"
                            >
                              Container Type
                            </Label>
                            <Select
                              id="containerType"
                              name="container"
                              value={defaultValue(
                                ContainerOptions,
                                formik.values.container
                              )}
                              onChange={(newValue) =>
                                formik.setFieldValue(
                                  "container",
                                  newValue.value
                                )
                              }
                              options={ContainerOptions}
                            />
                            {formik.touched.container &&
                            formik.errors.container ? (
                              <div className="formikerror" type="invalid">
                                {formik.errors.container}
                              </div>
                            ) : null}
                          </div>
                          <div className="mb-3">
                            <Label htmlFor="material" className="form-label">
                              Container Material Type
                            </Label>
                            <Select
                              id="material"
                              name="material"
                              value={defaultValue(
                                MaterialOptions,
                                formik.values.material
                              )}
                              onChange={(newValue) =>
                                formik.setFieldValue("material", newValue.value)
                              }
                              options={MaterialOptions}
                            />
                            {formik.touched.material &&
                            formik.errors.material ? (
                              <div className="formikerror" type="invalid">
                                {formik.errors.material}
                              </div>
                            ) : null}
                          </div>
                          <div className="mb-4">
                            <Row>
                              <Col lg={5}>
                                <Label>Upload Formulation Detail</Label>
                                <Dropzone
                                  onDrop={(acceptedFiles) => {
                                    handleAcceptedFiles(acceptedFiles);
                                  }}
                                  onChange={(acceptedFiles) =>
                                    formik.setFieldValue(
                                      formik.values.formulationFile,
                                      acceptedFiles
                                    )
                                  }
                                  onBlur={formik.handleBlur}
                                  invalid={
                                    formik.touched.formulationFile &&
                                    formik.errors.formulationFile
                                      ? true
                                      : false
                                  }
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
                                        <Label>
                                          Drop files here or click to upload.
                                        </Label>
                                      </div>
                                    </div>
                                  )}
                                </Dropzone>
                                {formik.touched.formulationFile &&
                                formik.errors.formulationFile ? (
                                  <FormFeedback type="invalid">
                                    {formik.errors.formulationFile}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                              <Col lg={2} />
                              <Col lg={5}>
                                <Label htmlFor="designDescription">
                                  Description
                                </Label>
                                <Input
                                  type="textarea"
                                  className="form-control"
                                  name="designDescription"
                                  id="designDescription"
                                  rows="7"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  invalid={
                                    formik.touched.designDescription &&
                                    formik.errors.designDescription
                                      ? true
                                      : false
                                  }
                                />
                                {formik.touched.designDescription &&
                                formik.errors.designDescription ? (
                                  <FormFeedback type="invalid">
                                    {formik.errors.designDescription}
                                  </FormFeedback>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                          <div className="mb-5">
                            <Row>
                              <Col lg={5}>
                                <Button
                                  onClick={() => {
                                    toggleTab(activeTab - 1);
                                  }}
                                  style={{ width: "100%" }}
                                >
                                  Back
                                </Button>
                              </Col>
                              <Col lg={2} />
                              <Col lg={5}>
                                <Button
                                  style={{ width: "100%" }}
                                  disabled={
                                    formik.errors.packaging ||
                                    formik.errors.container ||
                                    formik.errors.material ||
                                    formik.errors.design ||
                                    formik.errors.designDescription
                                      ? true
                                      : false
                                  }
                                  onClick={() => toggleTab(activeTab + 1, 80)}
                                >
                                  Save & Next
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId={5}>
                      <Row>
                        <Col lg={4}>
                          <PreviewCardHeader title="Launch" />
                          <div className="mb-5">
                            <Label
                              htmlFor="launch"
                              className="form-label"
                            ></Label>
                            <Row>
                              {launchCheckboxOption.map((element, idx) => {
                                return (
                                  <Col lg={12} key={idx} className="mb-3">
                                    <Input
                                      type="checkbox"
                                      className="form-check-input me-3"
                                      id={element.value}
                                      name="launch"
                                      value={element.value}
                                      checked={formik.values.launch.includes(
                                        element.value
                                      )}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      // invalid={
                                      //   formik.touched.testing &&
                                      //   formik.errors.testing
                                      //     ? true
                                      //     : false
                                      // }
                                    />
                                    <Label
                                      className="form-check-label"
                                      htmlFor={element.value}
                                    >
                                      {element.label}
                                    </Label>
                                  </Col>
                                );
                              })}
                              {formik.touched.launch && formik.errors.launch ? (
                                <div className="formikerror" type="invalid">
                                  {formik.errors.launch}
                                </div>
                              ) : null}
                            </Row>
                          </div>
                          <div className="mb-5">
                            <Row>
                              <Col lg={5}>
                                <Button
                                  onClick={() => {
                                    toggleTab(activeTab - 1, 60);
                                  }}
                                  style={{ width: "100%" }}
                                >
                                  Back
                                </Button>
                              </Col>
                              <Col lg={2} />
                              <Col lg={5}>
                                <Button
                                  style={{ width: "100%" }}
                                  disabled={formik.errors.launch ? true : false}
                                  onClick={() => toggleTab(activeTab + 1, 100)}
                                >
                                  Save & Next
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId={6}>
                      <Row>
                        <Col lg={4}>
                          <PreviewCardHeader title="Review" />
                          <div className="mb-5">
                            <Label
                              htmlFor="review"
                              className="form-label"
                            ></Label>
                            <Row>
                              {reviewData.map((element, idx) => {
                                return (
                                  <>
                                    <Col lg={11} key={idx} className="mb-3">
                                      <Label className="form-check-label">
                                        {element.label}
                                      </Label>
                                    </Col>
                                    <Col lg={1}>
                                      <i
                                        className="mdi mdi-book-edit"
                                        onClick={() => toggleTab(idx + 1)}
                                      ></i>
                                    </Col>
                                  </>
                                );
                              })}
                            </Row>
                          </div>
                          <div className="mb-5">
                            <Row>
                              {/* <Col lg={5}>
                                <Button
                                  onClick={() => {
                                    toggleTab(activeTab - 1, 80);
                                  }}
                                  style={{ width: "100%" }}
                                >
                                  Back
                                </Button>
                              </Col>
                              <Col lg={2} /> */}
                              <Col>
                                <Button
                                  type="submit"
                                  style={{ width: "100%" }}
                                  disabled={!(formik.dirty && formik.isValid)}
                                >
                                  Launch
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Index;
