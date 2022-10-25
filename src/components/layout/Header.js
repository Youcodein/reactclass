import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            Diary <em>deco</em>
          </a>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <a href="#sliderType">Hot!</a>
            </li>
            <li>
              <a href="#imageType">Why?</a>
            </li>
            <li>
              <a href="#imgTextType">for NEWBIE</a>
            </li>
            <li>
              <a href="#cardType">How?</a>
            </li>
            <li>
              <a href="#bannerType">Ask</a>
            </li>
            <li>
              <a href="#textType">My Tip</a>
            </li>
          </ul>
        </div>
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
