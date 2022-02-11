import React from "react";
import banner from "../assets/banner.png";

const DocGiv = () => {
  return (
    <>
      <section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="side-block">
                <h3>Give away sign up</h3>
                <p>This component is a promotion with a CTA and a counter. </p>
              </div>
              <div class="side-block second-block">
                <p>
                  <b>Give away promo</b>
                </p>
                <p class="mt-1">
                  In order to create a sense of urgency and offer our first
                  customers value, we will setup a counter with a specific value
                  offering. Structure will provide you with counter logic.
                </p>
              </div>
            </div>
            <div class="col-md-9">
              <div class="container">
                <div class="counter-bg-away">
                  <div class="row align-items-center">
                    <div class="col-lg-8">
                      <p class="counter-title">
                        Sign up and get no-fee trading for life.
                      </p>
                      <p class="counter-dis">
                        We’re giving our first 5,000 users lifetime access to
                        totally free trading. Ya, let that sink in...
                      </p>
                    </div>
                    <div class="col-lg-4 text-center">
                      <p>Spots left</p>
                      <h1>2,631 </h1>
                      <button class="btn custom-btn">Browse all assets </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocGiv;
