import React from "react";

const imgTextTitle = {
  subTitle: "초보 다.꾸인을 위해",
  title : "유용한 사이트 살펴보기",
  desc: "다이어리 꾸미기를 처음 할 때 입문용으로 유용한 사이트입니다.",
};

const imgTextDesc = [
  {
    link: "/",
    text: "튜토리얼 사이트",
  },
  {
    link: "/",
    text: "레퍼런스 사이트",
  },
  {
    link: "/",
    text: "디지털 다이어리 스티커",
  },
  {
    link: "/",
    text: "유용한 블로그 모음",
  },
  {
    link: "/",
    text: "다꾸 자랑 사진들",
  },
  {
    link: "/",
    text: "Youtube 사이트",
  },
];

function ImgTextInner({link, text}){
  return(
    <li>
      <a href={`${link}`}>{text}</a>
    </li>
  )
}

const imgTextBtn = [
  {
    btnClassName: "imgText__img",
    imgClassName: "img1",
    btnLink: "/",
    linkText: "레퍼런스 사이트"
  },
  {
    btnClassName: "imgText__img",
    imgClassName: "img2",
    btnLink: "/",
    btnClass: "blue",
    linkText: "튜토리얼 사이트"
  },
]

function ImgTextInner2({btnClassName, imgClassName, btnLink, btnClass, linkText}){
  return(
    <div className={`${btnClassName} ${imgClassName}`}>
      <a href={`${btnLink}`} className={`${btnClass}`}>{linkText}</a>
    </div>
  )
}

function ImgText(props) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap scroll ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}
    >
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgtext__inner ${props.attr[3]}`}>
        <div className="imgText__txt">
          <span>{imgTextTitle.subTitle}</span>
          <h3>{imgTextTitle.title}</h3>
          <p>{imgTextTitle.desc}</p>
          {/* <span>초보 다.꾸인을 위해</span>
          <h3>유용한 사이트 살펴보기</h3>
          <p>다이어리 꾸미기를 처음 할 때 입문용으로 유용한 사이트입니다.</p> */}
          <ul>
            {
              imgTextDesc.map((info) => (
                <ImgTextInner
                link={info.link}
                text={info.text}
                />
              ))
            }
            {/* <li>
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
            </li> */}
          </ul>
        </div>
        {
          imgTextBtn.map((info) => (
            <ImgTextInner2
            btnClassName={info.btnClassName}
            imgClassName={info.imgClassName}
            btnLink={info.btnLink}
            btnClass={info.btnClass}
            linkText={info.linkText}
            />
          ))
        }
        {/* <div className="imgText__img img1">
          <a href="/">레퍼런스 사이트</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            튜토리얼 사이트
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default ImgText;
