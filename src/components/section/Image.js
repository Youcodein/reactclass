import React from "react";

const imageTitle = {
  title: "Why?",
  desc: "왜 사람들은 '다이어리 꾸미기' 에 열광하는가?",
};
const imageText = [
  {
    title: "Remember your Memorie",
    desc: "기억으로 남기는 것도 좋은 방법이지만 기록으로 남기지 않은 기억은 금방 휘발되는 법입니다. 멋진 기억들을 기록하고 이후에 펼쳐보면 많은 감정들을 알려주죠.",
    imgClass: "img1",
    btnClass: "image__btn",
    btnLink: "/",
  },
  {
    title: "See my Feelings",
    desc: "당신의 감정을 시각적으로 표현하고 싶지 않으신가요? 스티커를 붙이세요. 그림을 그리세요. 당신의 추억을 장식하세요. 적절한 장식은 감정을 실감나게 표현해줍니다. 마음에 드는 스티커나 그림으로 예쁘게 장식해보세요",
    imgClass: "img2",
    btnClass: "image__btn",
    btnLink: "/",
  },
];
function ImageInner({ title, desc, imgClass, btnClass, btnLink }) {
  return (
    <article className={`image ${imgClass}`}>
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">{desc}</p>
      <a className={`${btnClass}`} href={`${btnLink}`} title="자세히 보기">
        자세히 보기
      </a>
    </article>
  );
}

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}
    >
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>

      <div className={`image__inner ${props.attr[3]}`}>
        {imageText.map((info) => (
          <ImageInner
            title={info.title}
            desc={info.desc}
            imgClass={info.imgClass}
            btnClass={info.btnClass}
            btnLink={info.btnLink}
          />
        ))}
        {/* <article className="image img1">
          <h3 className="image__title">Remember your Memories</h3>
          <p className="image__desc">
            기억으로 남기는 것도 좋은 방법이지만 기록으로 남기지 않은 기억은
            금방 휘발되는 법입니다. 멋진 기억들을 기록하고 이후에 펼쳐보면 많은
            감정들을 알려주죠.
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">See my Feelings</h3>
          <p className="image__desc">
            당신의 감정을 시각적으로 표현하고 싶지 않으신가요? 스티커를
            붙이세요. 그림을 그리세요. 당신의 추억을 장식하세요. 적절한 장식은
            감정을 실감나게 표현해줍니다. 마음에 드는 스티커나 그림으로 예쁘게
            장식해보세요
          </p>
          <a className="image__btn yellow" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article> */}
      </div>
    </section>
  );
}

export default Image;
