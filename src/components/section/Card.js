import React from "react";

const cardTitle = {
  title: "How?",
  desc: "어떤 식으로 당신의 다이어리를 꾸밀건가요? 당신만의 멋진 다이어리를 만들어보세요!",
};

const cardContents = [
  {
    imgSrc:"card_bg01_01",
    cardTit: "멋진 글을 적어보세요.",
    cardDesc:"어떠한 글이 멋진 글이라고 정확히 정할 수는 없습니다만 당신이 쓰는 글이라면 어떤 글이든 멋질 거예요! 연필을 들고 종이에 적어볼까요? 용기를 내세요 글을 적으세요! 당신의 마음을 적어보세요!",

  },
  {
    imgSrc:"card_bg01_02",
    cardTit: "당신의 추억을 기록하세요!",
    cardDesc:"기억으로 남기는 것도 좋은 방법이지만 기록으로 남기지 않은 기억은 금방 휘발되는 법이죠. 당신의 기억과 감정을 어딘가에 박제하세요. 훗날 당신의 추억을 읽고 기뻐할 당신의 얼굴을 상상하세요!",

  },
  {
    imgSrc:"card_bg01_03",
    cardTit: "당신의 추억을 장식하세요",
    cardDesc:"당신의 감정을 시각적으로 표현하고 싶지 않으신가요? 스티커를 붙이세요. 그림을 그리세요. 당신의 추억을 장식하세요. 적절한 장식은 감정을 실감나게 표현해줍니다. 마음에 드는 스티커나 그림으로 예쁘게 장식해보세요",

  },
]

function CardInner ({imgSrc, cardTit, cardDesc}) {
  return (
    <article className="card">
          <figure className="card__header">
            <img
              src={`assets/img/${imgSrc}.jpg`}
              alt="멋진 글을 적어보세요."
            ></img>
          </figure>
          <div className="card__body">
            <h3 className="tit">{cardTit}</h3>
            <p className="desc">
              {cardDesc}
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span>
                <svg
                  width="65"
                  height="8"
                  viewBox="0 0 65 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
  )
}


function Card({ attr }) {
  return (
    <section id="cardType" className={`card__wrap ${attr[0]} ${attr[1]}`}>
      <h2>{cardTitle.title}</h2>
      <p>
      {cardTitle.desc}
      </p>
      {/* <h2>How?</h2>
      <p>
        어떤 식으로 당신의 다이어리를 꾸밀건가요? 당신만의 멋진 다이어리를
        만들어보세요!
      </p> */}
      <div className={`card__inner ${attr[2]}`}>
        {cardContents.map((info) => (
          <CardInner 
          imgSrc={info.imgSrc}
          cardTit={info.cardTit}
          cardDesc={info.cardDesc}
          />
          ))
          }
        {/* <article className="card">
          <figure className="card__header">
            <img
              src="assets/img/card_bg01_01.jpg"
              alt="멋진 글을 적어보세요."
            ></img>
          </figure>
          <div className="card__body">
            <h3 className="tit">멋진 글을 적어보세요.</h3>
            <p className="desc">
              어떠한 글이 멋진 글이라고 정확히 정할 수는 없습니다만 당신이 쓰는
              글이라면 어떤 글이든 멋질 거예요! 연필을 들고 종이에 적어볼까요?
              용기를 내세요 글을 적으세요! 당신의 마음을 적어보세요!
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span>
                <svg
                  width="65"
                  height="8"
                  viewBox="0 0 65 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>

        <article className="card">
          <figure className="card__header">
            <img
              src="assets/img/card_bg01_02.jpg"
              alt="당신의 추억을 기록하세요"
            ></img>
          </figure>
          <div className="card__body">
            <h3 className="tit">당신의 추억을 기록하세요!</h3>
            <p className="desc">
              기억으로 남기는 것도 좋은 방법이지만 기록으로 남기지 않은 기억은
              금방 휘발되는 법이죠. 당신의 기억과 감정을 어딘가에 박제하세요.
              훗날 당신의 추억을 읽고 기뻐할 당신의 얼굴을 상상하세요!
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span>
                <svg
                  width="65"
                  height="8"
                  viewBox="0 0 65 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>

        <article className="card">
          <figure className="card__header">
            <img
              src="assets/img/card_bg01_03.jpg"
              alt="당신의 추억을 장식하세요"
            ></img>
          </figure>
          <div className="card__body">
            <h3 className="tit">당신의 추억을 장식하세요</h3>
            <p className="desc">
              당신의 감정을 시각적으로 표현하고 싶지 않으신가요? 스티커를
              붙이세요. 그림을 그리세요. 당신의 추억을 장식하세요. 적절한 장식은
              감정을 실감나게 표현해줍니다. 마음에 드는 스티커나 그림으로 예쁘게
              장식해보세요
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="65"
                  height="8"
                  viewBox="0 0 65 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Card;
