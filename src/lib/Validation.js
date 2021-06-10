const validateName = (name) => name.length >= 2;
const validateAdress = (adress) => adress.length >= 5;

export default function validateLocation(location) {
  return validateName(location.name) && validateAdress(location.adress);
}
