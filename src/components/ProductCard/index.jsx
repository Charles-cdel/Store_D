import camisaSW from '../../assets/camisaSW.png';
import tenisMLD from '../../assets/tenisMLD.png';
import foneHD from '../../assets/foneHD.png';
function ProductCard() {
  return (
    
     <div className="flex justify-center h-[25rem] w-[100%] ">
      <div>
        <h3 className="font-bold">Coleções em Destaque</h3>

        <div className="flex overflow-hidden justify-between items-center w-[120rem] h-[20rem]">
          <div className="w-[26rem] h-[15.7rem] rounded-md bg-[#D8E3F2]">
            <div className="w-[6rem] h-[2rem]  rounded-[10px] flex items-center justify-center gap-1 bg-[#E7FF86] ml-4 mt-2">
              <h5 className="font-bold text-sm tracking-widest text-[#474747]">
                {' '}
                30% OFF{' '}
              </h5>
            </div>
            <div className=" h-[5rem] w-[10.9rem] mx-1 mt-3 ml-4">
              <h1 className="font-bold leading-9 text-3xl text-[#1f1f1f] tracking-wide">
                Novo drop Supreme
              </h1>
            </div>

            <div className="flex justify-center w-[10rem] h-[3rem] rounded-md bg-[#F5F5F5] mt-4 ml-5">
              <button className="text-[#C92071] leading-6 text-base  font-bold ">
                
                Comprar
              </button>
            </div>
            <div className="float-right -mt-[12rem] flex h-[15.7rem] w-[15.2rem]">
              <div className="">
                <img src={camisaSW} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[26rem] h-[15.7rem] rounded-md bg-[#D8E3F2] mx-1">
            <div className="w-[6rem] h-[2rem]  rounded-[10px] flex items-center justify-center gap-1 bg-[#E7FF86] ml-4 mt-2">
              <h5 className="font-bold text-sm tracking-widest text-[#474747]">
                {' '}
                30% OFF{' '}
              </h5>
            </div>
            <div className=" h-[5rem] w-[10.9rem] mx-1 mt-3 ml-4">
              <h1 className="font-bold leading-9 text-3xl text-[#1f1f1f] tracking-wide">
                Coleção Adidas
              </h1>
            </div>
            <div className="flex justify-center w-[10rem] h-[3rem] rounded-md bg-[#F5F5F5] mt-4 ml-5">
              <button className="text-[#C92071] leading-6 text-base  font-bold ">
                {' '}
                Comprar{' '}
              </button>
            </div>
            <div className="float-right -mt-[12.5rem] flex h-[15.7rem] w-[15.2rem]">
              <div className="">
                <img src={tenisMLD} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[26rem] h-[15.7rem] rounded-md bg-[#D8E3F2] mx-1">
            <div className="w-[6rem] h-[2rem]  rounded-[10px] flex items-center justify-center gap-1 bg-[#E7FF86] ml-4 mt-2">
              <h5 className="font-bold text-sm tracking-widest text-[#474747]">
                {' '}
                30% OFF{' '}
              </h5>
            </div>
            <div className=" h-[5rem] w-[11.5rem] mx-1 mt-3 ml-4">
              <h1 className="font-bold leading-9 text-3xl text-[#1f1f1f] tracking-wide">
                Novo <br /> Beats Bass
              </h1>
            </div>
            <div className="flex justify-center w-[10rem] h-[3rem] rounded-md bg-[#F5F5F5] mt-4 ml-5">
              <button className="text-[#C92071] leading-6 text-base  font-bold ">
                {' '}
                Comprar{' '}
              </button>
            </div>
            <div className="float-right -mt-[13.5rem] flex h-[15.7rem] w-[15.2rem]">
              <div className="">
                <img src={foneHD} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    </div>
    
    
  );
}

export default ProductCard;
