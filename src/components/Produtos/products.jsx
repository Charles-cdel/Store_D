import { useEffect, useState } from "react"
import instance from "../../components/Api/index"

export default function Produtos(){
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    instance.get('/shoes?limit=8')
      .then((response) => {
        setProdutos(response.data)
      })
  }, [])

  return (
    <div className="flex flex-wrap w-full h-screen gap-4">
      {produtos.map(({ produto }) => (
        <div className=''
        >
          
         
        </div>
      ))}
    </div>
  )
}
