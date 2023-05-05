import React, { FunctionComponent } from 'react';
import { Layout } from '@/src/components/Layout';
import { Image } from '@chakra-ui/react';

const NotFound: FunctionComponent = () => {
  const errImages = ['/images/error/err1.jpg'];

  return (
    <Layout>
      <div className="not-found-container">
        <h1 id="404">Oops! We couldn&rsquo;t find the page you&rsquo;re looking for.</h1>
        <figure className="image-wrapper">
          <Image src={errImages[Math.floor(Math.random() * errImages.length)]} alt="Oops" />
        </figure>
      </div>
    </Layout>
  );
};

export default NotFound;
