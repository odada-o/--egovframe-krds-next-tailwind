import React from 'react';

const PageTitle = () => {
    return (
        <div
            className="page-title-wrap"
            data-type="responsive"
        >
            <h2 className="h-tit">page title</h2>
            <div className="krds-drop-wrap h-tit-drop">
                <button
                    type="button"
                    className="h-tit drop-btn"
                >
                    서비스 소개
                </button>
                <div className="drop-menu">
                    <div className="drop-in">
                        <ul className="drop-list">
                            <li>
                                <a
                                    href="#"
                                    className="item-link"
                                >
                                    서비스 소개
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="item-link"
                                >
                                    국내에서 외국발간자료 신청
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="item-link"
                                >
                                    해외에서 국내발간자료 신청
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;
