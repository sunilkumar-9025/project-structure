import { Field } from "formik";
import React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const CheckboxField = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <FormGroup>
      <Row>
        <Label>{label}</Label>
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.label}>
                  <Col xxl={12}>
                    <Input
                      className="form-check-input mb-2 me-3"
                      type="checkbox"
                      id={option.value}
                      {...rest}
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <Label className="form-check-label" htmlFor={option.value}>
                      {option.label}
                    </Label>
                  </Col>
                </React.Fragment>
              );
            });
          }}
        </Field>
      </Row>
    </FormGroup>
  );
};

export default CheckboxField;
