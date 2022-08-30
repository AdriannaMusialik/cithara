import {
  StyledHeader2,
  StyledHeader3,
  StyledBoxBackground,
  StyledWrapper,
  StyledInputText,
  StyledButton,
  StyledLink,
} from "./Login.style";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <StyledWrapper>
        <StyledBoxBackground>
          <StyledHeader2>Zaloguj się</StyledHeader2>
          <StyledHeader3>Email:</StyledHeader3>
          <div>
            <StyledInputText
              name="email"
              type="text"
              placeholder="Podaj email"
              maxLength="30"
            />
          </div>
          <StyledHeader3>Hasło:</StyledHeader3>
          <div>
            <StyledInputText
              name="password"
              type="password"
              placeholder="Podaj hasło"
              maxLength="30"
            />
          </div>
          <StyledLink>
            <Link to="/register">Zarejestruj się</Link>
          </StyledLink>
          <StyledLink>
            <Link to="/forgotpass">Przypomnij hasło</Link>
          </StyledLink>
          <StyledButton>Zaloguj się</StyledButton>
        </StyledBoxBackground>
      </StyledWrapper>
    </>
  );
};
