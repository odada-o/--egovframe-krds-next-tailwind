import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface InnerContainerProps {
    isFlex?: boolean;
}

const InnerContainer = styled.div<InnerContainerProps>`
    ${tw`px-4 py-2 mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl`}
    ${({ isFlex }) => isFlex && tw`flex`}
`;

const Inner = ({ children, isFlex = false }: { children: React.ReactNode; isFlex?: boolean }) => {
    return <InnerContainer isFlex={isFlex}>{children}</InnerContainer>;
};

export default Inner;
