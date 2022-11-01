import { Field } from "react-final-form";
import Label from "./Label";

export default function Number(props) {
  const {
    name,
    label,
    validate,
    required,
    type,
    placeholder,
    initialValue,
    disabled,
    min,
    max,
  } = props;

  return (
    <Field name={name} initialValue={initialValue} validate={validate}>
      {({ input, meta }) => (
        <div className="input-field">
          <Label
            name={name}
            label={label}
            hasError={meta.error && meta.touched}
          />
          <input
            {...input}
            type={type ? type : "text"}
            placeholder={placeholder}
            className="text-input"
            min={min}
            max={max}
            required={required}
            disabled={disabled}
          />
        </div>
      )}
    </Field>
  );
}
