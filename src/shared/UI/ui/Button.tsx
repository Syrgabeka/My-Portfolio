import { Button as MyButton, styled, ButtonProps } from "@mui/material";
import { FC, ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

const Button: FC<CustomButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled(MyButton)(() => ({
  color: "white",
  textTransform: "none",
}));
