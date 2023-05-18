/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Productos
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                Todos
              </span>
              <span data-filter=".brand">Instrumentos</span>
              <span data-filter=".web">Accesorios</span>
              <span data-filter=".graphic">Otros</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/img-music/img-06-udg.jpeg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Partituras</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Otros</Link>,<Link href="/">$250MXN</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/img-music/flauta-producto.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Flauta</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Accesorios</Link>,
                  <Link href="/">$400 MXN</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/img-music/violin-producto.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Violín</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Accesorios</Link>,
                  <Link href="/">$4000 MXN</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/img-music/cuerdas-producto.jpeg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Cuerdas de Guitarra</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Accesorios</Link>,
                  <Link href="/">$140 MXN</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img
                    src="/img/img-music/guitarra-producto.webp"
                    alt="image"
                  />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Guitarra</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Instrumentos</Link>,
                  <Link href="/">$1200 MXN</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/img-music/piano-producto.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h5>Piano</h5>
                <span className="tags main-color custom-font">
                  <Link href="/">Instrumentos</Link>,
                  <Link href="/">$16000 MXN</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;
