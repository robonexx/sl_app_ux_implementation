import {Link} from 'react-router-dom'
import './TheEnd.css';
import SlIcon from '../../assets/icons/Sl';
const TheEnd = () => {

  return (
      <div className='the-end'>
          <div className='end-info'>
              <SlIcon />
        <h1>
          Tack för att du är med och bidrar till ett bättre klimat och skapar
          den hållbara framtiden tillsammans med oss på SL.
        </h1>
          </div>
          <Link to='/'>
        <button className='end-btn'>Tack och hej!</button>
      </Link>
    </div>
  );
};

export default TheEnd;
