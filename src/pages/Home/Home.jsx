import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import hero from 'assets/hero.jpg';
import { useDispatch } from 'react-redux';
import { setActivePage } from 'redux/cars-slice';

const Home = () => {
   const TEL_NUMBER = process.env.REACT_APP_TEL;

 
   const dispatch = useDispatch();

  useEffect(() => {

    dispatch(setActivePage('home'));

  }, [dispatch]);

  return (
    <>
      <section className={css.section}>
            <img
              src={hero}
              alt="hero"
              className={css.heroImage}
              id="image1"
            />
      </section>
      <div className={css.info} >
        <h1>Rental Service</h1>
        <h2>The best car rental service in the world </h2>
        <p className={css.text} >
          Discover freedom on four wheels with DriveEasy Rental Your journey,
          your way – start your adventure today!
        </p>
        <div className={css.buttons}>
          <button
            type="button"
            className={css.rentalCarBtn}
            onClick={() => window.open(`tel:+${TEL_NUMBER}`)}
          >
            Rental car
          </button>
          <NavLink to="/catalog" className={css.toCatalogLink}>
            <button type="button" className={css.toCatalogBtn}>
              Catalog
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
