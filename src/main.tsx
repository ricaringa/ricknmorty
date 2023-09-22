import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './views/Home/index.tsx'
import { theme } from './theme.ts'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favorites from './components/Favorites/index.tsx'
import CharacterList from './components/CharacterList/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Home />}>
      <Route path='/' element={<CharacterList />} />
      <Route path={'/favorites'} element={<Favorites />} />
      </Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
