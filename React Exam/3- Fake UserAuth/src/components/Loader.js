import React from 'react';
import { Audio } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="loader-container loader-container-outlet">
      <Audio
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
