import { Field } from "formik";
import React from "react";
import { FormGroup, Label } from "reactstrap";

const TextareaField = (props) => {
  const { label, name, form, ...rest } = props;
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Field as="textarea" id={name} name={name} {...rest} />
    </FormGroup>
  );
};

export default TextareaField;
