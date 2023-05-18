import React from "react";
import Link from "next/link";

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/img-music/img-04-udg.jpeg)" }}
          >
            <h6 className="numb">01</h6>
            <h5>Clases presenciales</h5>
            <p>
              Consulta nuestra oferta de profesores en las diferentes
              especialidades con las que contamos.
            </p>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/img-music/img05-udg.jpeg)" }}
          >
            <h6 className="numb">02</h6>
            <h5>Clases Online</h5>
            <p>
              Si no tienes mucho tiempo para desplazarte, esta es la mejor
              opción. Aprende desde casa.
            </p>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/img-music/img-06-udg.jpeg)" }}
          >
            <h6 className="numb">03</h6>
            <h5>Tutoriales</h5>
            <p>
              Tenemos diversos tutoriales gratuitos para que no detengas tu
              avance musical. ¡Que esperas!
            </p>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/img-music/img-07-udg.jpeg)" }}
          >
            <h6 className="numb">04</h6>
            <h5>Blogs</h5>
            <p>
              Te compartimos nuestros artículos semanales, donde podrás aprender
              teoría musical, datos interesantes, historia, y mucho más...
            </p>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{
              backgroundImage: "url(/img/img-music/img-08-udg.jpeg)",
            }}
          >
            <h6 className="numb">05</h6>
            <h5>Artículos</h5>
            <p>
              Dale un vistazo a nuestra tienda, donde podrás encontrar libros,
              playeras, llaveros y otras cosas interesantes para los amantes de
              la música.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;
