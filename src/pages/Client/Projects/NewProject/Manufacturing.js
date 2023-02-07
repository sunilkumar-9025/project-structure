import React, { useEffect } from "react";
import { Row, Col, Container, Button, Alert } from "reactstrap";
import * as Yup from "yup";
import ErrorText from "../../../../Components/Common/ErrorText";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RadioField from "../../../../Components/Common/RadioField";
import {
  resetManufacturingFlag,
  manufacturing,
} from "../../../../store/actions";
import { FormulationOptions, manufacturingRadioOption, QuantityOptions } from "../../../../Components/constants/projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectField from "../../../../Components/Common/SelectField";

const Manufacturing = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    manufacturing: "",
    formulation: "",
    quantity: "",
  };
  const validationSchema = Yup.object({
    manufacturing: Yup.string().required("Please Select Formulation"),
    formulation: Yup.string().required("Please select formulation"),
    quantity: Yup.string().required("Please select quantity"),
  });
  const onSubmit = (values) => {
    dispatch(manufacturing(values));
    setTimeout(() => history("/packaging"), 1000);
  };

  const { error, manufacturingError, success } = useSelector((state) => ({
    manufacturingError: state.Manufacturing.manufacturingError,
    success: state.Manufacturing.success,
    error: state.Manufacturing.error,
  }));

  useEffect(() => {
    if (success) {
      console.log("sucess");
      setTimeout(() => history("/packaging"), 3000);
    }

    setTimeout(() => {
      dispatch(resetManufacturingFlag());
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
                            name="manufacturing"
                            label="Manufacturing"
                            options={manufacturingRadioOption}
                          />
                          <ErrorMessage
                            name="manufacturing"
                            component={ErrorText}
                          />
                        </Col>
                        <div className="mb-3">
                          <SelectField
                            name="formulation"
                            label="Formulation"
                            options={FormulationOptions}
                          />
                          <ErrorMessage
                            name="formulation"
                            component={ErrorText}
                          />
                        </div>
                        <div className="mb-3">
                          <SelectField
                            name="quantity"
                            label="Quantity"
                            options={QuantityOptions}
                          />
                          <ErrorMessage
                            name="quantity"
                            component={ErrorText}
                          />
                        </div>
                      </Row>
                      <Row></Row>
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

export default Manufacturing;
