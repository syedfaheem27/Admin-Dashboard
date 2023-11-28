import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 10px solid var(--color-gray-400);
  border-top: 10px solid var(--color-gray-200);
  animation: ${rotate} 1.5s infinite linear;
`;

export default Spinner;
