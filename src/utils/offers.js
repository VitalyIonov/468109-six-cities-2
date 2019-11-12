export const getOffersByCity = (city, offers) => offers.filter((offer) => offer.city === city);

export const getCitiesList = (offers) => {
  const MAX_CITIES = 6;
  const cities = [...new Set(offers.map((offer) => offer.city))];

  if (cities.length > MAX_CITIES) {
    cities.length = MAX_CITIES;
  }

  return cities;
};
