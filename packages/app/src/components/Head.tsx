import React from 'react';

export default function Head() {
  return (
    <>
      <title>Mernt Example</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="This is the description" />
      <link rel="icon" sizes="16x16" href="/favicon.ico" />
      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      /> */}
      {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
      <link rel="manifest" href="/manifest.json" />
      {/* <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" /> */}
    </>
  );
}
