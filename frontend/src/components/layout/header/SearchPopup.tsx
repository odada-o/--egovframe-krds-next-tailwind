import React from 'react'

const SearchPopup = () => {
  return (
    <div className="popup-wrap" data-type="full" id="popTotalSch">
      <div className="popup-in">
        <div className="popup">
          <div className="popup-head sr-only">
            <h1 className="pop-tit">통합검색</h1>
          </div>
          <div className="popup-body">
            {/* 통합검색 */}
            <div className="pop-total-serch-wrap">
              {/* 통합검색 정보입력 영역 */}
              <div className="search-total-top">
                {/* 검색어 타이틀 */}
                <div className="search-tit">
                  <label htmlFor="search-total-input-id">
                    검색어를 입력해주세요
                  </label>
                  <a href="#" className="btn btn-txt ico-arr sm">
                    검색에 어려움이 있으신가요?
                  </a>
                </div>
                {/* //검색어 타이틀 */}

                {/* 검색어 입력 폼 */}
                <div className="sch-form-wrap vert">
                  <div className="sch-input">
                    <input
                      type="text"
                      className="form-control xlg"
                      id="search-total-input-id"
                      placeholder=""
                    />
                    <button type="button" className="btn btn-ico ico-sch">
                      <span className="sr-only">검색</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-txt ico-sch1 sm ico-before"
                  >
                    고급검색
                  </button>
                </div>
                {/* //검색어 입력 폼 */}
              </div>
              {/* //통합검색 정보입력 영역 */}

              {/* 검색어 리스트 */}
              <div className="search-text">
                {/* 검색어 입력 전 */}
                <ul className="sch-info-list">
                  <li className="li li1">
                    <h3 className="tit">인기검색어</h3>
                    <ol className="list">
                      <li>
                        <span className="ranking-txt">안전보건교육</span>
                        <span className="ranking-state up">
                          <em className="sr-only">상승</em>1
                        </span>
                      </li>
                      <li>
                        <span className="ranking-txt">산업재해조사표</span>
                        <span className="ranking-state same">
                          <em className="sr-only">동일</em>
                        </span>
                      </li>
                      <li>
                        <span className="ranking-txt">퇴직금계산기</span>
                        <span className="ranking-state up">
                          <em className="sr-only">상승</em>3
                        </span>
                      </li>
                      <li>
                        <span className="ranking-txt">육아휴직급여</span>
                        <span className="ranking-state same">
                          <em className="sr-only">동일</em>
                        </span>
                      </li>
                      <li>
                        <span className="ranking-txt">실업인정신청</span>
                        <span className="ranking-state same">
                          <em className="sr-only">동일</em>
                        </span>
                      </li>
                      <li>
                        <span className="ranking-txt">국민내일배움</span>
                        <span className="ranking-state down">
                          <em className="sr-only">하락</em>1
                        </span>
                      </li>
                      <li>
                        <span className="ranking-txt">노사협의회</span>
                        <span className="ranking-state down">
                          <em className="sr-only">하락</em>1
                        </span>
                      </li>
                      <li>
                        <span className="ranking-txt">산업안전보건</span>
                        <span className="ranking-state same">
                          <em className="sr-only">동일</em>
                        </span>
                      </li>
                      <li>
                        <span className="ranking-txt">
                          국민내일배움카드신청
                        </span>
                        <span className="ranking-state up">
                          <em className="sr-only">상승</em>11
                        </span>
                      </li>
                      <li>
                        <span className="ranking-txt">안전보건교육</span>
                        <span className="ranking-state same">
                          <em className="sr-only">동일</em>
                        </span>
                      </li>
                    </ol>
                  </li>
                  <li className="li li2">
                    <h3 className="tit">최근검색어</h3>
                    <ul className="list">
                      <li>
                        <span className="word-txt">안전보건교육</span>
                        <button className="btn btn-ico ico-del sm">
                          <span className="sr-only">삭제</span>
                        </button>
                      </li>
                      <li>
                        <span className="word-txt">안전보건교육</span>
                        <button className="btn btn-ico ico-del sm">
                          <span className="sr-only">삭제</span>
                        </button>
                      </li>
                      <li>
                        <span className="word-txt">안전보건교육</span>
                        <button className="btn btn-ico ico-del sm">
                          <span className="sr-only">삭제</span>
                        </button>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-txt ico-del sm">
                      최근검색어 전체 삭제
                    </button>
                  </li>
                </ul>
                {/* //검색어 입력 전 */}
              </div>
              {/* //검색어 리스트 */}
            </div>
            {/* //통합검색 */}
          </div>
          <button type="button" className="popup-close">
            <span className="sr-only">레이어 닫기</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchPopup
