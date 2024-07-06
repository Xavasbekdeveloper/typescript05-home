import{ FC, useState } from "react";
import topPhone from "../../assets/image/header/top-header__phone.svg";
import siteLogo from "../../assets/image/header/nav-logo.svg";
import chiqish from "../../assets/image/header/chiqish.svg";
import shop from "../../assets/image/header/shop.svg";
import sorch from "../../assets/image/header/sorch.svg";
import menuImg from "../../assets/image/header/menu.svg";
import "./Header.scss";
const Header: FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={(): void => setMenu((p: boolean) => !p)}
        className={`site__overlay ${menu ? "site__overlay-show" : ""}`}
      ></div>
      <header className="container-max">
        <div className="header__top">
          <div className="container header__top__wrapper">
            <div className="header__top__wrapper__left-part">
              <img src={topPhone} alt="phone" />
              <p className="header__top__wrapper__left-part__text">
                8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00{" "}
              </p>
            </div>
            <div className="header__top__wrapper__right-part">
              <button className="header__top__wrapper__right-part__btn">
                <img src={chiqish} alt="chiqish icon" />
                <p>Войти / Регистрация</p>
              </button>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className="nav__wrapper">
              <div className="nav__wrapper__logo">
                <a href="#" className="nav__wrapper__logo__link">
                  <img
                    className="nav__wrapper__logo__link__img"
                    src={siteLogo}
                    alt="LOGO"
                  />
                </a>
              </div>
              <div className="nav__wrapper__box">
                <ul className={`nav__list ${menu ? "nav__menu-show" : ""}`}>
                  <li className="nav__list__item">
                    <a className="nav__list__item__link" href="#">
                      Понравилось
                    </a>
                  </li>
                  <li className="nav__list__item">
                    <a className="nav__list__item__link" href="#">
                      личный кабинет
                    </a>
                  </li>
                  <li className="nav__list__item">
                    <a className="nav__list__item__link" href="#">
                      настройки
                    </a>
                  </li>
                </ul>
                <div className="nav__wrapper__box__btns">
                  <button className="nav__wrapper__box__btns__btn">
                    <img src={shop} alt="shop" />
                  </button>
                  <button className="nav__wrapper__box__btns__btn">
                    <img src={sorch} alt="shop" />
                  </button>
                  <button
                    onClick={(): void => setMenu((prev: boolean) => !prev)}
                    className="nav__wrapper__box__btns__btn btn-menu"
                  >
                    <img src={menuImg} alt="menu" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
