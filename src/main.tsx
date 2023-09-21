import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './views/Home/index.tsx'
import { theme } from './theme.ts'
import { Provider } from 'react-redux'
import store from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
