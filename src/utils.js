import {Routes, STAR_LIST} from "./const";

export const getRatingCount = (rating) => (
  100 / STAR_LIST.length * rating
);

export const getOfferPath = (id) => Routes.OFFER.replace(/id/, id);


