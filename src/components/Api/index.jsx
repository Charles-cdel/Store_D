import React, { useState, useEffect } from 'react';
import instance from '../../API/instance';

function Produtos (){
  const [produtos, setProdutos] = useState([]);
  

  
  useEffect(() => {
    instance.get('/shoes?limit=8')
        .then((response) => {
            setProdutos(response.data)
            console.log(response.data)
        })
}, [])
  
    
  
  return(
     <div className=" flex flex-wrap justify-center boder-solid border-2 border-orange-500">
      {produtos.map ((produto) => (
        <div className="flex w-[15rem] h-[30rem] border-solid border-2 border-red-700 " key={produto.id}>

          <div className="bg-white w-full h-[13.8rem] ">
          <img className='w-[15rem] self-center' src={produto.imagem_url} alt={produto.nome} />
          </div>
          <div className="">

           <p>tenis</p>
           <h1>{produto.nome}</h1>
           <div className="flex">
            <p>
              R$ {produto.preco_original},00
            </p>
            <p>R${produto.preco_desconto},00</p>
           </div>
          </div>

        </div>
      ) )}
   
    </div>
   )}
    

   
export default Produtos