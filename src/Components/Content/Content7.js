import React from 'react';
import iphone from '../../assets/iphone.png'

export default function Content7() {
  return (
    <section id="banner" class="banner ">
     <div class="container">
    <div class="row align-items-center">
     <div class=" col-lg-7 col-md-12 col-sm-12 ">
          <h1 class="banner-title">Buy stocks with crypto</h1>
          <p class="banner-dis mt-2">No market closes. No trading fees. All the stocks <br />and crypto coins you love.</p>
          <div class="contact mt-5">
                <p class="banner-dis">Ready to start trading?</p>
                <div class="form-group mt-2 d-flex">
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
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number" />
                 </div>
                 <button class="custom-btn">
                     Send link
                 </button>
          </div>
      </div>
     </div>
      <div class=" col-lg-5 col-md-12 col-sm-12  text-center tab-none">
        <img src={iphone} width="100%" />
      </div>
  </div>
</div>
</section>
  )
}
