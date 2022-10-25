import React from "react";

function ImgText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap scroll ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgtext__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>초보 다.꾸인을 위해</span>
          <h3>유용한 사이트 살펴보기</h3>
          <p>다이어리 꾸미기를 처음 할 때 입문용으로 유용한 사이트입니다.</p>
          <ul>
            <li>
              <a href="/">튜토리얼 사이트</a>
            </li>
            <li>
              <a href="/">레퍼런스 사이트</a>
            </li>
            <li>
              <a href="/">디지털 다이어리 스티커</a>
            </li>
            <li>
              <a href="/">유용한 블로그 모음</a>
            </li>
            <li>
              <a href="/">다꾸 자랑 사진들</a>
            </li>
            <li>
              <a href="/">Youtube 사이트</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">레퍼런스 사이트</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            튜토리얼 사이트
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImgText;
