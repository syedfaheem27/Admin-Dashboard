import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: var(--color-pink-500);
  padding: 0.6rem 1.8rem;
  border-radius: 0.35rem;
  color: var(--color-pink-50);
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--color-pink-400);
  }
`;
const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
export default Button;
