import React from 'react'
import banner from '../../assets/banner.png';

export default function Content1() {
  return (
    <div className="container">
    <div className="row align-items-center">
     <div className=" col-lg-7 col-md-12 col-sm-12 ">
          <h1 className="banner-title">Buy stocks with crypto</h1>
          <p className="banner-dis mt-2">No market closes. No trading fees. All the stocks <br />and crypto coins you love.</p>
          <div className="contact mt-5">
                <p className="banner-dis">Ready to start trading?</p>
                <div className="form-group mt-3 d-flex">
                   <div className="">
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>US +1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                   </div>
                 <div className="form-input">
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number" />
                 </div>
                 <button className="custom-btn">
                     Send link
                 </button>
          </div>
      </div>
     </div>
      <div className=" col-lg-5 col-md-12 col-sm-12  text-center tab-none">
        <img src={banner} width="295px" />
      </div>
  </div>
</div>
  )
}
