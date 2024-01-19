import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type EstadoCarrinho = {
  itens: Produto[]
}

const initialState: EstadoCarrinho = {
  itens: []
}

const carrinhoDeCompraSlice = createSlice({
  name: 'carrinhoDeCompras',
  initialState,
  reducers: {
    funcaoAdicionar: (estado, action: PayloadAction<Produto>) => {
      const produtoAdicionado = action.payload

      if (estado.itens.find((produto) => produto.id === produtoAdicionado.id)) {
        alert('Este item já está no carrinho')
      } else {
        estado.itens.push(produtoAdicionado)
      }
    }
  }
})

export const { funcaoAdicionar } = carrinhoDeCompraSlice.actions
export default carrinhoDeCompraSlice.reducer
