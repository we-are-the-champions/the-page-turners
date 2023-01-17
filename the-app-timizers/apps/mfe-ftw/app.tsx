import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BestPageForever } from '@we-are-the-champions/the-page-turners.pages.best-page-forever';
import { Header } from '@we-are-the-champions/the-header-herders.header';

export function MfeFtwApp() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BestPageForever />}></Route>
      </Routes>
    </>
  );
}
