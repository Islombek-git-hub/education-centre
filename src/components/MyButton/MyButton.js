import * as React from "react";
import Button from "@mui/material/Button";
const MyButton = ({ children, ...props }) => {
  return (
    <Button {...props} size="medium">
      {children}
    </Button>
  );
};

export default MyButton;
