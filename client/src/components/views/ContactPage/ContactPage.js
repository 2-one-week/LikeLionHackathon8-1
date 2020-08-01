import React, { useEffect } from "react";

const { kakao } = window;

const ContactPage = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.586606, 127.030834),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(37.586606, 127.030834);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  });
  return (
    <div>
      <h1>CONTACT US</h1>
      <h2> 서울특별시 성북구 안암로 145 KU개척마을 206호</h2>
      <h2> 대표번호 010 - 7641 - 0430</h2>
      <div id="myMap" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default ContactPage;
