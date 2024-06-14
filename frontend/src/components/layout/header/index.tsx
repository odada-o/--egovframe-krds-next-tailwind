import React from 'react'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import LinkPopup from './LinkPopup'
import SearchPopup from './SearchPopup'
import UserMenu from './UserMenu'
import LanguageMenu from './LanguageMenu'
import SkipNav from './SkipNav'
import HeaderTop from './HeaderTop'

const Header = () => {
  return (
    <>
      <SkipNav />
      <HeaderTop />
      {/* 헤더 영역 */}
      <header id="header">
        {/* 헤더 컨텐츠 영역  */}
        <div className="header-in">
          {/* 헤더 상단 기타메뉴 */}
          <div className="head-body">
            <div className="inner">
              <div className="head-etc">
                <ul className="etc-ul">
                  <li className="li">
                    <a
                      href="#"
                      className="btn btn-txt ico-go xsm"
                      target="_blank"
                    >
                      어린이 정부포털
                    </a>
                  </li>
                  <li className="li">
                    <div className="krds-drop-wrap">
                      <button
                        type="button"
                        className="btn btn-txt ico-arr-down xsm drop-btn"
                      >
                        지원
                      </button>
                      <div className="drop-menu">
                        <div className="drop-in">
                          <ul className="drop-list">
                            <li>
                              <a href="#" className="item-link">
                                인증센터
                              </a>
                            </li>
                            <li>
                              <a href="#" className="item-link">
                                누리집안내지도
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="li">
                    <div className="krds-drop-wrap zoom-drop">
                      <button
                        type="button"
                        className="btn btn-txt ico-arr-down xsm drop-btn"
                      >
                        화면크기
                      </button>
                      <div className="drop-menu">
                        <div className="drop-in">
                          <ul className="drop-list">
                            <li>
                              <a href="#" className="item-link xsm">
                                작게
                              </a>
                            </li>
                            <li>
                              <a href="#" className="item-link sm active">
                                보통
                              </a>
                            </li>
                            <li>
                              <a href="#" className="item-link md">
                                조금 크게
                              </a>
                            </li>
                            <li>
                              <a href="#" className="item-link lg">
                                크게
                              </a>
                            </li>
                            <li>
                              <a href="#" className="item-link xlg">
                                가장크게
                              </a>
                            </li>
                          </ul>
                          <div className="drop-btm-btn">
                            <button
                              type="button"
                              className="btn sm btn-txt ico-reset ico-before"
                            >
                              초기화
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="li">
                    <LanguageMenu />
                  </li>
                </ul>
              </div>
              <div className="head-in">
                <h1 className="logo">
                  <a href="worksheet.html">대한민국정부</a>
                </h1>

                <div className="right">
                  <UserMenu />
                </div>
              </div>
            </div>
          </div>
          {/* //헤더 상단 기타메뉴 */}

          {/* 웹 : 메뉴 영역 */}
          <Navigation />
          {/* //웹 : 메뉴 영역 */}
        </div>
        {/* //헤더 컨텐츠 영역  */}

        {/* 모바일 : 전체메뉴 */}
        <MobileMenu />
        {/* //모바일 : 전체메뉴 */}

        {/* 레이어 : 통합 검색 */}
        <SearchPopup />
        {/* //레이어 : 통합 검색 */}

        {/* 레이어 : 소속기관 링크 */}
        <LinkPopup />
        {/* //레이어 : 소속기관 링크 */}
      </header>
      {/* //헤더 영역 */}
    </>
  )
}

export default Header
