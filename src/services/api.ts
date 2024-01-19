import { Produto } from '../App'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = api
export default api

// useEffect(() => {
//   fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
//     .then((res) => res.json())
//     .then((res) => setProdutos(res))
// }, [])
