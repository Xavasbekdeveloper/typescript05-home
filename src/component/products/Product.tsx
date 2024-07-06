import{ FC, useEffect, useState } from "react";
import "./Product.scss";
import axios from "axios";

interface ProductSchema {
  id: number;
  images: string[];
  title: string;
  price: number;
}

const Product: FC = () => {
  const [productData, setProductData] = useState<ProductSchema[] | null>(null);

  useEffect(() => {
    axios
      .get<{ products: ProductSchema[] }>("https://dummyjson.com/products", {
        params: { limit: 8 },
      })
      .then((res) => {
        console.log(res);
        setProductData(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="faq container-max">
      <div className="container">
        <div className="faq__wrapper">
          <div className="faq__wrapper__top">
            <h2 className="faq__wrapper__title">новые поступления</h2>
            <div className="faq__wrapper__liner"></div>
          </div>
          <div className="faq__wrapper__boxs">
            {productData?.map((product) => (
              <div key={product.id} className="faq__wrapper__boxs__card">
                <div className="faq__wrapper__boxs__card__watch">
                  <img src={product.images[0]} alt="watch" />
                </div>
                <h3 className="faq__wrapper__boxs__card__title">
                  {product.title}
                </h3>
                <p className="faq__wrapper__boxs__card__text">
                  {product.price} руб.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
