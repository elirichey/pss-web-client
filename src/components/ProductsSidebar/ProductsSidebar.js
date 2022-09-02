import { Form } from "react-final-form";
import Input from "../Forms/Input";
import SelectCustom from "../Forms/SelectCustom";

export default function ProductsSidebar(props) {
  const {
    reset,
    onSubmit,
    searchKeyword,
    setSearchKeyword,
    searchManufacturer,
    setSearchManufacturer,
    searchType,
    setSearchType,
    showTypeOptions,
    setShowTypeOptions,
    showManufacturerOptions,
    setShowManufacturerOptions,
  } = props;

  const manufacturers = ["(Select)", "Jotto Desk", "Other"];
  const types = [
    "(Select)",
    "Push Bumper",
    "Console",
    "K9 Transport",
    "Prisoner Transport",
    "Light Bar",
  ];

  return (
    <div id="products-sidebar">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="products-sidebar-title">
              <h3>FILTER OPTIONS</h3>
              <span
                className="reset"
                onClick={() => reset(form)}
              >{`[ RESET ]`}</span>
            </div>

            <div className="row pb-15">
              <Input
                name="keyword"
                label="SEARCH BY KEYWORD"
                initialValue={searchKeyword}
                placeholder="Search..."
                required={false}
                disabled={false}
              />
            </div>

            <div className="row py-15 z-index">
              <SelectCustom
                name="manufacturer"
                label="MANUFACTURER"
                options={manufacturers.sort((a, b) => a.localeCompare(b))}
                values={values}
                selected={searchManufacturer}
                setSelected={setSearchManufacturer}
                validate={null}
                showOptions={showManufacturerOptions}
                setShowOptions={setShowManufacturerOptions}
              />
            </div>

            <div className="row py-15">
              <SelectCustom
                name="type"
                label="TYPE"
                options={types.sort((a, b) => a.localeCompare(b))}
                values={values}
                selected={searchType}
                setSelected={setSearchType}
                validate={null}
                showOptions={showTypeOptions}
                setShowOptions={setShowTypeOptions}
              />
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
