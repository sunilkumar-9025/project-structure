import React, { useEffect } from "react";
import { Row, Col, Container, Button, Alert } from "reactstrap";
import * as Yup from "yup";
import ErrorText from "../../../../Components/Common/ErrorText";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RadioField from "../../../../Components/Common/RadioField";
import { resetPackagingFlag, packaging } from "../../../../store/actions";
import {
  ContainerOptions,
  PackagingRadioOption,
  MaterialOptions,
} from "../../../../Components/constants/projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectField from "../../../../Components/Common/SelectField";
import TextareaField from "../../../../Components/Common/TextareaField";
import FileUpload from "../../../../Components/Common/FileUpload";

const Packaging = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    packaging: "",
    containerType: "",
    materialType: "",
    design: [],
    designDescription: "",
  };
  const validationSchema = Yup.object({
    packaging: Yup.string().required("Please Select Packaging"),
    materialType: Yup.string().required("Please select Material Type"),
    containerType: Yup.string().required("Please Container Type"),
    design: Yup.array().min(1, "Please Upload Formulation File"),
    designDescription: Yup.string().required(
      "Please Enter Formulation Description"
    ),
  });
  const onSubmit = (values) => {
    dispatch(packaging(values));
    setTimeout(() => history("/launch"), 1000);
  };

  const { error, packagingError, success } = useSelector((state) => ({
    packagingError: state.Packaging.packagingError,
    success: state.Manufacturing.success,
    error: state.Manufacturing.error,
  }));

  useEffect(() => {
    if (success) {
      console.log("sucess");
      setTimeout(() => history("/launch"), 3000);
    }

    setTimeout(() => {
      dispatch(resetPackagingFlag());
    }, 3000);
  }, [dispatch, success, error, history]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={6}>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                validateOnBlur
                validateOnChange
              >
                {(formik) => {
                  return (
                    <Form>
                      {/* {success && success ? (
                      <>
                        {toast("Your Redirect To Login Page...", {
                          position: "top-right",
                          hideProgressBar: false,
                          className: "bg-success text-white",
                          progress: undefined,
                          toastId: "",
                        })}
                        <ToastContainer autoClose={2000} limit={1} />
                        <Alert color="success">
                          Project created successfully
                        </Alert>
                      </>
                    ) : null}
                    {error && error ? (
                      <Alert color="danger">
                        <div>Project with that name already exist</div>
                      </Alert>
                    ) : null} */}
                      <Row>
                        <Col xxl={12} className="mb-3">
                          <RadioField
                            name="packaging"
                            label="Packaging"
                            options={PackagingRadioOption}
                          />
                          <ErrorMessage
                            name="packaging"
                            component={ErrorText}
                          />
                        </Col>
                        <div className="mb-3">
                          <SelectField
                            name="containerType"
                            label="Container Type"
                            options={ContainerOptions}
                          />
                          <ErrorMessage
                            name="containerType"
                            component={ErrorText}
                          />
                        </div>
                        <div className="mb-3">
                          <SelectField
                            name="materialType"
                            label="Container Material Type"
                            options={MaterialOptions}
                          />
                          <ErrorMessage
                            name="materialType"
                            component={ErrorText}
                          />
                        </div>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <FileUpload
                            label="Upload Design"
                            name="design"
                            setValues={formik.setFieldValue}
                          />
                          <ErrorMessage name="design" component={ErrorText} />
                        </Col>
                        <Col lg={6}>
                          <TextareaField
                            name="designDescription"
                            label="Description"
                            cols={25}
                            rows={8}
                          />
                          <ErrorMessage
                            name="designDescription"
                            component={ErrorText}
                          />
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col>
                          <Button
                            color="secondary"
                            style={{ width: "100%" }}
                            type={"submit"}
                            disabled={!(formik.dirty && formik.isValid)}
                          >
                            Save
                          </Button>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col>
                          <Button
                            color="light"
                            style={{ width: "100%" }}
                            disabled
                          >
                            Save as Drafts
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  );
                }}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Packaging;
