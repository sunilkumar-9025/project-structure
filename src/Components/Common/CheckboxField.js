import { Field } from "formik";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const CheckboxField = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Field name={name} {...rest}>
        {({field}) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.label}>
                <Input
                  className="form-check-input"
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
              </React.Fragment>
            );
          });
        }}
      </Field>
    </FormGroup>
  );
};

export default CheckboxField;
