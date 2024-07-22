import { useEffect, useState } from "react"
import instance from "../../components/Api/ApiData"

export default function Produtos(){
    const [produtos, setProdutos] = useState([])

  useEffect(() => {
    instance.get('/shoes?limit=8')
      .then((response) => {
        setProdutos(response.data)
      })
  },[])

  return (
    <div className="flex flex-wrap w-full h-screen gap-4">
        {produtos.map((produto) => (
          <div className='
            text-black w-[300px] h-[200px] bg-white p-2
              rounded-md overflow-hidden flex items-center
              justify-center flex-col'
            key={produto.id}>
            <h2>{produto.nome}</h2>
            <img className=' h-[80px] ' src={produto.imagem_url} alt={produto.nome} />
            <p>{produto.preco_desconto}</p>
            
          </div>
        ))}
    </div>
  )
        }