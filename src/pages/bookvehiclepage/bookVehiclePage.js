import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { Link } from 'react-router-dom';
/* import Map from '../../components/map/Map'; */
import BookBikeBtn from '../../components/Buttons/BookBikeBtn';
import ReactDOM from 'react-dom';
import geoJson from '../../sthlm-sub.json';
import Bike from '../../assets/icons/Bike';
import Modal from '../../components/Modal/Modal';
import './BookVehicle.css';

const BookingInfo = () => (
  <div className='modal-info'>
    <h3>Choosing a bike</h3>
    <p>Availabilty will be shown as</p>
    <div className='bikes'>
      <p>Available bike = </p>
      <span className='available'></span>
    </div>
    <div className='bikes'>
      <p>Unavailable bike = </p>
      <span className='not-available'></span>
    </div>
    <p>When ready continue by booking the vehicle</p>
  </div>
);

mapboxgl.accessToken =
  'pk.eyJ1IjoicnViYWR1YiIsImEiOiJja3U1ZXR2ajcwbHc5MnZvNTI0d2cwNGl2In0.7u6g9rRD0OoysTdKbeNb4Q';

const Marker = ({ onClick, children, feature }) => {
  const MouseEnter = (e) => {
    if (feature.properties.bookable === false) {
      e.target.style.fill = 'var(--color-error-dark)';
    } else {
      e.target.style.fill = 'var(--color-success-light)';
    }
  };

  const MouseLeave = (e) => {
    e.target.style.fill = '';
  };

  const _onClick = () => {
    if (feature.properties.bookable === false) {
      let info = () => (
        <div style={{ color: 'tomato' }}>
          <div>Inga lediga cyklar:</div>
          <div> {feature.properties.adress}</div>
          <div>T-bana station: {feature.properties.title}</div>
        </div>
      );
      onClick(info);
    } else {
      let info = () => (
        <>
          <div>Boka denna cykel på adress:</div>
          <div> {feature.properties.adress}</div>
          <div>
            T-bana station: {feature.properties.title}, ID:{' '}
            {feature.properties.id}
          </div>
        </>
      );
      onClick(info);
    }
  };

  return (
    <div onClick={_onClick} onMouseOver={MouseEnter} onMouseOut={MouseLeave}>
      <Bike>{children}</Bike>
    </div>
  );
};

const BookVehicle = ({ text }) => {
  const mapContainerRef = useRef(null);
  const [textInfo, setTextInfo] = useState('');
  const [lng, setLng] = useState(18.07248804438448);
  const [lat, setLat] = useState(59.31951525682159);
  const [zoom, setZoom] = useState(14);

  const [showModal, setShowModal] = useState(true);

  const handleModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // settings for map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      pitch: 60,
      bearing: -40,
    });

    // Render custom marker components
    geoJson.features.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement('div');
      // Render a Marker Component on our new DOM node
      ReactDOM.render(
        <Marker onClick={markerClicked} feature={feature} />,
        ref.current
      );

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const markerClicked = (text) => {
    /*  window.alert(text); */
    setTextInfo(text);
  };

  return (
    <div className='map-wrapper'>
      {showModal && (
        <Modal handleModal={handleModal}>
          <BookingInfo />
        </Modal>
      )}
      <div className='map-container' ref={mapContainerRef} />

      <div className='booking-text'>
        <BookBikeBtn />
      </div>
      <div className='book-bottom-container'>
        <div className='booking-info'>
          {textInfo !== '' ? (
            <div>
              <h2>{textInfo}</h2>
            </div>
          ) : (
            <div>
              <h2>Inget fordon bokat</h2>
              <h2>ID: XXXXX XXX</h2>
            </div>
          )}
        </div>
      </div>
      <Link to='/bikeridepage'>
        <button className='bookBike-btn'>Boka fordon</button>
      </Link>
    </div>
  );
};

export default BookVehicle;
