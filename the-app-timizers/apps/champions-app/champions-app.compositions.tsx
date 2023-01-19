import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ChampionsApp } from './app';

export const ChampionsAppBasic = () => {
  return (
    <MemoryRouter>
      <ChampionsApp />
    </MemoryRouter>
  );
};
