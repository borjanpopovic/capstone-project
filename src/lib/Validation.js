const validateName = (name) => name.length >= 2;
const validateAdress = (adress) => adress.length >= 5;

const validateLocation = (location) =>
  validateName(location.name) && validateAdress(location.adress);
export default validateLocation;
