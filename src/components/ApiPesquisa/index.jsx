import React, { useState, useEffect } from 'react';
import instance from '../../API/instance';

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    instance.get('/shoes?limit=12').then((response) => {
      setProdutos(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    
    <div className="w-[90%] ml-20 flex flex-wrap justify-center ">
      
    <div className="w-[19.25rem] ml-5 h-[51rem] flex flex-col bg-[#FFFFFF] p-4 rounded-lg shadow-2xl ">
      <div className="w-[7.5rem] h-[2.5rem]">
        <p className="font-bold">Filtrar por</p>
        <div className="w-[15rem]  border-b border-[#cccccc] p-4 rounded-sm"></div>
      </div>
      <div className="w-[8.5rem]  h-[14rem] gap-2 ">
        <p className="font-bold text-lg">Marca</p>

        <div className="">
          <input
            type="checkbox"
            name="Adidas"
            id=""
            className="w-[1.4rem] h-[1.4rem] appearance-none checked:bg-pink-500 border border-pink-400"
          />
          <label className="text-lg ml-2" for="">
            Adidas
          </label>
        </div>

        <div className="">
          <input
            className="w-[1.4rem] h-[1.4rem]"
            type="checkbox"
            name="Calenciaga"
            id="Calenciaga"
          />
          <label className="text-lg ml-2" for="">
            Calenciaga
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            name="K-Swiss"
            id=""
            className="w-[1.4rem] h-[1.4rem] appearance-none checked:bg-pink-500 border border-pink-400"
          />
          <label className="text-lg ml-2" for="">
            K-Swiss
          </label>
        </div>

        <div className="">
          <input
            className="w-[1.4rem] h-[1.4rem]"
            type="checkbox"
            name="Nike"
            id="Nike"
          />
          <label className="text-lg ml-2" for="">
            Nike
          </label>
        </div>

        <div className="">
          <input
            className="w-[1.4rem] h-[1.4rem]"
            type="checkbox"
            name="Puma"
            id="Puma"
          />
          <label className="text-lg ml-2" for="">
            Puma
          </label>
        </div>
      </div>
      <div className="w-[10rem] h-[12rem] gap-2 mt-3 ">
        <p className="font-bold text-lg">Categoria</p>

        <div className="">
          <input
            type="checkbox"
            name="Adidas"
            id=""
            className="w-[1.4rem] h-[1.4rem] appearance-none checked:bg-pink-500 border border-pink-400"
          />
          <label className="text-lg ml-2" for="">
            Esporte e lazer
          </label>
        </div>

        <div className="">
          <input
            className="w-[1.4rem] h-[1.4rem]"
            type="checkbox"
            name="Casual"
            id="Casual"
          />
          <label className="text-lg ml-2" for="">
            Casual
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            name="K-Swiss"
            id=""
            className="w-[1.4rem] h-[1.4rem]"
          />
          <label className="text-lg ml-2" for="">
            Ultilitário
          </label>
        </div>

        <div className="">
          <input
            className="w-[1.4rem] h-[1.4rem]"
            type="checkbox"
            name="Nike"
            id="Nike"
          />
          <label className="text-lg ml-2" for="">
            Corrida
          </label>
        </div>
      </div>
      <div className="w-[10rem] h-[9rem] gap-2 mt-3 ">
        <p className="font-bold text-lg">Genêro</p>

        <div className="">
          <input
            type="checkbox"
            name="Masculino"
            id="Masculino"
            className="w-[1.4rem] h-[1.4rem] appearance-none checked:bg-pink-500 border border-pink-400"
          />
          <label className="text-lg ml-2" for="">
            Masculino
          </label>
        </div>

        <div className="">
          <input
            className="w-[1.4rem] h-[1.4rem] appearance-none checked:bg-pink-500 border border-pink-400"
            type="checkbox"
            name="Feminino"
            id="Feminino"
          />
          <label className="text-lg ml-2" for="">
            Feminino
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            name="K-Swiss"
            id=""
            className="w-[1.4rem] h-[1.4rem]"
          />
          <label className="text-lg ml-2" for="">
            Unisex
          </label>
        </div>
       </div> 
       <div className="w-[10rem] h-[7rem] gap-2 mt-3 ">
        <p className="font-bold text-lg">Genêro</p>

        <div className="">
          <input
            type="checkbox"
            name="Masculino"
            id="Masculino"
            className="w-[1.4rem] h-[1.4rem] appearance-none rounded-full checked:bg-pink-500 border border-pink-400"
          />
          <label className="text-lg ml-2" for="">
            Novo
          </label>
        </div>

        <div className="">
          <input
            className="w-[1.4rem] h-[1.4rem] appearance-none rounded-full checked:bg-pink-500 border border-pink-400"
            type="checkbox"
            name="Usado"
            id="Usado"
          />
           <label className="text-lg ml-2" for="">
            Usado
           </label>
         </div>
        
       </div>
     </div>
  

       <div className="w-[65rem] ml-5 flex flex-wrap gap-4 ">
      {produtos.map((produto) => (
        <div className=" w-[23%] h-[30rem]  " key={produto.id}>
          <div className=" overflow-hidden bg-[#FFFFFF] p-4 rounded-xl shadow-2xl h-[20rem]">
            <div className="w-[6rem] h-[2rem]  rounded-[10px] flex items-center justify-center gap-1 bg-[#E7FF86] ml-4 mt-2">
              <h5 className="font-bold text-sm tracking-widest text-[#474747]">
                {' '}
                30% OFF{' '}
              </h5>
            </div>
            <img
              className="mt-6"
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
    </div>
    
  );
}

export default Produtos;