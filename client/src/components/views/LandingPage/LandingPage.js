import React from "react";

function LandingPage() {
  const imageSrc =
    "https://postfiles.pstatic.net/MjAyMDA4MDFfMjY5/MDAxNTk2MjUxMTc0Njky.vLN6aKRdEhJAdBlG6vJAtuhFGf1OLcPQPz7fe6fEQCEg.25OqwFjfBE_aSk-sjfLNSUDJ9WJQqOkunDVUIYJXBT8g.PNG.sun_117/likelionwhite%EC%88%98%EC%A0%95-01.png?type=w966";
  return (
    <div class="body">
      <div class="slide-wrap">
        <span class="likelionLogo">
          <img src={imageSrc} alt="testimage" />
          <div class="start">
            <div class="button-1">
              <div class="eff-1"></div>
              <a href=""> main </a>
            </div>
          </div>
        </span>
        <div class="slide-content">
          <ul id="slider" class="slider">
            <li class="item1">
              <h3>img1</h3>
            </li>
            <li class="item2">
              <h3>img2</h3>
            </li>
            <li class="item3">
              <h3>img3</h3>
            </li>
            <li class="item4">
              <h3>img4</h3>
            </li>
            <li class="item5">
              <h3>img6</h3>
            </li>
            <li class="item6">
              <h3>img6</h3>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer">
        <p>Copyright © 2020 likelion.co.,Ltd. All rights reserved.</p>
        <address>Contact webmaster for more information. 010-9822-6845</address>
      </div>
    </div>
  );
}

export default LandingPage;
