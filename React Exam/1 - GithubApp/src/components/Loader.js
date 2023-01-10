import React from 'react';
import { Watch } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="loader-container loader-container-outlet">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
