import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Label, Row } from "reactstrap";

const FileUpload = ({ label, setValues, name }) => {
  const [selectedFiles, setselectedFiles] = useState([]);
  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
    setValues(name, files);
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  return (
    <Row>
      <Col lg={12}>
        <Label htmlFor={label}>{label}</Label>
        <Card>
          <Dropzone
            id={label}
            onDrop={(acceptedFiles) => {
              handleAcceptedFiles(acceptedFiles);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div className="dropzone dz-clickable">
                <div className="dz-message needsclick" {...getRootProps()}>
                  <div className="mb-3">
                    <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                  </div>
                  <div style={{ fontSize: "12px" }}>
                    Drop files here or click to upload.
                  </div>
                </div>
              </div>
            )}
          </Dropzone>
          <div className="list-unstyled mb-0" id="file-previews">
            {selectedFiles.map((f, i) => {
              return (
                <Card
                  className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                  key={i + "-file"}
                >
                  <div className="p-2">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <img
                          data-dz-thumbnail=""
                          height="80"
                          className="avatar-sm rounded bg-light"
                          alt={f.name}
                          src={f.preview}
                        />
                      </Col>
                      <Col>
                        <Link to="#" className="text-muted font-weight-bold">
                          {f.name}
                        </Link>
                        <p className="mb-0">
                          <strong>{f.formattedSize}</strong>
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default FileUpload;
