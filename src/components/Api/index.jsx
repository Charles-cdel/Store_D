import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Produtos (){
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://api-store-do1w.onrender.com/shoes')
    .then(response => {
      setProdutos(response.data);
      setLoading(false);
    })
    .catch(error =>{
      console.error(error);
      setLoading(false)
    });
  }, []);
  if(loading){
    return <div className=""> Carregando </div>
    
  }
  return(
    <div className="">
      {produtos.map(produtos=>(
        <li key={produtos.id}> {produtos.name}</li>
      ))}
    </div>
  )}
export default Produtos