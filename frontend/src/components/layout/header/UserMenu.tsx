import React from 'react'

const UserMenu = () => {
  return (
    <>
      <button
        type="button"
        className="btn-navi sch"
        title="통합검색 레이어"
        onClick="common.popupEvent('#popTotalSch');"
      >
        통합검색
      </button>
      <button type="button" className="btn-navi login">
        로그인
      </button>
      <button type="button" className="btn-navi join">
        회원가입
      </button>
      <div className="krds-drop-wrap my-drop">
        <button type="button" className="btn-navi my drop-btn">
          나의 GOV
        </button>
        <div className="drop-menu">
          <div className="drop-in">
            <div className="drop-top-info">
              <p className="my-name">홍길동님</p>
              <dl className="my-time">
                <dt>로그아웃까지 남은 시간</dt>
                <dd>
                  <span className="time">12:00</span>
                  <button type="button" className="btn sm btn-txt">
                    시간 연장
                  </button>
                </dd>
              </dl>
            </div>
            <ul className="drop-list">
              <li>
                <a href="#" className="item-link">
                  나의 GOV 홈
                </a>
              </li>
              <li>
                <a href="#" className="item-link">
                  나의 신청내역
                </a>
              </li>
              <li>
                <a href="#" className="item-link">
                  나의 생활정보
                </a>
              </li>
              <li>
                <a href="#" className="item-link">
                  나의 정보관리
                </a>
              </li>
            </ul>
            <div className="drop-btm-btn">
              <button
                type="button"
                className="btn sm btn-txt ico-log ico-before"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn-navi all" id="m-gnb-open">
        전체메뉴
      </button>
    </>
  )
}

export default UserMenu
