import { FunctionComponent, useState } from 'react';
import { DOMAIN } from '../config';
import err1 from '../assets/images/error/err1.jpg';

const NotFound: FunctionComponent = () => {
  const errImages = [err1];

  return (
    <div className="main">
      <div className="content">
        <div className="page-container">
          <div className="not-found-container">
            <h1 id="404">Oops! We couldn&rsquo;t find the page you&rsquo;re looking for.</h1>
            <figure className="image-wrapper">
              <img src={errImages[Math.floor(Math.random() * errImages.length)]} alt="Oops" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
