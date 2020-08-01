import React from "react";

function MainUnderPage() {
  return (
    <div>
      <ul class="slides">
        <input type="radio" name="radio-btn" id="img-1" checked />
        <li class="slide-container">
          <div class="slide">
            <img
              style={{ opacity: "30%" }}
              src="
                https://4.bp.blogspot.com/-2a2HO_Qv4hQ/XEFv12SPMRI/AAAAAAAAFY8/M5tcfgxm4SE-HECG3l0MhUvoh1RcAPQ5QCLcBGAs/s1600/4.jpg"
            />
          </div>
          <div class="nav">
            <label for="img-6" class="prev">
              &#x2039;
            </label>
            <label for="img-2" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-2" />
        <li class="slide-container">
          <div class="slide">
            <img
              style={{ opacity: "30%" }}
              src="https://platum.kr/wp-content/uploads/2016/07/213526c6-3d84-4ca4-b359-0f9ffb7e1691.jpg"
            />
          </div>
          <div class="nav">
            <label for="img-1" class="prev">
              &#x2039;
            </label>
            <label for="img-3" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-3" />
        <li class="slide-container">
          <div class="slide">
            <img
              style={{ opacity: "30%" }}
              src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2YH6/image/Phllta1cL10Y0e8juGSuKCVXy5c.jpg"
            />
          </div>
          <div class="nav">
            <label for="img-2" class="prev">
              &#x2039;
            </label>
            <label for="img-4" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-4" />
        <li class="slide-container">
          <div class="slide">
            <img
              style={{ opacity: "30%" }}
              src="https://lh5.googleusercontent.com/gPYE5a_q3ZErPX-7FQapGSqUJhdklJd_bL_T4knX0psqSYR-SYQ2RXm7K1b8aA-NbZO8fvVVjWDGKliOC1aJ__VkPM3rvkihZetAkffZH_Lo96NbsuZmANwZ-wmGadq_22Rc7mOj"
            />
          </div>
          <div class="nav">
            <label for="img-3" class="prev">
              &#x2039;
            </label>
            <label for="img-5" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-5" />
        <li class="slide-container">
          <div class="slide">
            <img
              style={{ opacity: "30%" }}
              src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F993242345BE99E632A1CAA"
            />
          </div>
          <div class="nav">
            <label for="img-4" class="prev">
              &#x2039;
            </label>
            <label for="img-6" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-6" />
        <li class="slide-container">
          <div class="slide">
            <img
              style={{ opacity: "30%" }}
              src="https://platum.kr/wp-content/uploads/2016/07/213526c6-3d84-4ca4-b359-0f9ffb7e1691.jpg"
            />
          </div>
          <div class="nav">
            <label for="img-5" class="prev">
              &#x2039;
            </label>
            <label for="img-1" class="next">
              &#x203a;
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MainUnderPage;
