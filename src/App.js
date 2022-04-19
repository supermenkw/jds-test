import React from 'react'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react'
import './assets/app.css'
import MainPage from './pages/MainPage';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
