function ProductCard() {
  return (
    <div className="flex justify-center items-end h-[25rem] w-[100%] border-solid border-2 border-sky-500 ">
<div>
      <h3 className="font-bold">Coleções em Destaque</h3>

      <div className="flex f justify-between items-center w-[120rem] h-[20rem] border-solid border-2 border-red-500">

          <div className="w-[30rem] h-[15rem]  border-solid border-2 border-sky-500  ">
            <div className="w-[6rem] h-[3rem]  rounded-[10px] flex items-center justify-center border-solid border-2 border-sky-500 gap-1 bg-[#E7FF86] ml-4 mt-2">
            <h5 className="font-bold text-xl"> 30% OFF </h5>
           
            </div>
            <div className="h-[4.8rem] w-[9.7rem] border-2 border-sky-500 mx-1 mt-3 ml-4">
              <h3 className="font-bold">Novo drop Supreme</h3>
            </div>
          </div>
          <div className="w-[30rem] h-[15rem]  border-solid border-2 border-sky-500 mx-1"></div>
          <div className="w-[30rem] h-[15rem]  border-solid border-2 border-sky-500 mx-1"></div>



      </div>

</div>

    </div>
  );
}

export default ProductCard;
