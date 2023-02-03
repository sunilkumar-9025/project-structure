import { Field } from "formik";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const RadioField = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.label}>
                <Input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <Label htmlFor={option.value}>{option.label}</Label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </FormGroup>
  );
};

export default RadioField;
