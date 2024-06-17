import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const InnerContainer = styled.div`
    ${tw`flex justify-between items-center px-4 py-2`}
`;

const Inner = ({ children }: { children: React.ReactNode }) => {
    return <InnerContainer>{children}</InnerContainer>;
};

export default Inner;
