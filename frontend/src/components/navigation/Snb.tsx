import React from 'react';

const Snb = () => {
    return (
        <div className="left-menu">
            <div className="left-in">
                <h2 className="lnb-tit">1depth title</h2>
                <ul
                    className="acco-list lnb-list"
                    data-action="accordion"
                >
                    <li className="li">
                        <div className="acco-head">
                            <h3 className="tit">2depth-title</h3>
                            <button
                                type="button"
                                className="btn btn-ico acco-btn"
                            >
                                <span className="sr-only">접기</span>
                            </button>
                        </div>
                        <div className="acco-body">
                            <div className="acco-in">
                                <ul className="sub-ul">
                                    <li>
                                        <button
                                            type="button"
                                            className="subm is-depth4"
                                        >
                                            3depth title<span className="sr-only">열기</span>
                                        </button>
                                        <div className="depth4-wrap">
                                            <button
                                                type="button"
                                                className="depth4-tit"
                                            >
                                                3depth-title
                                                <span className="sr-only">닫기</span>
                                            </button>
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
                                        </div>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="subm"
                                        >
                                            3depth title
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="subm"
                                        >
                                            3depth title
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="subm"
                                        >
                                            3depth title
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="li">
                        <div className="acco-head">
                            <h3 className="tit">2depth-title</h3>
                            <button
                                type="button"
                                className="btn btn-ico acco-btn"
                            >
                                <span className="sr-only">접기</span>
                            </button>
                        </div>
                        <div className="acco-body">
                            <div className="acco-in">
                                <ul className="sub-ul">
                                    <li>
                                        <a
                                            href="#"
                                            className="subm"
                                        >
                                            3depth title
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="subm"
                                        >
                                            3depth title
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="subm"
                                        >
                                            3depth title
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="subm is-depth4"
                                        >
                                            3depth title<span className="sr-only">열기</span>
                                        </button>
                                        <div className="depth4-wrap">
                                            <button
                                                type="button"
                                                className="depth4-tit"
                                            >
                                                3depth title<span className="sr-only">닫기</span>
                                            </button>
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
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="li">
                        <div className="acco-head">
                            <h3 className="tit">2depth-title</h3>
                            <button
                                type="button"
                                className="btn btn-ico acco-btn"
                            >
                                <span className="sr-only">접기</span>
                            </button>
                        </div>
                        <div className="acco-body">
                            <div className="acco-in">
                                <ul className="sub-ul">
                                    <li>
                                        <a
                                            href="#"
                                            className="subm"
                                        >
                                            3depth title
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="subm"
                                        >
                                            3depth title
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="subm"
                                        >
                                            3depth title
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="subm"
                                        >
                                            3depth title
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Snb;
