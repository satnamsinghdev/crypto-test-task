import React from "react";
import Content1 from "./Content/Content1";
import Content2 from "./Content/Content2";
import Content3 from "./Content/Content3";
import Content4 from "./Content/Content4";
import Content5 from "./Content/Content5";
import Content6 from "./Content/Content6";
import Content7 from "./Content/Content7";
import Header from "./Header";
import Footer from "./Footer";
import view from "../assets/view.jpg";

export default function Home() {
  return (
    <>
      <div className="container-fluid bg-dark text-center top-header">
        <div className="row align-items-center">
          <div className="col-12">
            <p className="top-header-title">
              Get no-fee trading for life when you sign up today
            </p>
          </div>
        </div>
      </div>
      <header id="header" className="Web-head">
        <Header />
      </header>
      <section id="banner" className="banner ">
        <Content1 />
      </section>
      <section>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-sm-12">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tabbable-panel">
                      <Content2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12 ">
              <h1 className="banner-title">
                All of your assets, now in <br /> one placeo
              </h1>
              <p className="banner-dis my-3">
                No market closes. No trading fees. All the stocks <br />
                and crypto coins you love.
              </p>
              <button className="btn custom-btn">Browse all assets </button>
            </div>
          </div>
        </div>
      </section>
      <section className="counter p-0">
        <Content3 />
      </section>
      <section>
        <Content4 />
      </section>
      <section>
        <Content5 />
      </section>
      <section>
        <Content6 />
      </section>
      <section>
        <div className="container">
          <div class="custom-size">
            <div class="row d-flex align-items-center">
              <div class=" col-lg-5 col-md-12 col-sm-12 ">
                <img src={view} width="100%" />
              </div>
              <div class=" col-lg-7 col-md-12 col-sm-12 ">
                <h1 class="banner-title">Trade crypto and stocks</h1>
                <p class="banner-dis my-3">
                  Have $200 in Bitcoin and want to purchase $100 of a <br />{" "}
                  Tesla stock? No problem, Structure makes this easy with <br />
                  the tap of a button.
                </p>
                <button class="btn custom-btn">Swap assets</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Content7 />
      <footer id="footer" className="">
        <Footer />
      </footer>
    </>
  );
}
