import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BestPageForever } from '@we-are-the-champions/the-page-turners.pages.best-page-forever'; // this component is maintained by the-page-turners team
import { Header } from '@we-are-the-champions/the-header-herders.header'; // this component is maintained by the-header-herders team

export function ChampionsApp() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BestPageForever />}></Route>
      </Routes>
    </>
  );
}
