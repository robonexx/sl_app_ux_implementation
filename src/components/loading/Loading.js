import React from 'react';
import loading from '../../assets/images/loading.gif';

const Loading = () => {
  return (
    <img
      src={loading}
      style={{ width: '100px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  );
};

export default Loading;
