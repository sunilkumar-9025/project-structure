import React, { useEffect } from "react";
import { Row, Col, Container, Button, Alert } from "reactstrap";
import * as Yup from "yup";
import ErrorText from "../../../../Components/Common/ErrorText";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RadioField from "../../../../Components/Common/RadioField";
import TextareaField from "../../../../Components/Common/TextareaField";
import { resetFormulationFlag, formulation } from "../../../../store/actions";
import { formulationRadioOption } from "../../../../Components/constants/projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileUpload from "../../../../Components/Common/FileUpload";
import PreviewCardHeader from '../../../../Components/Common/PreviewCardHeader'

const Formulation = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    formulation: "",
    formulationDetail: [],
    formulationDescription: "",
  };
  const validationSchema = Yup.object({
    formulation: Yup.string().required("Please Select Formulation"),
    formulationDetail: Yup.array().min(1, "Please Upload Formulation File"),
    formulationDescription: Yup.string().required(
      "Please Enter Formulation Description"
    ),
  });
  const onSubmit = (values) => {
    dispatch(formulation(values));
    setTimeout(() => history("/testing"), 1000);
  };

  const { error, formulationError, success } = useSelector((state) => ({
    formulationError: state.Formulation.formulationError,
    success: state.Formulation.success,
    error: state.Formulation.error,
  }));

  useEffect(() => {
    if (success) {
      console.log("sucess");
      setTimeout(() => history("/testing"), 3000);
    }

    setTimeout(() => {
      dispatch(resetFormulationFlag());
    }, 3000);
  }, [dispatch, success, error, history]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
          <PreviewCardHeader title="Formulation" />
            <Col lg={4} className='mt-3'>
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
                            name="formulation"
                            label=""
                            options={formulationRadioOption}
                          />
                          <ErrorMessage
                            name="formulation"
                            component={ErrorText}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} className="mb-3">
                          <FileUpload label="Formulation Detail Upload" name='formulationDetail'  setValues={formik.setFieldValue}/>
                          <ErrorMessage
                            name="formulationDetail"
                            component={ErrorText}
                          />
                        </Col>
                        <Col lg={6} className="mb-3">
                          <TextareaField
                            name="formulationDescription"
                            label="Formulation Description"
                            cols={25}
                            rows={8}
                          />
                          <ErrorMessage
                            name="formulationDescription"
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
                          <Button color="light" style={{ width: "100%" }} disabled>
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

export default Formulation;
