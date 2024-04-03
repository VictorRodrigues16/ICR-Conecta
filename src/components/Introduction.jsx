import React from "react";
import "../styles/Introduction.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slide = ({ className, title, description }) => (
  <section id="introduction" className={className}>
    <div id="cont-intro">
      <div id="tittle-intro">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  </section>
);

export default function Introduction() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      <Slide
        className="img1"
        title="Conecte-se, aprenda e inspire"
        description="sua plataforma para a saúde"
      />
      <Slide
        className="img2"
        title="Informação e apoio no ICR Conecta"
        description="Um espaço de troca de informações e experiências"
      />
      <Slide
        className="img3"
        title="Conexões fortes no ICR Conecta"
        description="Uma comunidade prática e engajada, onde pacientes e profissionais compartilham informações"
      />
      <Slide
        className="img4"
        title="Comunidade de cuidados no ICR Conecta"
        description="Um ponto de encontro para compartilhar dicas, conselhos e histórias reais sobre a vida no hospital"
      />
    </Slider>
  );
}
