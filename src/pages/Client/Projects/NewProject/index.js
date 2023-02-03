import React, { useEffect } from "react";
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Input,
  Label,
  FormFeedback,
  Button,
} from "reactstrap";

import * as Yup from "yup";
import ErrorText from "../../../../Components/Common/ErrorText";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../../Components/Common/InputField";
import SelectField from "../../../../Components/Common/SelectField";

import { newProject, resetNewProjectFlag } from "../../../../store/actions";
// import PreviewCardHeader from "../../../Components/Common/PreviewCardHeader";
import { ProjectOptions } from "../../../../Components/constants/projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    projectName: "",
    projectType: "",
    clientPOC: [""],
  };
  const validationSchema = Yup.object({
    projectName: Yup.string().required("Please Enter Your Project Name"),
    projectType: Yup.string().required("Please Enter Your Project Type"),
    // clientPOC: Yup.array()
    //   .min(1)
    //   .required("Plese Enter Email")
    //   .email("Plse Enter Valid Email"),
  });
  const onSubmit = (values) => {
    dispatch(newProject(values));
  };

  const { error, newProjectError, success } = useSelector((state) => ({
    newProjectError: state.NewProject.newProjectError,
    success: state.NewProject.success,
    error: state.NewProject.error,
  }));

  useEffect(() => {
    if (success) {
      setTimeout(() => history("formulation"), 3000);
    }

    setTimeout(() => {
      dispatch(resetNewProjectFlag());
    }, 3000);
  }, [dispatch, success, error, history]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={4}>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                validateOnBlur
                validateOnChange
              >
                {(formik) => (
                  <Form>
                    {success && success ? (
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
                          Register User Successfully and Your Redirect To Login
                          Page...
                        </Alert>
                      </>
                    ) : null}
                    {error && error ? (
                      <Alert color="danger">
                        <div>
                          {/* {registrationError} */}
                          Email has been Register Before, Please Use Another
                          Email Address...
                        </div>
                      </Alert>
                    ) : null}
                    <div className="mb-3">
                      <InputField name="projectName" label="Project Name" />
                      <ErrorMessage name="projectName" component={ErrorText} />
                    </div>
                    <div className="mb-3">
                      <SelectField
                        name="projectType"
                        label="Project Type"
                        options={ProjectOptions}
                      />
                      <ErrorMessage name="projectName" component={ErrorText} />
                    </div>
                    <Button type='submit' color="primary">save</Button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Index;