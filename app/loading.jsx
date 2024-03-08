'use client';

// libs
import React from 'react';

// Components
import ClipLoader from 'react-spinners/ClipLoader';

// Utils
const override = {
  display: 'block',
  margin: '100px auto',
};

const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default LoadingPage;
