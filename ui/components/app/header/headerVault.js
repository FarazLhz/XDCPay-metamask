import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 360px;
  height: 40px;
  background-color: #e3e7eb;
  padding: 5px 5px 5px 5px;
`;

const NetworkContainer = styled.div`
width: 118px;
height: 29px;
border-radius: 15px;
background-color: #FFFFFF;
display: flex;
flex-direction: row;
}
`;

const HeaderLogo = styled.img`
margin-top: 4px;
margin-left: 4px;
`;

const SelectNetwork = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 9px;
    padding-left: 4px;
    padding-top: 4px;
`;

const DownArrow = styled.img`
padding-right: 8px;
`;

export default function headerVault() {
  return (
    // <Hi>
    //     Hii
    // </Hi>

    <Header>
      <NetworkContainer>
        <HeaderLogo src="/images/Assets/XDC-Icon.svg"></HeaderLogo>
        <SelectNetwork>
          XDC Apothem TestNet
          <DownArrow src="/images/Assets/DownArrow.svg"></DownArrow>
        </SelectNetwork>
      </NetworkContainer>
    </Header>
  );
}
