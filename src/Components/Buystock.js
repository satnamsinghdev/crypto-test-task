import React from "react";
import banner from '../assets/banner.png';

const Buystock = () => {
  return (
    <>
      <section>
    <div class="container-fluid">
       <div class="row">
         <div class="col-md-3">
           <div class="side-block">
             <h3>Metric Tracking</h3>
             <p>Below are the components that we have an interest in monitoring user behavior. If anything we ask to be able to trackΩ </p>
           </div>
           <div class="side-block second-block">
             <h3>Above fold banner</h3>
             <p>This banner has two items we’d like to track if possible and easy. If any </p>
           </div>

         </div>
         <div class="col-md-9">
          <div class="container doc-assest-content">
      <div class="row align-items-center">
       <div class=" col-lg-7 col-md-12 col-sm-12 ">
          <h1 class="banner-title">Buy stocks with crypto</h1>
          <p class="banner-dis mt-2">No market closes. No trading fees. All the stocks <br/>and crypto coins you love.</p>
          <div class="contact mt-5">
                <p class="banner-dis">Ready to start trading?</p>
                <div class="form-group mt-3 d-flex">
                   <div class="">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>US +1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                   </div>
                 <div class="form-input">
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number"/>
                 </div>
                 <button class="custom-btn">
                     Send link
                 </button>
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

export default Buystock;
