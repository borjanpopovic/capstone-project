const validateName = (name) => name.length > 0;

const validateLocation = (location) => validateName(location.name);
export default validateLocation;
