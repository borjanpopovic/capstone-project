import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import '../App';
import LocationForm from '../Components/LocationForm';

Form.propTypes = {
  onAddLocations: PropTypes.func,
};

export default function Form({ onAddLocations }) {
  return (
    <>
      <H1>Add a location</H1>
      <FormWrapper>
        <LocationForm onAddLocations={onAddLocations} />
      </FormWrapper>
    </>
  );
}

const FormWrapper = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  width: 80vw; ;
`;

const H1 = styled.h1`
  color: var(--border-dark);
  font-size: 1.25rem;
  margin-top: 4rem;
  padding-top: 1rem;
  text-align: center;
`;
