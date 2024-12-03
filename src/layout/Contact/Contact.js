import { Form } from "react-final-form";
import Input from "../../components/Forms/Input";
import Email from "../../components/Forms/Email";
import Phone from "../../components/Forms/Phone";
import Textarea from "../../components/Forms/Textarea";
import {
  composeValidators,
  required,
  mustBeEmail,
  mustBePhone,
} from "../../utilities/validation";

export default function ContactPage(props) {
  const onSubmit = (values) => {
    console.log("Values:::", values);
  };

  return (
    <div id="contact-body" className="container-sm column">
      <p>
        Thank you for choosing PSS for your fleet and emergency vehicle needs.
        We’re committed to delivering high-quality products and services
        tailored to your needs. Please use the form below to contact us with any
        questions or requests. We look forward to assisting you!
      </p>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="row py-15">
              <div className="column">
                <Input
                  name="text"
                  label="Name *"
                  placeholder="What's your name?"
                  validate={required}
                  required={true}
                  disabled={false}
                />
              </div>
            </div>

            <div className="row py-15 contact">
              <div className="column mr-15">
                <Email
                  name="email"
                  label="Email *"
                  validate={composeValidators(required, mustBeEmail)}
                  placeholder="email@example.com"
                  required={true}
                />
              </div>
              <div className="column ml-15">
                <Phone
                  name="phone"
                  label="Phone Number *"
                  placeholder="(xxx) xxx-xxxx"
                  validate={composeValidators(required, mustBePhone)}
                  required={true}
                />
              </div>
            </div>

            <div className="row py-15">
              <div className="column">
                <Textarea
                  name="textarea"
                  label="How Can We Help? *"
                  placeholder="How can we help?"
                  validate={required}
                  required={true}
                  rows="4"
                />
              </div>
            </div>

            <div className="submit-container">
              <button
                className="submit-btn"
                type="submit"
                disabled={submitting}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
}
