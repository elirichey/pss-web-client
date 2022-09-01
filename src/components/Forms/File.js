import React from "react";
import Image from "next/image";
import Dropzone from "react-dropzone";
import { Form, Field } from "react-final-form";
import Label from "./Label";
import fileExtenstions from "../../utilities/helpers/file-extensions";

export function FileInputForm(props) {
  const onSubmit = async (values) => console.log("Submit File:::", values.file);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <FileInput
            name="file"
            label="File Input *"
            accept="image/*, .csv"
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

export default function FileInput(props) {
  const { name, label, required, accept, disabled } = props;

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
      const fileExt = name.split(".").pop().toLowerCase();

      const isImage = fileExtenstions.image.some((x) => x === `.${fileExt}`);

      return (
        <div key={i} className="list-file-item">
          <div className="preview-img">
            {isImage ? (
              <img src={URL.createObjectURL(item)} />
            ) : (
              <Image src="/svg/file.svg" height={50} width={50} />
            )}
          </div>

          <p className="file-name">
            <span className="main">{fileNameString}</span>
            <span className="ext">.{fileExt.toLowerCase()}</span>
          </p>
        </div>
      );
    });
  };

  console.log("Accept", accept);
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
            onDrop={(x) => onChange(x)}
            accept={accept}
            multiple={false}
            maxFiles={1}
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
                    <input {...getInputProps()} />

                    {value && value.length > 0
                      ? renderListItems(value, onChange)
                      : renderEmpty()}
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
