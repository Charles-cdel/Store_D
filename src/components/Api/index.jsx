import React, { useState, useEffect } from 'react';
import instance from '../../API/instance';

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    instance.get('/shoes?limit=8')
      .then((response) => {
        setProdutos(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="w-[70rem] h- flex flex-wrap justify-center border-solid border-2 border-orange-500 gap-4">
      {produtos.map((produto) => (
        <div className="w-[23%] h-[27rem] border-solid border-2 border-red-700" key={produto.id}>
          <div className="bg-white w-full h-[13.8rem]">
            <img className='self-center w-full h-full object-contain' src={produto.imagem_url} alt={produto.nome} />
          </div>
          <div className="flex flex-col w-full border-solid border-2 border-blue-500 p-2">
            <p className='text-xs text-[#8F8F8F]'>Tênis</p>
            <h1 className='text-sm'>{produto.nome}</h1>
            <div className="flex justify-between">
              <p className='line-through text-[#8F8F8F]'>
                $ {produto.preco_desconto},00
              </p>
              <p className='font-bold'>
                $ {produto.preco_original},00
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Produtos;