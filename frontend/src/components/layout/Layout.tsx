import React from 'react';
import Footer from './Footer';
import Header from './header';
import { useRouter } from 'next/router';
import Snb from '../navigation/Snb';
import Breadcrumb from '../navigation/Breadcrumb';
import PageTitle from '../page/PageTitle';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useRouter();
    const pathname = location.pathname;

    const isMainPage = pathname === '/';
    const isQuickNavPage = /\/quick-nav/.test(pathname);

    return (
        <div id="wrap">
            {/* <Header /> */}
            <div id="container">
                {isMainPage && <div className="inner">{children}</div>}
                {!isMainPage && !isQuickNavPage && (
                    <div className="inner in-between">
                        <Snb />
                        <div className="contents">
                            <Breadcrumb />
                            <PageTitle />
                            {children}
                        </div>
                    </div>
                )}
                {isQuickNavPage && (
                    <>
                        <Breadcrumb />
                        <div className="inner quick-nav-inner">
                            <PageTitle />
                            <div className="conts-area quick-nav-type">
                                <div className="conts-detail-wrap">
                                    <div className="content-wrap scroll-check">{children}</div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
