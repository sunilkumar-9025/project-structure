import { Field } from "formik";
import React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const RadioField = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <Row>
      <Label htmlFor={name}>{label}</Label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Col key={option.label}>
                <Input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                  className="me-2"
                />
                <Label htmlFor={option.value}>{option.label}</Label>
              </Col>
            );
          });
        }}
      </Field>
    </Row>
  );
};

export default RadioField;
