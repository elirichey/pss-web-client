import { useState, useEffect } from "react";
import ListProducts from "../../components/List/ListProducts";
import Pagination from "../../components/Pagination/Pagination";
import ProductsHttp from "../../utilities/http/products";
import ProductsSidebar from "../../components/ProductsSidebar/ProductsSidebar";

export default function Products(props) {
  // *************** Lifecycle *************** //

  useEffect(() => {
    if (products.length === 0) getAllProducts(1);
    return () => {
      setProducts([]);
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
        setProducts(res.data.products);
        setProductsCount(res.data.length);
        setTimeout(() => setLoading(false), 750);
        return res.data;
      } else {
        console.log("Products: getAllProducts - Non-200 Reponse:", res);
        setTimeout(() => setLoading(false), 750);
      }
    } catch (e) {
      console.log("Products: getAllProducts -Catch Error:", e);
      setTimeout(() => setLoading(false), 750);
    }
  };

  // *************** Search *************** //

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchManufacturer, setSearchManufacturer] = useState("(Select)");
  const [searchType, setSearchType] = useState("(Select)");
  const [showManufacturerOptions, setShowManufacturerOptions] = useState(false);
  const [showTypeOptions, setShowTypeOptions] = useState(false);
  const resetSearch = async (form) => {
    setIsSearch(false);
    setSearchKeyword("");
    setSearchManufacturer("(Select)");
    setSearchType("(Select)");
    setShowManufacturerOptions(false);
    setShowTypeOptions(false);
    // await goFirst();
    return form.reset();
  };

  const submitSearch = async (queries) => {
    const { keyword, manufacturer, type } = queries;
    console.log("Submit Values: ", queries);

    const noKeyword = keyword.trim() === "";
    const noMenufacturer =
      manufacturer.trim() === "" || manufacturer.trim() === "(Select)";
    const noType = type.trim() === "" || type.trim() === "(Select)";
    const noSearch = noKeyword && noMenufacturer && noType;
    if (noSearch) return await getAllProducts(1);

    if (keyword && keyword.trim() !== "") setSearchKeyword(keyword);
    if (manufacturer && manufacturer.trim() !== "(Select)")
      setSearchManufacturer(manufacturer);
    if (type && type.trim() !== "(Select)") setSearchType(type);

    setLoading(true);
    setIsSearch(true);
    try {
      const res = await ProductsHttp.searchProducts(queries);
      if (res.status === 200) {
        setProducts(res.data);
        setProductsCount(res.data.length);
        setCurrentPage(1);
        setTimeout(() => setLoading(false), 750);
      } else {
        console.log("Products: submitSearch - Non-200 Reponse:", res);
        setTimeout(() => setLoading(false), 750);
      }
    } catch (e) {
      console.log("Products: submitSearch - Catch Error:", e);
      setTimeout(() => setLoading(false), 750);
    }
  };

  // *************** Pagination *************** //

  const [currentPage, setCurrentPage] = useState(1);
  const goNext = async () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    await getAllProducts(newPage);
    return scroll(0, 0);
  };
  const goPrevious = async () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    await getAllProducts(newPage);
    return scroll(0, 0);
  };
  const goToPage = async (page) => {
    setCurrentPage(page);
    await getAllProducts(page);
    return scroll(0, 0);
  };
  const goFirst = async () => {
    setCurrentPage(1);
    await getAllProducts(1);
    return scroll(0, 0);
  };
  const goLast = async () => {
    const totalPages = Math.round(productsCount / 50);
    setCurrentPage(totalPages - 1);
    await getAllProducts(totalPages - 1);
    return scroll(0, 0);
  };

  const totalPages = Math.ceil(productsCount / 50);

  return (
    <>
      <h1 className="mobile-h1">ALL PRODUCTS</h1>

      <ProductsSidebar
        reset={resetSearch}
        onSubmit={submitSearch}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        searchManufacturer={searchManufacturer}
        setSearchManufacturer={setSearchManufacturer}
        searchType={searchType}
        setSearchType={setSearchType}
        showManufacturerOptions={showManufacturerOptions}
        setShowManufacturerOptions={setShowManufacturerOptions}
        showTypeOptions={showTypeOptions}
        setShowTypeOptions={setShowTypeOptions}
      />

      <div id="products-body">
        <h1 className="desktop-h1">ALL PRODUCTS</h1>

        <ListProducts products={products} />

        <Pagination
          currentPage={currentPage}
          goNext={goNext}
          goPrevious={goPrevious}
          goToPage={goToPage}
          goFirst={goFirst}
          goLast={goLast}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
