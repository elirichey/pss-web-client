import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import ProductsHttp from "../../utilities/http/products";

export default function Products(props) {
  // *************** Lifecycle *************** //

  useEffect(() => {
    if (products.length === 0) getAllProducts(1);
    return () => {
      setProducts([]);
    };
  }, []);

  useEffect(() => {
    if (products.length === 0) getTotalNumberOfProducts();
    return () => {
      setProductsCount(0);
    };
  }, []);

  // *************** HTTP Requests *************** //

  const [loading, setLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);

  const getAllProducts = async (page) => {
    setLoading(true);
    setIsSearch(false);
    try {
      const res = await ProductsHttp.getProducts(page);
      if (res.status === 200) {
        setProducts(res.data);
        console.log("Got Products:", res.data);
        setTimeout(() => setLoading(false), 750);
        return res.data;
      } else {
        console.log("Products: getAllProducts - Non-200 Reponse:", res);
        setTimeout(() => setLoading(false), 750);
      }
    } catch (e) {
      console.log("Products: getAllProducts -Catch Error:", res);
      setTimeout(() => setLoading(false), 750);
    }
  };

  const getTotalNumberOfProducts = async () => {
    try {
      const res = await ProductsHttp.getTotalNumberOfProducts();
      console.log("Got Product Length:", res.data);
      if (res.status === 200) setProductsCount(res.data);
      else {
        console.log(
          "Products: getTotalNumberOfProducts - Non-200 Reponse:",
          res
        );
      }
    } catch (e) {
      const { data } = e.response;
      console.log("Products: getTotalNumberOfProducts - Catch Error:", data);
    }
  };

  // *************** Search *************** //

  const [searchName, setSearchName] = useState("");
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchType, setSearchType] = useState("");
  const resetSearch = async (form) => {
    setIsSearch(false);
    setSearchName("");
    setSearchManufacturer("");
    setSearchType("");
    await goFirst();
    return form.reset();
  };

  const submitSearch = async (queries) => {
    const { active, hasImages, manufacturer, name, type } = queries;

    if (name && name.trim() !== "") setSearchName(name);
    if (manufacturer && manufacturer.trim() !== "")
      setSearchManufacturer(manufacturer);
    if (type && type.trim() !== "") setSearchType(type);

    setLoading(true);
    setIsSearch(true);
    try {
      const res = await ProductsHttp.searchProducts(queries);
      if (res.status === 200) {
        setProducts(res.data);
        setTimeout(() => setLoading(false), 750);
      } else {
        console.log("Products: submitSearch - Non-200 Reponse:", res);
        setTimeout(() => setLoading(false), 750);
      }
    } catch (e) {
      const { data } = e.response;
      console.log("Products: submitSearch - Catch Error:", data);
      setTimeout(() => setLoading(false), 750);
    }
  };

  // *************** Pagination *************** //

  const [currentPage, setCurrentPage] = useState(1);
  const goNext = async () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    return await getAllProducts(newPage);
  };
  const goPrevious = async () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    return await getAllProducts(newPage);
  };
  const goToPage = async (page) => {
    setCurrentPage(page);
    return await getAllProducts(page);
  };
  const goFirst = async () => {
    setCurrentPage(1);
    return await getAllProducts(1);
  };
  const goLast = async () => {
    const totalPages = Math.round(productsCount / 50);
    setCurrentPage(totalPages - 1);
    return await getAllProducts(totalPages - 1);
  };

  return (
    <>
      <div id="products-sidebar">Sidebar</div>
      <div id="products-body">
        <h1>PRODUCTS</h1>

        <br />

        <Pagination
          currentPage={currentPage}
          goNext={goNext}
          goPrevious={goPrevious}
          goToPage={goToPage}
          goFirst={goFirst}
          goLast={goLast}
          totalPages={Math.round(productsCount / 50)}
        />
      </div>
    </>
  );
}
