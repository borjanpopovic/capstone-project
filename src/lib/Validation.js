const validateName = (name) => name.length >= 2;
const validateAddress = (address) => address.length >= 5;

const validateLocation = (location) =>
  validateName(location.name) && validateAddress(location.address);
export default validateLocation;
