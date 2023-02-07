import { Field } from "formik";
import React from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";

const TextareaField = (props) => {
  const { label, name, form, ...rest } = props;
  return (
    <FormGroup>
      <Row>
        <Col xxl={12}>
      <Label htmlFor={name}>{label}</Label>
      </Col>
      <Col ccl={12}>
      <Field as="textarea" id={name} name={name} {...rest} />
      </Col>
      </Row>
    </FormGroup>
  );
};

export default TextareaField;
