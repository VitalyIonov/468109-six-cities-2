export const getOffersByCity = (city, offers) => offers.filter((offer) => offer.city.name === city.name);

export const getCitiesList = (offers) => {
  const MAX_CITIES = 6;
  const stringifiedCities = [...new Set(offers.map((offer) => JSON.stringify(offer.city)))];
  const cities = stringifiedCities.map((city) => JSON.parse(city));

  if (cities.length > MAX_CITIES) {
    cities.length = MAX_CITIES;
  }

  return cities;
};

export const formatToClient = (offers) => offers.map((offer) => Object.assign({}, offer, {
  previewImage: offer.preview_image || offer.previewImage
}));
