import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <section id="slider__Type" className={`slider__wrap`}>
      <div className="Slider__inner">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="desc">
              <span>Dairy</span>
              <h3>Art of Dairy</h3>
              <p>
                다이어리는 이제 기록을 넘어선 문화 예술이 되었습니다.
                <br />
                다이어리 꾸미기의 매력에 빠져보세요
              </p>
              <div class="btn">
                <a href="/">자세히보기</a>
                <a href="/" class="black">
                  사이트보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>Dairy</span>
              <h3>Art of Dairy</h3>
              <p>
                다이어리는 이제 기록을 넘어선 문화 예술이 되었습니다.
                <br />
                다이어리 꾸미기의 매력에 빠져보세요
              </p>
              <div class="btn">
                <a href="/">자세히보기</a>
                <a href="/" class="black">
                  사이트보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>Dairy</span>
              <h3>Art of Dairy</h3>
              <p>
                다이어리는 이제 기록을 넘어선 문화 예술이 되었습니다.
                <br />
                다이어리 꾸미기의 매력에 빠져보세요
              </p>
              <div class="btn">
                <a href="/">자세히보기</a>
                <a href="/" class="black">
                  사이트보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>Dairy</span>
              <h3>Art of Dairy</h3>
              <p>
                다이어리는 이제 기록을 넘어선 문화 예술이 되었습니다.
                <br />
                다이어리 꾸미기의 매력에 빠져보세요
              </p>
              <div class="btn">
                <a href="/">자세히보기</a>
                <a href="/" class="black">
                  사이트보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>Dairy</span>
              <h3>Art of Dairy</h3>
              <p>
                다이어리는 이제 기록을 넘어선 문화 예술이 되었습니다.
                <br />
                다이어리 꾸미기의 매력에 빠져보세요
              </p>
              <div class="btn">
                <a href="/">자세히보기</a>
                <a href="/" class="black">
                  사이트보기
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
