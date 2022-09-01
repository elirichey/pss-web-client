import React from "react";
import Dropzone from "react-dropzone";
import { Form, Field } from "react-final-form";
import Label from "./Label";

export function FilesInputForm(props) {
  const onSubmit = async (values) => {
    console.log("Submit Files:::", values.files);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <FilesInput
            name="files"
            label="File Input *"
            accept="image/*"
            required={false}
            disabled={false}
          />

          <div className="submit-container">
            <button
              className="submit-btn"
              type="submit"
              disabled={submitting || pristine}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
}

export default function FilesInput(props) {
  const { name, label, required, accept, maxFiles, disabled } = props;

  const renderEmpty = () => (
    <div className="empty-dropzone">
      <p className="mb-0">Drag 'n' Drop Files</p>
      <p className="my-0">or</p>
      <p className="mt-0">Click to Select</p>
    </div>
  );

  const renderListItems = (items) => {
    return items.map((item, i) => {
      const { path, name, size, type } = item;
      const fileNameString = name.replace(/\.[^/.]+$/, "");
      const fileExt = name.split(".").pop();

      return (
        <div key={i} className="list-files-list-item">
          <div className="preview-img">
            <img src={URL.createObjectURL(item)} />
          </div>

          <p className="file-name">
            <span className="main">{fileNameString}</span>
            <span className="ext">.{fileExt.toLowerCase()}</span>
          </p>
        </div>
      );
    });
  };

  return (
    <Field name={name}>
      {({ input: { value, onChange, ...input }, meta }) => (
        <div className="input-field">
          <Label
            name={name}
            label={label}
            hasError={meta.error && meta.touched}
          />

          <Dropzone
            onDrop={(x) => {
              onChange(x);
              console.log(x);
            }}
            multiple={true}
            accept={accept}
            maxFiles={maxFiles ? maxFiles : 0}
            disabled={disabled}
          >
            {(res) => {
              const { getRootProps, getInputProps } = res;
              return (
                <section
                  className={
                    value && value.length > 0
                      ? "dropzone"
                      : "dropzone align-center justify-center text-center"
                  }
                >
                  <div {...getRootProps()}>
                    <input {...getInputProps()} multiple={true} />

                    {value && value.length > 0 ? (
                      <div className="column">
                        {renderListItems(value, onChange)}
                      </div>
                    ) : (
                      renderEmpty()
                    )}
                  </div>
                </section>
              );
            }}
          </Dropzone>
        </div>
      )}
    </Field>
  );
}

/*
<Dropzone onDrop={(x) => onChange(x)} disabled={disabled}>
  {(res) => {
    const { getRootProps, getInputProps } = res;
    // - Display selected items
    // - Click to remove items...
    // - Remove all items...

    return (
      <section className="dropzone">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {value && value.length > 0
            ? renderListItems(value, onChange)
            : renderEmpty()}
        </div>
      </section>
    );
  }}
</Dropzone>
*/
