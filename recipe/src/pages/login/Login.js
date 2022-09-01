import React from "react";
import { useNavigate} from "react-router-dom";
import {
  
  FormContainer,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
  StyledImg,
} from "./LoginStyle";
import mealSvg from "../../assets/meal2.svg";

const Login = ({ setIsAuth, isAuth }) => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAuth(true);
    navigate("/");
  };
  return (
    
      <FormContainer>
        <StyledImg src={mealSvg} alt="meal" />
        <Header>{"Veysel's"} Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    
  );
};

export default Login;