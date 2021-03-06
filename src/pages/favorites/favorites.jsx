import React from 'react';

import PropTypes from 'prop-types';
import {offersPropValid} from '../../components/offer-list/offer-card/offer-card.prop';

import LocationBtn from '../../components/common/location-btn';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';


const getCurrentOffers = (offers, city) => {
  return offers.filter((offer)=> offer.city.name === city);
};

const Favorites = ({auth, userName, offers}) => {
  const cityList = [...new Set(offers.map((offer) => offer.city.name))];
  return (
    <>
      <div className="page">
        <Header auth={auth} userName={userName} />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  cityList.map((city) => (
                    <li key={city} className="favorites__locations-items">

                      <div className="favorites__locations locations locations--current">
                        <LocationBtn city={city}/>
                      </div>

                      <div className="favorites__places">
                        <OfferList offers={getCurrentOffers(offers, city)} mode="FAVOR"/>
                      </div>

                    </li>
                  ))
                }
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>

  );
};

Favorites.propTypes = {
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropValid).isRequired).isRequired,

};

export default Favorites;
