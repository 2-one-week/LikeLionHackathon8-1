import React from "react";

function AboutPage() {
  return (
    <div class="about-body">
      <h2 class="title">INTRODUCE</h2>
      <p class="about-content">
        {" "}
        저희는 아이디어를 실제 서비스로 구현하기 위해 웹 프로그래밍을 배우는
        소프트웨어 벤처 학회입니다. <br />
        IT 서비스를 구축해 사회적으로 의미 있는 활동을 하거나, 사용자를 대상으로
        사업을 출시할 수 있습니다.{" "}
      </p>

      <div>
        <h2 class="title">PRESS</h2>
        <p>NEWSPAPER</p>

        <div class="hoverNews">
          <figure class="newsbox">
            <img
              src="https://newsimg.hankookilbo.com/2020/02/03/202002031648098655_7.jpg"
              alt="sample36"
            />

            <figcaption>
              <div>
                <h3 class="about-text">Update News</h3>
                <h3 class="about-text">코로나 알리미 개발한 고대생</h3>
              </div>
              <div>
                <a href="http://news.joins.com/article/23696824">
                  <h2 class="about-text">코로나알리미 개발한 고대</h2>
                </a>
              </div>
            </figcaption>
            <a href="#"></a>
          </figure>

          <figure class="newsbox">
            <img
              src="https://lh3.googleusercontent.com/proxy/RUDwOObPtk5iedRotJmDNuy0G2JSRsqcIfsgdpQpruoIUTqnm30AStH0dFeG8yuJqx7y8_urm6RUhO5laEgmoe1bfReDU-fbq_rYkkxXWg"
              alt="sample83"
            />
            <figcaption>
              <div>
                <h3 class="about-text">Update News</h3>
                <h3 class="about-text">이번엔 마스크알리미</h3>
              </div>
              <div>
                <a href="http://news.joins.com/article/23696824">
                  <h2 class="about-text">이번엔 마스크알리미</h2>
                </a>
              </div>
            </figcaption>
            <a href="#"></a>
          </figure>

          <figure class="newsbox">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample45.jpg"
              alt="sample45"
            />
            <figcaption>
              <div>
                <h3 class="about-text">Update News</h3>
                <h3 class="about-text">세상을 바꿔요</h3>
              </div>
              <div>
                <a href="http://news.joins.com/article/23696824">
                  <h2 class="about-text">SW로 세상을 바꿔요</h2>
                </a>
              </div>
            </figcaption>
            <a href="#"></a>
          </figure>
        </div>
        <br />
        <br />
        <br />
        <p>YOUTUBE</p>
        <div class="youtube">
          <iframe
            width="900"
            height="570"
            src="https://www.youtube.com/embed/o6q1QlsT4Bk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <h2 class="title">ALUMNI</h2>
        <p>고려대학교 멋쟁이 사자처럼에서 배출한 스타트업입니다</p>
        <div class="startup1">
          <div class="startup">
            <img
              class="img-radius"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnQwdRbRShRfc-BrW59jZncmI2COI7EiLCFQ&usqp=CAU"
            />
          </div>
          <div class="startup">
            <img
              class="img-radius"
              src="data:image/png;base64,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"
            />
          </div>
        </div>
        <div class="startup1">
          <div class="startup">
            <img
              class="img-radius"
              src="https://www.startupstation.kr/wp-content/uploads/2018/01/%EB%93%9C%EB%A6%AC%EB%A8%B8%EB%A6%AC-%EB%A1%9C%EA%B3%A0_%EC%A0%95%EC%82%AC%EA%B0%812.jpg"
              style={{ width: "225px", height: "225px" }}
            />
          </div>
          <div class="startup">
            <img
              class="img-radius"
              src="https://cdn.banksalad.com/og/default.png"
              style={{ width: "225px", height: "225px" }}
            />
          </div>
          <div class="startup">
            <img
              class="img-radius"
              src="https://file.namu.moe/file/759a95333cb08aa9ec4c92d1931bdf7af25e6cfa0b030cdb8a4429a06f672b1ed893f618e6f6cccc7553f9af4d831e5ed12857ea4f758b4c16531ab923495c46"
              style={{ width: "225px", height: "225px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
