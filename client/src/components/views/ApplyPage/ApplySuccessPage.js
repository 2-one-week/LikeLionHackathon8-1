import React, { useState, useEffect } from "react";
import Axios from "axios";

function ApplySuccessPage() {
  //   const [Apply, setApply] = useState([]);

  //   const applyVariable = {};

  //   useEffect(() => {
  //     Axios.post("/getapply", applyVariable).then((response) => {
  //       if (response.data.success) {
  //         console.log(response.data);
  //       } else {
  //         alert("이력서 정보를 불러오는데 실패했습니다.");
  //       }
  //     });
  //   });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        이력서가 정상적으로 제출되었습니다.
      </h1>
      <div>
        <h3>
          이름 <span>이름</span>
        </h3>
        <h3>
          이메일 <span>이메일</span>
        </h3>
        <h3>
          연락처 <span>연락처</span>
        </h3>
        <h3>
          성별 <span>성별</span>
        </h3>
        <h3>
          지원부서 <span>지원부서</span>
        </h3>
        <h3>
          이력서 <span>다운로드</span>
        </h3>
      </div>
    </div>
  );
}

export default ApplySuccessPage;
