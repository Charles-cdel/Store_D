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
    <div className="">
      {produtos.map(produto=>(
        <div className="" key={produto.id}>
           <li > {produto.nome}</li>
           <li>{produto.preco_original}</li>
           <div className="">
           <img src={produto.imagem_url} alt="" />
           </div>
           
        </div>
        
      ))}
    </div>
  )}
export default Produtos