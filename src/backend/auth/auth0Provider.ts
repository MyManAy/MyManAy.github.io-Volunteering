import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { DividerClassKey } from "@material-ui/core";

export interface IAppProps {
  children?: React.ReactNode;
}

const Auth0ProviderWithHistory = ({ children }: IAppProps) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();

  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };
};

export default Auth0ProviderWithHistory;
