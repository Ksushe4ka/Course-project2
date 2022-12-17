import React, { useState } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Bookshelf = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "фэнтези-романтика") {
      const filteredProducts = products.filter(
        (item) => item.category === "фэнтези-романтика"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "фэнтези-детектив") {
      const filteredProducts = products.filter(
        (item) => item.category === "фэнтези-детектив"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "хоррор-фэнтези") {
      const filteredProducts = products.filter(
        (item) => item.category === "хоррор-фэнтези"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Bookshelf">
      <CommonSection title="Книжная полка" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Жанры</option>
                  <option value="фэнтези-романтика">Фэнтези-романтика</option>
                  <option value="фэнтези-детектив">Фэнтези-детектив</option>
                  <option value="хоррор-фэнтези">Хоррор-фэнтези</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Сортировка по</option>
                  <option value="ascending">Возрастанию</option>
                  <option value="descending">Убыванию</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Поиск......."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">Not found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Bookshelf;
