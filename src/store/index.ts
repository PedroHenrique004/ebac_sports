import { configureStore } from '@reduxjs/toolkit'
import reducerDoCarrinho from './reducers/carrinho'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinhoDeCompras: reducerDoCarrinho,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
