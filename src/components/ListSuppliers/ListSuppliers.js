import Image from "next/image";
import SupplierData from "./SupplierData";

export default function ListSuppliers(props) {
  const { showTitle } = props;
  return (
    <div className="container-md column align-center">
      {showTitle ? <h3>Some of our Suppliers</h3> : null}

      <ul id="list-suppliers">
        {SupplierData.map((item, i) => {
          const { id, name, img } = item;
          return (
            <li key={i}>
              <Image src={img} layout="fill" objectFit="contain" />
            </li>
          );
        })}
      </ul>

      <p className="suppliers-note">
        Looking for a specific supplier not listed above?{" "}
        <a href="tel:(317)288-5150">Call us!</a> We probably carry it.
      </p>
    </div>
  );
}
