import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/book-header.png";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import products from "../assets/data/products";
import counterImg from "../assets/images/ivorykey.jpg";
import counterImg2 from "../assets/images/scasca.jpg";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.avgRating === 4.5
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.avgRating === 4.9
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Создан в {year} году</p>
                <h2>Портал для поверхностного ознакомления с фэнтези книгами</h2>
                <p>
                На этом сайте вы сможете найти аннотации и отзывы на интересующие вас книги или оставить своё мнение по поводу уже прочитанных книг.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/bookshelf">Больше книг</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Новинки</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container className="mt-0 mb-0 ml-0 mr-0">
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Скоро выйдет новая книга</h4>
                <h3 className="text-white fs-5 mb-3">Не пропустите</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/bookshelf">Библиотека</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end conter__img">
              <img src={counterImg} alt="" />
              <img src={counterImg2} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Популярное</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
