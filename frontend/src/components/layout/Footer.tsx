import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="foot-quick">
        <div className="inner">
          <button
            type="button"
            className="link"
            title="소속기관(지청 및 위원회) 레이어"
            onClick="common.popupEvent('#popFootLink');"
          >
            소속기관(지청 및 위원회)
          </button>
          <button type="button" className="link" title="업무별 누리집 레이어">
            업무별 누리집
          </button>
          <button
            type="button"
            className="link"
            title="산하기관 및 관련단체 레이어"
          >
            산하기관 및 관련단체
          </button>
          <button type="button" className="link" title="정부기관 레이어">
            정부기관
          </button>
        </div>
      </div>
      <div className="inner">
        <div className="f-logo">대한민국정부</div>
        <div className="f-cnt">
          <div className="f-info">
            <p className="info-addr">
              (26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단
            </p>
            <ul className="info-cs">
              <li>
                <strong className="strong">대표전화 1577-1000</strong>
                <span className="span">(유료, 평일 09시~18시)</span>
              </li>
              <li>
                <strong className="strong">해외이용 82-33-811-2001</strong>
                <span className="span">(유료, 평일 09시~18시)</span>
              </li>
            </ul>
          </div>

          <div className="f-link">
            <div className="link-go">
              <a href="#" className="btn btn-txt sm ico-arr">
                찾아오시는 길
              </a>
              <a href="#" className="btn btn-txt sm ico-arr">
                이용안내
              </a>
              <a href="#" className="btn btn-txt sm ico-arr">
                직원검색
              </a>
            </div>
            <div className="link-sns">
              <a href="#" className="instagram" target="_blank">
                <span className="sr-only">인스타그램</span>
              </a>
              <a href="#" className="youtube" target="_blank">
                <span className="sr-only">유튜브</span>
              </a>
              <a href="#" className="twitter" target="_blank">
                <span className="sr-only">트위터</span>
              </a>
              <a href="#" className="facebook" target="_blank">
                <span className="sr-only">페이스북</span>
              </a>
              <a href="#" className="blog" target="_blank">
                <span className="sr-only">블로그</span>
              </a>
            </div>
          </div>
        </div>

        <div className="f-btm">
          <div className="f-btm-text">
            <div className="f-menu">
              <a href="#" className="point">
                개인정보처리방침
              </a>
              <a href="#">저작권 정책</a>
              <a href="#">웹 접근성 품질인증 마크 획득</a>
            </div>
            <p className="f-copy">
              © Ministry of Education. All rights reserved.
            </p>
          </div>
          <div className="f-btm-ban">
            <span className="ban-txt">
              이 누리집은 보건복지부 산하기관 누리집입니다.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
