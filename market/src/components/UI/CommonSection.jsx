import React from "react";
import { Container } from "reactstrap";
import "../../styles/common-section.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <p>{title}</p>
      </Container>
    </section>
  );
};

export default CommonSection;
