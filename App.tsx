import React from 'react';
import { SignIn } from './src/pages/SignIn';
import { Dashboard } from './src/pages/Dashboard';
import { List } from './src/pages/List';
import { CreateWallet } from './src/pages/CreateWallet';

import { ThemeProvider } from "styled-components";
import theme from "./src/theme/colors";

export function App() {

  return (
    <ThemeProvider theme={theme}>
      <List />
    </ThemeProvider>

  )
}

export default App;
