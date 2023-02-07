import { ErrorMessage, Field, FieldArray } from "formik";
import React from "react";
import { Col, Input, Label, Row } from "reactstrap";
import ErrorText from "./ErrorText";

const ArrayInput = (props) => {
  const { name, label, ...rest } = props;
  return (
    <FieldArray name={name}>
      {(fieldAreaProps) => {
        const { push, remove, form } = fieldAreaProps;
        const { values } = form;
        const data = values[name];
        return (
          <div>
            <Label>{label}</Label>
            {data.map((_, index) => (
              <Row key={index}>
                <Col xxl={12}>
                  <Field name={`${name}[${index}]`}>
                    {({ field }) => {
                      return (
                        <div className="input-group mb-2">
                          <Input
                            id={name}
                            {...rest}
                            {...field}
                            placeholder="abc@example.com"
                          />
                          {data.length > 1 && (
                            <span
                              className="input-group-text"
                              onClick={() => remove(index)}
                            >
                              X
                            </span>
                          )}
                        </div>
                      );
                    }}
                  </Field>
                </Col>
              </Row>
            ))}
            <ErrorMessage name="clientPOC" component={ErrorText} />
            {data.length < 3 && (
              <i
                className="mdi mdi-account-multiple-plus-outline"
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                }}
                onClick={() => push("")}
              >
                <span style={{ fontSize: "14px", marginLeft: "10px" }}>
                  Add Person
                </span>
              </i>
            )}
          </div>
        );
      }}
    </FieldArray>
  );
};

export default ArrayInput;
