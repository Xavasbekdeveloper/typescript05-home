import{ FC } from "react";
import "./Footer.scss";
import footerImg from "../../assets/image/footer/Rectangle 2.svg";
const Footer: FC = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__wrapper__top-part">
              <h1 className="footer__wrapper__top-part__title">наши бренды</h1>
              <div className="footer__wrapper__top-part__liner"></div>
            </div>
            <div className="footer__wrapper__bottom-part">
              <img src={footerImg} alt="footer__img" />
              <img src={footerImg} alt="footer__img" />
              <img src={footerImg} alt="footer__img" />
              <img src={footerImg} alt="footer__img" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
