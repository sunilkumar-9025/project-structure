import React, { useEffect } from "react";
import { Row, Col, Container, Button, Alert } from "reactstrap";
import * as Yup from "yup";
import ErrorText from "../../../../Components/Common/ErrorText";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckboxField from "../../../../Components/Common/CheckboxField";
import { resetLaunchFlag, launch } from "../../../../store/actions";
import { launchCheckboxOption } from "../../../../Components/constants/projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreviewCardHeader from '../../../../Components/Common/PreviewCardHeader'

const Launch = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    launch: [],
  };
  const validationSchema = Yup.object({
    launch: Yup.array().min(1, "Please select atleast one of options"),
  });
  const onSubmit = (values) => {
    dispatch(launch(values));
    setTimeout(() => history("/review"), 1000);
  };

  const { error, launchError, success } = useSelector((state) => ({
    launchError: state.Launch.launchError,
    success: state.Testing.success,
    error: state.Testing.error,
  }));

  useEffect(() => {
    if (success) {
      console.log("sucess");
      setTimeout(() => history("/review"), 3000);
    }

    setTimeout(() => {
      dispatch(resetLaunchFlag());
    }, 3000);
  }, [dispatch, success, error, history]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
          <PreviewCardHeader title="Launch" />
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
                          <CheckboxField
                            name="launch"
                            label=""
                            options={launchCheckboxOption}
                          />
                          <ErrorMessage name="launch" component={ErrorText} />
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

export default Launch;
