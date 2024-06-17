import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Inner from './Inner';

const Footer = () => {
    return (
        <FooterContainer id="footer">
            <QuickLinks>
                <Inner>
                    <QuickLink
                        type="button"
                        title="소속기관(지청 및 위원회) 레이어"
                        onClick={() => alert('소속기관(지청 및 위원회)')}
                    >
                        소속기관(지청 및 위원회)
                    </QuickLink>
                    <QuickLink
                        type="button"
                        title="업무별 누리집 레이어"
                    >
                        업무별 누리집
                    </QuickLink>
                    <QuickLink
                        type="button"
                        title="산하기관 및 관련단체 레이어"
                    >
                        산하기관 및 관련단체
                    </QuickLink>
                    <QuickLink
                        type="button"
                        title="정부기관 레이어"
                    >
                        정부기관
                    </QuickLink>
                </Inner>
            </QuickLinks>
            <Inner>
                <Logo>
                    <img
                        src="../../resources/img/pattern/layout/head_logo.svg"
                        className="logo-im"
                        alt="대한민국정부"
                    />
                </Logo>
                <Content>
                    <Info>
                        <Address>(26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단</Address>
                        <ContactList>
                            <ContactItem>
                                <strong>대표전화 1577-1000</strong>
                                <span>(유료, 평일 09시~18시)</span>
                            </ContactItem>
                            <ContactItem>
                                <strong>해외이용 82-33-811-2001</strong>
                                <span>(유료, 평일 09시~18시)</span>
                            </ContactItem>
                        </ContactList>
                    </Info>
                    <Links>
                        <GoLinks>
                            <GoLink href="#">찾아오시는 길</GoLink>
                            <GoLink href="#">이용안내</GoLink>
                            <GoLink href="#">직원검색</GoLink>
                        </GoLinks>
                        <SnsLinks>
                            <SnsLink
                                href="#"
                                className="instagram"
                            />
                            <SnsLink
                                href="#"
                                className="youtube"
                            />
                            <SnsLink
                                href="#"
                                className="twitter"
                            />
                            <SnsLink
                                href="#"
                                className="facebook"
                            />
                            <SnsLink
                                href="#"
                                className="blog"
                            />
                        </SnsLinks>
                    </Links>
                </Content>
                <Bottom>
                    <BottomText>
                        <Menu>
                            <MenuItem
                                href="#"
                                className="point"
                            >
                                개인정보처리방침
                            </MenuItem>
                            <MenuItem href="#">저작권 정책</MenuItem>
                            <MenuItem href="#">웹 접근성 품질인증 마크 획득</MenuItem>
                        </Menu>
                        <Copy>© Ministry of Education. All rights reserved.</Copy>
                    </BottomText>
                    <Ban>
                        <BanText>이 누리집은 보건복지부 산하기관 누리집입니다.</BanText>
                    </Ban>
                </Bottom>
            </Inner>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    ${tw`relative z-50 bg-gray-5`}
`;

const QuickLinks = styled.div`
    ${tw`border-t border-b border-gray-30 bg-white`}
    .inner {
        ${tw`flex`}
    }
`;

// const Inner = styled.div`
//     ${tw`flex flex-col gap-6`}
// `;

const QuickLink = styled.button`
    ${tw`flex-1 h-14 flex items-center justify-between px-6 border-r border-gray-30`}
    &:first-child {
        ${tw`border-l`}
    }
    &::after {
        ${tw`w-8 h-8 bg-no-repeat bg-center bg-contain`}
        content: '';
        background-image: url('/pattern/layout/foot_ico_plus.svg');
    }
    &:hover {
        ${tw`bg-secondary-5`}
    }
    &:active {
        ${tw`bg-secondary-10`}
    }
`;

const Logo = styled.div`
    ${tw`h-12`}
    img {
        ${tw`h-full`}
    }
`;

const Content = styled.div`
    ${tw`flex gap-6`}
`;

const Info = styled.div`
    ${tw`flex flex-col gap-6`}
`;

const Address = styled.p`
    ${tw`text-gray-90`}
`;

const ContactList = styled.ul`
    ${tw`flex flex-col gap-4`}
`;

const ContactItem = styled.li`
    ${tw`flex items-center gap-2`}
`;

const Links = styled.div`
    ${tw`flex flex-col gap-6`}
`;

const GoLinks = styled.div`
    ${tw`flex flex-col items-start gap-2`}
`;

const GoLink = styled.a`
    ${tw`font-bold`}
`;

const SnsLinks = styled.div`
    ${tw`flex gap-2`}
`;

const SnsLink = styled.a`
    ${tw`w-10 h-10 bg-no-repeat bg-center bg-contain`}
    &.instagram {
        background-image: url('/pattern/layout/foot_ico_sns_Instagram.svg');
    }
    &.youtube {
        background-image: url('/pattern/layout/foot_ico_sns_youtube.svg');
    }
    &.twitter {
        background-image: url('/pattern/layout/foot_ico_sns_twitter.svg');
    }
    &.facebook {
        background-image: url('/pattern/layout/foot_ico_sns_facebook.svg');
    }
    &.blog {
        background-image: url('/pattern/layout/foot_ico_sns_blog.svg');
    }
`;

const Bottom = styled.div`
    ${tw`flex flex-col pt-2 gap-6 border-t border-gray-30`}
`;

const BottomText = styled.div`
    ${tw`flex justify-between items-center gap-4`}
`;

const Menu = styled.div`
    ${tw`flex flex-wrap`}
`;

const MenuItem = styled.a`
    ${tw`inline-flex items-center h-10 px-4`}
    &.point {
        ${tw`font-bold text-secondary`}
    }
    &:hover {
        ${tw`rounded-md bg-secondary-5`}
    }
    &:active {
        ${tw`bg-secondary-10`}
    }
`;

const Copy = styled.p`
    ${tw`text-sm text-gray-70`}
`;

const Ban = styled.div`
    ${tw`flex items-center min-h-10 px-4 rounded-md bg-white`}
    &::before {
        ${tw`w-10 h-6 mr-2 bg-no-repeat bg-center bg-contain`}
        content: '';
        background-image: url('/pattern/content/btm_ban_ico_flag.svg');
    }
`;

const BanText = styled.span`
    ${tw`text-sm`}
`;

export default Footer;
