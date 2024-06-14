import React from 'react';
import { useMediaQuery } from 'react-responsive';

const QuickNav = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className="quick-nav">
            {isMobile ? (
                <div className="quick-nav-area mobile mob-only">
                    <nav className="quick-list">
                        <ul>
                            <li>
                                <a
                                    href="#section_01"
                                    className="active"
                                >
                                    서비스 개요
                                </a>
                            </li>
                            <li>
                                <a href="#section_02">서비스 상세</a>
                            </li>
                            <li>
                                <a href="#section_03">신청 방법 및 절차</a>
                            </li>
                            <li>
                                <a href="#section_04">제출 서류</a>
                            </li>
                            <li>
                                <a href="#section_05">함께 신청할 수 있는 서비스</a>
                            </li>
                            <li>
                                <a href="#section_06">부가정보</a>
                            </li>
                            <li>
                                <a href="#section_07">정보 변경 내역</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <div className="quick-nav-area pc-only">
                    <div className="quick-title-wrap">
                        <p className="guide-txt">이 페이지의 구성</p>
                        <h3 className="sec-tit">장애아동수당</h3>
                    </div>
                    <nav className="quick-list">
                        <ul>
                            <li>
                                <a
                                    href="#section_01"
                                    className="active"
                                >
                                    서비스 개요
                                </a>
                            </li>
                            <li>
                                <a href="#section_02">서비스 상세</a>
                            </li>
                            <li>
                                <a href="#section_03">신청 방법 및 절차</a>
                            </li>
                            <li>
                                <a href="#section_04">제출 서류</a>
                            </li>
                            <li>
                                <a href="#section_05">함께 신청할 수 있는 서비스</a>
                            </li>
                            <li>
                                <a href="#section_06">부가정보</a>
                            </li>
                            <li>
                                <a href="#section_07">정보 변경 내역</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="btn-wrap">
                        <button
                            type="button"
                            className="btn primary"
                        >
                            장애아동수당 온라인 신청하기
                        </button>
                        <p className="guide-txt">
                            장애아동수당 외 <strong>1건</strong>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuickNav;
