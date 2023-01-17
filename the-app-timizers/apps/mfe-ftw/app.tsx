import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BestPageForever } from '@we-are-the-champions/the-page-turners.pages.best-page-forever';

export function MfeFtwApp() {
  return (
    <Routes>
      <Route path="/" element={<BestPageForever />}></Route>
    </Routes>
  );
}
