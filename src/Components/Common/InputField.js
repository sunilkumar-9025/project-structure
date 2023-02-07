import { Field } from "formik";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const InputField = (props) => {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field }) => {
        return (
          <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <Input id={name} {...rest} {...field} />
          </FormGroup>
        );
      }}
    </Field>
  );
};

export default InputField;
