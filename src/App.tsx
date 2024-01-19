import { useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { store } from './store'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { funcaoAdicionar } from './store/reducers/carrinho'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos
          produtos={Produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={funcaoAdicionar}
        />
      </div>
    </Provider>
  )
}

export default App
