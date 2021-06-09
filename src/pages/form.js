import styled from 'styled-components';
import '../App';

export default function Form() {
  return (
    <>
      <H1>Add a location</H1>
      <FormWrapper></FormWrapper>
    </>
  );
}

const FormWrapper = styled.form``;

const H1 = styled.h1`
  font-size: 5rem;
  margin-top: 20rem;
  color: hotpink;
`;
