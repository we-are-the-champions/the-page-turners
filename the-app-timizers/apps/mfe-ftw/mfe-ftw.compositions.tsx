import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MfeFtwApp } from './app';

export const MfeFtwBasic = () => {
  return (
    <MemoryRouter>
      <MfeFtwApp />
    </MemoryRouter>
  );
};
