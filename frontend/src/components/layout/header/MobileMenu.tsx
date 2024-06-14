import React from 'react'

const MobileMenu = () => {
  return (
    <div id="m-gnb" className="m-gnb-wrap">
      <div className="m-gnb-in">
        <div className="m-gnb-head">
          <div className="m-gnb-top-etc">
            <ul className="etc-ul">
              <li>
                <button type="button" className="btn btn-txt xsm">
                  화면크기
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-txt xsm">
                  Language
                </button>
              </li>
            </ul>
            <button type="button" className="btn btn-ico ico-close">
              <span className="sr-only">전체메뉴 닫기</span>
            </button>
          </div>
          <div className="m-gnb-login">
            <a href="#" className="btn-navi navi-row login">
              로그인을 해주세요.
            </a>
          </div>
          <div className="etc-menu">
            <a href="#" className="link">
              메뉴명
            </a>
            <a href="#" className="link">
              메뉴명
            </a>
            <a href="#" className="link">
              메뉴명
            </a>
            <a href="#" className="link">
              메뉴명
            </a>
          </div>
          <div className="etc-sch">
            <div className="sch-input">
              <input
                type="text"
                className="form-control md"
                placeholder="찾고자 하는 메뉴명을 입력해 주세요"
              />
              <button type="button" className="btn btn-ico ico-sch">
                <span className="sr-only">검색</span>
              </button>
            </div>
          </div>
        </div>

        <div className="m-gnb-body">
          <div className="m-gnb-menu">
            <div className="menu-wrap">
              <ul className="ul">
                <li>
                  <a href="#mGnb-anchor1" className="mn">
                    MyGOV
                  </a>
                </li>
                <li>
                  <a href="#mGnb-anchor2" className="mn">
                    민원서비스
                  </a>
                </li>
                <li>
                  <a href="#mGnb-anchor3" className="mn">
                    보조금24
                  </a>
                </li>
                <li>
                  <a href="#mGnb-anchor4" className="mn">
                    정책정보
                  </a>
                </li>
                <li>
                  <a href="#mGnb-anchor5" className="mn">
                    고객센터
                  </a>
                </li>
              </ul>
            </div>
            <div className="submenu-wrap">
              <div className="dl" id="mGnb-anchor1">
                <dl>
                  <dt className="dt">MyGOV</dt>
                  <dd className="dd">
                    <a href="#" className="sm">
                      MyGOV 홈
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      나의 신청내역
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      나의 생활정보
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      나의 정보관리
                    </a>
                  </dd>
                </dl>
              </div>
              <div className="dl" id="mGnb-anchor2">
                <dl>
                  <dt className="dt">민원서비스</dt>
                  <dd className="dd">
                    <a href="#" className="sm">
                      민원 신청·안내
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      사실/진위 확인
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      원스톱 서비스
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      분야별 서비스
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      기업/단체 서비스
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      돌봄시설 등 위치 찾기
                    </a>
                  </dd>
                </dl>
              </div>
              <div className="dl" id="mGnb-anchor3">
                <dl>
                  <dt className="dt">보조금24</dt>
                  <dd className="dd">
                    <a href="#" className="sm">
                      보조금24 홈
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      나의 혜택
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      간편 찾기
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      전체 혜택
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      보조금24란
                    </a>
                    <ul className="sub-ul">
                      <li>
                        <a href="#" className="subm is-depth4">
                          소개(4depth)
                        </a>
                        <div className="depth4-wrap">
                          <div className="depth4-head">
                            <button
                              type="button"
                              className="btn btn-ico ico-prev"
                            >
                              <span className="sr-only">이전화면</span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-ico ico-close"
                            >
                              <span className="sr-only">전체메뉴 닫기</span>
                            </button>
                          </div>
                          <dl className="depth4-body">
                            <dt>4depth title</dt>
                            <dd>
                              <ul className="depth4-ul">
                                <li>
                                  <a href="#">depth title</a>
                                </li>
                                <li>
                                  <a href="#">depth title</a>
                                </li>
                                <li>
                                  <a href="#">depth title</a>
                                </li>
                                <li>
                                  <a href="#">depth title</a>
                                </li>
                              </ul>
                            </dd>
                          </dl>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="subm">
                          이용안내
                        </a>
                      </li>
                      <li>
                        <a href="#" className="subm">
                          자주묻는 질문
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className="dl" id="mGnb-anchor4">
                <dl>
                  <dt className="dt">정책정보</dt>
                  <dd className="dd">
                    <a href="#" className="sm">
                      분야별 정책정보
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      정부/지자체 조직도
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      정부/지자체 누리집
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      지자체 소식
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      공모전
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      공공자원공유
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      국고보조금 부정수급 신고
                    </a>
                  </dd>
                </dl>
              </div>
              <div className="dl" id="mGnb-anchor5">
                <dl>
                  <dt className="dt">고객센터</dt>
                  <dd className="dd">
                    <a href="#" className="sm">
                      공지사항
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      이용안내
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      자주 묻는 질문(FAQ)
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      자료실
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      상담 예약
                    </a>
                  </dd>
                  <dd className="dd">
                    <a href="#" className="sm">
                      개선 의견
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="m-gnb-body-btm">
            <a href="#" className="btn btn-txt sm">
              인증 센터
            </a>
            <a href="#" className="btn btn-txt sm ico-go">
              어린이 정부포털
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
