import React from "react";

function Text({ attr }) {
  return (
    <section
      id="textType"
      className={`text__wrap scroll ${attr[0]} ${attr[1]}`}
    >
      <span>My Tip</span>
      <h2 className="mb70">📖나만의 다이어리 꾸미기 팁!🖋</h2>
      <div className={`text__inner ${attr[2]}`}>
        <div className="text t1">
          <h3 className="text__title">Only Text</h3>
          <p className="text__desc">
            문자만의 매력이 있지요. 어떠한 기교도, 장식도 없는 텍스트만의 매력은
            미니멀리즘의 아름다움을 연상합니다.
          </p>
          <a href="/" className="text__btn">
            더보기
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">Handwriting</h3>
          <p className="text__desc">
            글자만으론 너무 밋밋하신가요? 그렇다면 글씨에 예술적인 감각을
            더해보면 어떨까요? 포인트가 될 거예요!
          </p>
          <a href="/" className="text__btn">
            더보기
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">Color</h3>
          <p className="text__desc">
            무채색의 다이어리도 멋지지만 당신의 기억에 색을 칠해보는건 어떠세요?
            당신의 감정을 색깔로 표현해보세요!
          </p>
          <a href="/" className="text__btn">
            더보기
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">Hand Drawing</h3>
          <p className="text__desc">
            글만으로는 표현하기 어려울 때, 그림을 더해보세요! 당신도 저도
            무엇인지 이해하기 쉬워요! 물론, 이해하기 어려운 그림도 매력적이죠!
          </p>
          <a href="/" className="text__btn">
            더보기
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">Sticker</h3>
          <p className="text__desc">
            그림에 자신이 없다면 이미 만들어진 그림을 활용해봐요. 그래요, 바로
            스티커를 이용해보세요!
          </p>
          <a href="/" className="text__btn">
            더보기
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">Just WRITING!</h3>
          <p className="text__desc">
            앞의 팁은 모두 잊어버리세요! 자신다운 다이어리를 원하시나요? 그럼
            겁먹지 말고 일단 "쓰세요!"
          </p>
          <a href="/" className="text__btn">
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
