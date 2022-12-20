import { Button, ButtonGroup, ThemeProvider } from "@material-ui/core";
import * as React from "react";
import colorTheme from "../styles/colorTheme";

export interface IAppProps {
  deposit: () => void;
  withdraw: () => void;
  update: () => void;
}

export default function App({ deposit, withdraw, update }: IAppProps) {
  return (
    <div>
      <ThemeProvider theme={colorTheme}>
        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="contained primary button group"
          color="primary"
        >
          <Button style={{ color: "green" }} onClick={deposit}>
            <text style={{ fontWeight: "bolder" }}>Deposit</text>
          </Button>

          <Button style={{ color: "red" }} onClick={withdraw}>
            <text style={{ fontWeight: "bolder" }}>Withdraw</text>
          </Button>

          <Button style={{ color: "blue" }} onClick={update}>
            <text style={{ fontWeight: "bolder" }}>Update</text>
          </Button>
        </ButtonGroup>
      </ThemeProvider>
    </div>
  );
}
