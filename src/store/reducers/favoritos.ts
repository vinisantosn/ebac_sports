import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: [] as Produto[]
}

const favoritosSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExistente = state.itens.find((p) => p.id === produto.id)
      if (produtoExistente) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})
export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
// function favoritar(produto: Produto) {
//     if (favoritos.find((p) => p.id === produto.id)) {
//       const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//       setFavoritos(favoritosSemProduto)
//     } else {
//       setFavoritos([...favoritos, produto])
//     }
//   }
