import React from 'react';
import { useMediaQuery } from 'react-responsive';

const QuickNav = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className="quick-nav">
            {isMobile ? (
                <div className="quick-nav-mobile">{/* 모바일 전용 QuickNav 내용 */}</div>
            ) : (
                <div className="quick-nav-pc">{/* PC 전용 QuickNav 내용 */}</div>
            )}
        </div>
    );
};

export default QuickNav;
