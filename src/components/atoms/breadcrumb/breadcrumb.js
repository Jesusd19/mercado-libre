import React from "react";
import "./breadcrumb.scss";

const breadcrumb = (props) => {
  const { content, title } = props;
  const breadcrumbs = () =>
    content.map((value, index) => {
      return (
        <li key={`breadcrumb-${index}`}>
          {value} {(content.length - 1 === index) ? "" : ">"}
          {(title && content.length - 1 === index) ? ">" : ""}
        </li>
      );
    });

  return (
    <nav itemType="https://schema.org/Breadcrumb" className="miga-de-pan">
      <ul className="a-breadcrumb">
      {breadcrumbs()}
      {title && title}
      </ul>
    </nav>
  );
};

export default breadcrumb;
