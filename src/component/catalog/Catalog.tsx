import{ FC, useEffect, useState } from "react";
import "./Catalog.scss";
import axios from "axios";
interface ProductSchema {
  id: number;
  images: string[];
  title: string;
  price: number;
}

const Catalog: FC = () => {
  const [productData, setProductData] = useState<ProductSchema[] | null>(null);

  useEffect(() => {
    axios
      .get<{ products: ProductSchema[] }>("https://dummyjson.com/products", {
        params: { limit: 3 },
      })
      .then((res) => {
        console.log(res);
        setProductData(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="catalog container-max">
        <div className="catalog__wrpper">
          <div className="top-boxs__left-boxs">
            <h2 className="top-box__left-boxs__title">СЕЗОН 2020/21</h2>
            <div className="top-boxs__left-boxs__liner"></div>
            <div className="top-box__left-boxs__cards">
              {productData?.map((product) => (
                <div key={product.id} className="left-boxs__cards__card">
                  <div className="left-boxs__cards__card__watch">
                    <img src={product.images[0]} alt="watch" />
                  </div>
                  <h3 className="left-boxs__cards__card__title">
                    {product.title}
                  </h3>
                  <p className="left-boxs__cards__card__text">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__wrapper__top-boxs__right-boxs">
            <h2 className="catalog__wrapper__top-boxs__right-boxs__title">
              Новая коллекция
            </h2>
            <div className="catalog__wrapper__top-boxs__right-boxs__liner"></div>
            <button className="catalog__wrapper__top-boxs__right-boxs__btn">
              Каталог
            </button>
          </div>
          <div className="bottom-boxs__left"></div>
          <div className="bottom-boxs__right">
            <h2 className="bottom-boxs__right__title">коллекция 2018</h2>
            <div className="bottom-boxs__right__liner"></div>
            <p className="bottom-boxs__right__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut
              neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed
              scelerisque magna consectetur. Amet convallis quis gravida
              facilisis vulputate. Faucibus facilisi habitasse ipsum interdum
              dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada
              integer. Aenean praesent viverra nulla nullam natoque volutpat
              curabitur auctor. Viverra viverra ullamcorper scelerisque risus
              dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra
              sed diam.{" "}
            </p>
            <button className="bottom-boxs__right__btn">
              посмотреть коллекцию
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
