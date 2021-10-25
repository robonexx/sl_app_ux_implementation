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
`

const BtnsWrapper = styled.div`
    width: 375px;
    height: 220px;
    position: absolute;
    bottom: 8vh;
    z-index: 100;
`
const ButtonToggle = styled(BookBtn)`
  background: #4c5157;
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

    /* const handleClick = (e)=>{
        console.log("this is working fine");
        e.preventDefault();
        e.target.style.background = 'var(--color-neutral-700)'
        console.log(e.target);
    } */
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
                    <h2>Din cykel är nu bokad</h2>
                    <p>ID: 76487 888</p>
                    <span>Lås upp cykel med Qr koden på din biljett</span>
                </div>
            </div>
            </BtnsWrapper>
            
     );
}
 
export default BookBikeBtn;