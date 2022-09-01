// import Image from "next/image";
import SupplierData from "./SupplierData";

export default function ListSuppliers(props) {
  return (
    <div className="container-md row">
      <ul id="list-suppliers">
        {SupplierData.map((item, i) => {
          const { id, name, img } = item;
          return (
            <li key={i}>
              <img src={img} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
