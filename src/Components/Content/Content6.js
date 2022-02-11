import React from 'react';
import pable from '../../assets/pable.png';
import check from '../../assets/check.png';

export default function Content6() {
  return (
    <div class="container">
     <div class="custom-bg-rest">
      <div class="row d-flex align-items-center">
        <div class=" col-lg-6 col-md-12 col-sm-12 p-5">
          <h1 class="banner-title">Rest assured, you’re in <br /> good hands</h1>
          <ul class="rest-ul">
              <li><img src={check} width="15px" class="mx-2" />Assigned ownership of your coins</li>
              <li><img src={check} width="15px" class="mx-2" />Cutting edge security</li>
              <li><img src={check} width="15px" class="mx-2" />Digital assets backed by real world assets ²</li>
              <li><img src={check} width="15px" class="mx-2" />Crime prevention and good-faith policy ³</li>
          </ul>
      </div>
          <div class=" col-lg-6 col-md-12 col-sm-12 py-5 text-center border-left">
        <img src={pable} width="295px" />
       </div>
    </div>
   </div>
    </div>
  )
}
