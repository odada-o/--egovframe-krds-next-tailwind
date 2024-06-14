import React from 'react';

const Breadcrumb = () => {
    return (
        <div className="breadcrumb-wrap">
            <ol className="breadcrumb">
                <li className="home">
                    <a
                        href="#"
                        className="txt"
                    >
                        홈
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="txt"
                    >
                        서비스 신청
                    </a>
                </li>
            </ol>
        </div>
    );
};

export default Breadcrumb;
