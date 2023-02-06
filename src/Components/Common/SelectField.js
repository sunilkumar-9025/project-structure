import { Field } from "formik";
import React from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";
const SelectField = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <Field component={Select} id={name} name={name} {...rest}>
      {({ form, field }) => {
        return (
          <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <Select
              value={
                options
                  ? options.find((option) => option.value === field.value)
                  : ""
              }
              id={name}
              options={options}
              onChange={(option) =>
                form.setFieldValue(field.name, option.value)
              }
              {...rest}
              {...form}
            />
          </FormGroup>
        );
      }}
    </Field>
  );
};

export default SelectField;
