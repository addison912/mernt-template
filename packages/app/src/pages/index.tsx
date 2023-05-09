import React from 'react';
import { Layout } from '@components/Layout';
import Image from 'next/image';
import logo from '@public/images/logo.svg';

export default function Home() {
  return (
    <Layout>
      <div className="grid h-screen relative">
        <Image
          src={logo}
          alt=""
          width={400}
          height={400}
          priority={true}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
        />
        <center>Hello World</center>
      </div>
    </Layout>
  );
}
