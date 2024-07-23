import React, { useState, useEffect } from 'react';
import instance from '../../API/instance';

function Produtos (){
  const [produtos, setProdutos] = useState([]);
  

  
  useEffect(() => {
    instance.get('/shoes?limit=1')
        .then((response) => {
            setProdutos(response.data)
            console.log(response.data)
        })
}, [])
  
    
  
  return(
     <div className=" w-[90rem] flex boder-solid border-2 border-orange-500">
      <div className="justify-items-center flex-wrap boder-solid border-2 border-black gap[0.75rem]">
      {produtos.map(produto=>(
        <div className="" key={produto.id}>
           
           <div className="w-[6rem] h-[2rem]  rounded-[10px] flex items-center justify-center gap-1 bg-[#E7FF86] ml-4 mt-2">
              <h5 className="font-bold text-sm tracking-widest text-[#474747]">
                {' '}
                30% OFF{' '}
              </h5>
            </div>
            <div className="w-[18.25rem] flex h-[20.063rem] border-solid border-2 shadow-2xl border-yellow-500">
            <div className="w-[15.5rem] flex content-center items-center h-[8.4rem] border-solid border-2 border-red-600">
             <img className='w-[10rem] ml-5 h-[8rem]' src={produto.imagem_url} alt="" />
             
             </div>
               </div>
           
             
            
            
           <p > {produto.nome}</p>
           <p>{produto.preco_original}</p>

          <div className="w-[6rem] h-[2rem]  rounded-[10px] flex items-center justify-center gap-1 bg-[#E7FF86] ml-4 mt-2">
              <h5 className="font-bold text-sm tracking-widest text-[#474747]">
                {' '}
                30% OFF{' '}
              </h5>
            </div>
           <div className="w-[18.25rem]flex h-[20.063rem] border-solid border-2 shadow-2xl border-yellow-500">
            <div className="w-[15.5rem] flex content-center items-center h-[8.4rem] border-solid border-2 border-red-600">
             <img className='w-[10rem] ml-5 h-[8rem]' src={produto.imagem_url} alt="" />
             
             </div>
               </div>
           
             
            
            
           <p > {produto.nome}</p>
           <p>{produto.preco_original}</p>
           <div className="w-[18.25rem] h-[20.063rem] border-solid border-2 shadow-2xl border-yellow-500">
            <div className="w-[15.5rem] flex content-center items-center h-[8.4rem] border-solid border-2 border-red-600">
             <img className='w-[10rem] ml-5 h-[8rem]' src={produto.imagem_url} alt="" />
             
             </div>
               </div>
           
             
            
            
           <p > {produto.nome}</p>
           <p>{produto.preco_original}</p>
           <div className="w-[18.25rem] h-[20.063rem] border-solid border-2 shadow-2xl border-yellow-500">
            <div className="w-[15.5rem] flex content-center items-center h-[8.4rem] border-solid border-2 border-red-600">
             <img className='w-[10rem] ml-5 h-[8rem]' src={produto.imagem_url} alt="" />
             
             </div>
               </div>
           
             
            
            
           <p > {produto.nome}</p>
           <p>{produto.preco_original}</p>
           <div className="w-[18.25rem] h-[20.063rem] border-solid border-2 shadow-2xl border-yellow-500">
            <div className="w-[15.5rem] flex content-center items-center h-[8.4rem] border-solid border-2 border-red-600">
             <img className='w-[10rem] ml-5 h-[8rem]' src={produto.imagem_url} alt="" />
             
             </div>
               </div>
           
             
            
            
           <p > {produto.nome}</p>
           <p>{produto.preco_original}</p>
           <div className="w-[18.25rem] h-[20.063rem] border-solid border-2 shadow-2xl border-yellow-500">
            <div className="w-[15.5rem] flex content-center items-center h-[8.4rem] border-solid border-2 border-red-600">
             <img className='w-[10rem] ml-5 h-[8rem]' src={produto.imagem_url} alt="" />
             
             </div>
               </div>
           
             
            
            
           <p > {produto.nome}</p>
           <p>{produto.preco_original}</p>
           <div className="w-[18.25rem] h-[20.063rem] border-solid border-2 shadow-2xl border-yellow-500">
            <div className="w-[15.5rem] flex content-center items-center h-[8.4rem] border-solid border-2 border-red-600">
             <img className='w-[10rem] ml-5 h-[8rem]' src={produto.imagem_url} alt="" />
             
             </div>
               </div>
           
             
            
            
           <p > {produto.nome}</p>
           <p>{produto.preco_original}</p>
           <div className="w-[18.25rem] h-[20.063rem] border-solid border-2 shadow-2xl border-yellow-500">
            <div className="w-[15.5rem] flex content-center items-center h-[8.4rem] border-solid border-2 border-red-600">
             <img className='w-[10rem] ml-5 h-[8rem]' src={produto.imagem_url} alt="" />
             
             </div>
               </div>
           
             
            
            
           <p > {produto.nome}</p>
           <p>{produto.preco_original}</p>
        </div>
        
      ))}
    </div>
   
    </div>
   )}
    

   
export default Produtos