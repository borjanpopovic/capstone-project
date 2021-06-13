import styled from 'styled-components';
import '../App';
import LocationForm from '../Components/LocationForm';

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
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 80vw; ;
`;

const H1 = styled.h1`
  font-size: 1.25rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
  color: var(--border);
  text-align: center;
  padding-top: 2rem;
`;
