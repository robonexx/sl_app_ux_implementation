import React, { useState } from 'react';
import Map from '../../components/map/Map';
import TravelBtns from '../../components/TravelBtnsContainer';
import './Homepage.css';
import Modal from '../../components/Modal/Modal';

const Info = () => (
  <div className='landing-info'>
    <h3>Welcome!</h3>
    <p>
      This is an implemention of a UX design and prototype that started as a group assignment at KYH frontend developer education, the first part was done by 
      <span> (grupp 2 hållbart resande) </span> the prototype was done in figma and later this project continued to become a <span> solo projekt </span>
      with the goal to implement the design with the changes that was given during the prototype testing.
        </p>
        <a style={{
            color: 'var(--color-highlight-light', textShadow: '2px 2px 3px rgba(0,0,0,0.5)'
        }} href="https://github.com/robonexx/rjw_fe20_imp_ux#readme"
        target="_blank">Read more...</a>

    <h3>Don't forget your helmet! Let's ride...</h3>
    <p>
    Click on <span>"Biljetter" </span>in the navigation to go forward
    </p>
  </div>
);

const Homepage = () => {
  const [showModal, setShowModal] = useState(true);

  const handleModal = () => {
    setShowModal(false);
  };
  return (
    <div className='map-wrapper'>
      {showModal && (
        <Modal handleModal={handleModal} className='modal'>
          <Info />
        </Modal>
      )}
      {/*  <div className='overlay'>
        <Info />
      </div> */}
      <Map />

      <TravelBtns />
    </div>
  );
};

export default Homepage;
