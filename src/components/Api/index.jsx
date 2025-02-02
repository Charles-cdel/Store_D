import React, { useState, useEffect } from 'react';
import instance from '../../API/instance';

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    instance.get('/shoes?limit=8').then((response) => {
      setProdutos(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="w-[80rem] mx-auto px-4 py-8 mt-3 flex flex-wrap justify-center gap-4">
      {produtos.map((produto) => (
        <div className="w-[23%] h-[30rem]  " key={produto.id}>
          <div className=" overflow-hidden bg-[#FFFFFF] p-4 rounded-lg shadow-lg h-[20rem]">
            <div className="w-[6rem] h-[2rem]  rounded-[10px] flex items-center justify-center gap-1 bg-[#E7FF86] ml-4 mt-2">
              <h5 className="font-bold text-sm tracking-widest text-[#474747]">
                {' '}
                30% OFF{' '}
              </h5>
            </div>
            <img
              className="self-center object-contain"
              src={produto.imagem_url}
              alt={produto.nome}
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <p className="text-xs text-[#8F8F8F]">Tênis</p>
            <h1 className="text-left text-[1.5rem] mt-3">{produto.nome}</h1>
            <div className="flex gap-2">
              <p className="line-through  text-[#8F8F8F]">
                $ {produto.preco_desconto},00
              </p>
              <p className="font-bold ">${produto.preco_original},00</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Produtos;
