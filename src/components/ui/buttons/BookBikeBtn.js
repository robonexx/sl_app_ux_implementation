import React, {useState} from 'react';
import './bookBikeBtn.css'
import styled from 'styled-components'

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
`

const BtnsWrapper = styled.div`
    width: 375px;
    height: 178px;
    position: absolute;
    bottom: 8vh;
    z-index: 100;

    @media (max-width: 768px) {
    width: 100vw;
  }

`
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
`

const types = ['Bike', 'Scooter'];

const BookBikeBtn = () => {
    const [active, setActive] = useState(types[0])

    return (
        
        <BtnsWrapper >
            <BtnGroup>
                {types.map(type => (
                   
                    <ButtonToggle
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </ButtonToggle>
               ))}
            </BtnGroup>
            <div className="search-add bottom-container">
                <div className="booking-info">
                    
                         {/* {active.type === 'Bike'  ?
                         ( */}
                             <>
                        <h2>Din {active.type !== 'Bike' ? 'cykel' : 'scooter'} är nu bokad</h2>
                             <p>ID: 76487 888</p>
                             <span>Lås upp cykeln med Qr koden på din biljett</span>
                             </>
                        {/*  ) : (
                             <>
                             <h2>Din scooter är nu bokad</h2>
                             <p>ID: 76487 889</p>
                                 <span>Lås upp scootern med Qr koden på din biljett</span>
                             </>
                     )} */}
                      </div>
                   

                
            </div>
            </BtnsWrapper>
            
     );
}
 
export default BookBikeBtn;