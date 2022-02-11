import React from "react";
import banner from '../assets/banner.png';

const DocAsset = () => {
  return (
    <>
      <section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="side-block">
                <h3>Metric Tracking</h3>
                <p>
                  Below are the components that we have an interest in
                  monitoring user behavior. If anything we ask to be able to
                  trackΩ{" "}
                </p>
              </div>
              <div class="side-block second-block">
                <h3>Above fold banner</h3>
                <p>
                  This banner has two items we’d like to track if possible and
                  easy. If any{" "}
                </p>
              </div>

              <div class="side-block Third-block">
                <h3>Stocks Assets Preview</h3>
                <p>
                  This asset preview looks through all stock assets on
                  Structure, and pulls/displays data for the top 3 gainers and
                  top 3 losers.
                  <br />
                  For gainers, the arrow icon points top-right. For losers, the
                  arrow icon points bottom-right.
                </p>
              </div>

              <div class="side-block second-block">
                <h3>Crypto Assets Preview</h3>
                <p>
                  This asset preview looks through all crypto assets on
                  Structure, and pulls/displays data for the top 3 gainers and
                  top 3 losers.
                  <br />
                  For gainers, the arrow icon points top-right. For losers, the
                  arrow icon points bottom-right.
                </p>
              </div>

              <div class="side-block Third-block">
                <h3>Options Assets Interest Lead Gen</h3>
                <p>
                  While Structure currently does not have any tokenized options
                  available for trading, this is a function that could be
                  developed, that we believe could be a killer feature, and most
                  importantly want to see if site visitors agree. Users can
                  enter their email and subscribe to our “Structure news” email
                  newsletter. For interactions on this component, see the
                  interactions section to the right
                </p>
              </div>
            </div>
            <div class="col-md-9">
              <div class="container doc-assest-content">
                <div class="row align-items-center">
                  <div class=" col-lg-7 col-md-12 col-sm-12 ">
                    <h1 class="banner-title">Buy stocks with crypto</h1>
                    <p class="banner-dis mt-2">
                      No market closes. No trading fees. All the stocks <br />
                      and crypto coins you love.
                    </p>
                    <div class="contact mt-5">
                      <p class="banner-dis">Ready to start trading?</p>
                      <div class="form-group mt-3 d-flex">
                        <div class="">
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>US +1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div class="form-input">
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <button class="custom-btn">Send link</button>
                      </div>
                    </div>
                  </div>
                  <div class=" col-lg-5 col-md-12 col-sm-12  text-center tab-none">
                    <img src={banner} width="200px" />
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

export default DocAsset;
