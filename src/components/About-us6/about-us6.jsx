import React from "react";
import Link from "next/link";

const AboutUs6 = () => {
  return (
    <section id="about" className="about-ar section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="img">
              <div
                className="bg-img bg-fixed hero-bg"
                style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
              ></div>
              <div className="exp valign text-center">
                <div className="full-width">
                  <h2
                    className="bg-img bg-fixed"
                    style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                  >
                    30
                  </h2>
                  <p>Años de experiencia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 valign">
            <div className="content">
              <h6 className="sub-title main-color ls10 text-u">Nosotros</h6>
              <h3>Somos amantes de la música.</h3>
              <p>
                Este sitio nació con el objetivo de mejorar el proceso de
                aprendizaje musical, te compartimos una serie de herramientas
                para que dejes de postergar tu sueño de aprender a tocar un
                instrumento musical.¡Empieza ahora mismo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
