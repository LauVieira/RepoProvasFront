import React from 'react';
import styled from 'styled-components';

export default function Header () {
    return (
        <StyledHeader>
            <TitleBox>
                RepoProvas
            </TitleBox>
        </StyledHeader>
    );
}


const StyledHeader = styled.header`
    background: rgba(250,250,250,0.3);
    font-size: 8vw;
    font-weight: 900;
    height: 6vh;
    left: 0;
    position: fixed;
    top: 8vh;
    width: 100vw;
`;

const TitleBox = styled.span`
    color: #FFF;
    left: 4vw;
    position: fixed;
    top: 9vh;
`;