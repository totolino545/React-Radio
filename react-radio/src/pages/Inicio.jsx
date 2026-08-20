import React, { useState, useEffect } from 'react';
import Hero from '../components/layouts/Hero';
import TagsListContainer from '../components/layouts/tags/TagsListContainer'
import CountriesListContainer from '../components/layouts/countries/CountriesListContainer'
import Stations from '../components/layouts/Stations'
import Visualizer from '../components/layouts/Visualizer'
import Playing from '../components/layouts/Playing'

const Inicio = () => {
  return (
    <>
      <main className="pt-20 px-container-padding-mobile max-w-7xl mx-auto">
        <Hero />
        <TagsListContainer />
        <CountriesListContainer />
        <Stations />
        {/* <Visualizer /> */}
        <Playing />
      </main>
    </>
  )
}

export default Inicio