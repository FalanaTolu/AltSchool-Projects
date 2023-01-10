import React from 'react';
import { Watch } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader-container loader-container-outlet">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#bbc330"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}


export default Loader;