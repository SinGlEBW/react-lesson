import React from 'react';
import './Preloader.css';

let Preloader = (props) => {

  if (props.id === 'pageLoading') {
    return (
      <div className="box-jump-loader">
        <div className="box-jump-wrap">
          <div className="📦"></div>
          <div className="📦"></div>
          <div className="📦"></div>
          <div className="📦"></div>
          <div className="📦"></div>
        </div>
      </div>
    )
  }
  if(props.id === 'cube-loader'){
    return (
        <div className="cube-loader">
          <div className="cube loader-1"></div>
          <div className="cube loader-2"></div>
          <div className="cube loader-4"></div>
          <div className="cube loader-3"></div>
        </div>
    )
  }
}



export default Preloader;