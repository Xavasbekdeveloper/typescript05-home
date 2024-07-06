import{ FC } from "react";
import "./Hero.scss";
import heroImg from "../../assets/image/hero/PORTEN.png";
const Hero: FC = () => {
  return (
    <>
      <section className="hero container-max">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-wrapper__box">
              <img
                className="hero-wrapper__box__img"
                src={heroImg}
                alt="PORTEN"
              />
            </div>
            <p className="hero-wrapper__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              interdum purus, est tortor pulvinar ut in. Fringilla a diam enim
              sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut
              iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus
              pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
