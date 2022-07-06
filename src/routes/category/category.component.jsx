import { useContext, useState, useEffect, Fragment } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";

import { CategoryTitle, CategotyContainer } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
      <CategotyContainer>
        {products &&
          products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategotyContainer>
    </Fragment>
  );
};

export default Category;
