import {
    StyledHeader2,
    StyledHeader3,
    StyledBoxBackground,
    StyledWrapper,
    StyledInputText,
    StyledButton,
    StyledLink,
  } from "./Authentication.style";
  import { Link } from "react-router-dom";
  
  export const Registration = () => {
    return (
      <>
        <StyledWrapper>
          <StyledBoxBackground>
            <StyledHeader2>Zarejestruj się</StyledHeader2>
            <StyledHeader3>Nazwa:</StyledHeader3>
            <div>
              <StyledInputText
                name="name"
                type="text"
                placeholder="Podaj nazwę"
                maxLength="30"
              />
            </div>
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
            <StyledButton>Zarejestruj się</StyledButton>
            <StyledLink>
              <Link to="/login">Masz już konto? Zaloguj się</Link>
            </StyledLink>
          </StyledBoxBackground>
        </StyledWrapper>
      </>
    );
  };
  