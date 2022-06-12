import * as React from "react";
import Button from "@mui/material/Button";
const MyButton = ({ children }) => {
  return (
    <Button
      size="medium"
      style={{
        borderRadius: "8px",
        backgroundColor: "#A89060",
      }}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default MyButton;
