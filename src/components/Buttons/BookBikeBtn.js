import React, { useState } from 'react';

import styled from 'styled-components';

const BookBtn = styled.button`
  width: 188px;
  height: 42px;
  border: none;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: #fff;
  text-align: center;
  /* background: #20252c; */
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const BtnsWrapper = styled.div`
  width: 375px;
  height: 178px;
  position: absolute;
  bottom: 60px;
  z-index: 100;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const ButtonToggle = styled(BookBtn)`
  background: #000000;
  ${({ active }) =>
    active &&
    `
    background: #20252c;
  `}
`;
const BtnGroup = styled.div`
  width: 100%;
  display: flex;
`;

const types = ['Bike', 'Scooter'];

const BookBikeBtn = () => {
  const [active, setActive] = useState(types[0]);

  return (
    <BtnsWrapper>
      <BtnGroup>
        {types.map((type) => (
          <ButtonToggle
            key={type}
            active={active === type}
            onClick={() => {
              if (type === 'Scooter') {
                alert(`
                        Funktion ej tillgänglig,
                        väntat datum för SL scootrar
                        1a maj 2022`);
              }
              setActive(type);
            }}
          >
            {type}
          </ButtonToggle>
        ))}
      </BtnGroup>
    </BtnsWrapper>
  );
};

export default BookBikeBtn;
