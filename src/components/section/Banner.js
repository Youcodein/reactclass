import React from "react";

const bannerText = {
  title: "Ask",
  desc: "궁금한 점이 있으신가요? 아래 이메일로 연락 주세요!",
  bannerLink: "/",
  bannerLinkText: "D_Deco@abcde.com",
  bannerSmall: "고객 센터",
};

function BannerInner({ title, desc, bannerLink, bannerLinkText, bannerSmall }) {
  return (
    <div className="banner__inner">
      <h3 className="title">{title}</h3>
      <p className="desc">
        {desc}
        <a href={`${bannerLink}`} title="새 페이지 열림">
          {bannerLinkText}
        </a>
      </p>
      <span className="small">{bannerSmall}</span>
    </div>
  );
}

function Banner({ attr }) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap content__item scroll ${attr[0]}`}
    >
      <h2 className="blind">Ask</h2>
      <div className="banner__inner">
        {/* {bannerText.map((info) => (
          <BannerInner
            title={info.title}
            desc={info.desc}
            bannerLink={info.bannerLink}
            bannerLinkText={info.bannerLinkText}
            bannerSmall={info.bannerSmall}
          />
        ))} */}
        <h3 className="title">Ask</h3>
        <p className="desc">
          궁금한 점이 있으신가요? 아래 이메일로 연락 주세요!
          <a href="/" title="새 페이지 열림">
            D_Deco@abcde.com
          </a>
        </p>
        <span className="small">고객 센터</span>
      </div>
    </section>
  );
}

export default Banner;
