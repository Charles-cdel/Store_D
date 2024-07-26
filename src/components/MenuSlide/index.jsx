import WhiteShoe from '../../assets/WhiteShoe.png';
import WhiteShoeP from '../../assets/WhiteShoeP.png';
import Stars from '../../assets/Stars.png'
import Avaliação from '../../assets/Avaliação.png'

function MenuSlide() {
  return (
    <div className="w-[80%] mx-auto h-[60rem] flex">
      <div className="w-[43.85rem] h-[35.7rem]  bg-[#E2E3FF] rounded-md shadow-lg">
        <div className="w-[31.15rem] mx-auto mt-36 h-[15.5rem]">
          <img src={WhiteShoe} alt="" />
        </div>
        <div className="w-[43.85rem] flex h-[10rem] gap-5 items-center mt-48">
          <div className="w-[7.37rem] h-[6rem] bg-slate-200 rounded-lg shadow-xl">
            <div className="w-[5.24rem] mx-auto mt-7 h-[2.57rem]">
              <img src={WhiteShoeP} alt="" />
            </div>
          </div>
          <div className="w-[7.37rem] h-[6rem] bg-[#FFE8BC] rounded-lg shadow-xl">
            <div className="w-[5.24rem] mx-auto mt-7 h-[2.57rem]">
              <img src={WhiteShoeP} alt="" />
            </div>
          </div>
           <div className="w-[7.37rem] h-[6rem] bg-[#FFC0BC] rounded-lg shadow-xl">
           <div className="w-[5.24rem] mx-auto mt-7 h-[2.57rem]">
              <img src={WhiteShoeP} alt="" />
            </div>
            
           </div>
           <div className="w-[7.37rem] h-[6rem] bg-[#DEC699] rounded-lg shadow-xl">
           <div className="w-[5.24rem] mx-auto mt-7 h-[2.57rem]">
              <img src={WhiteShoeP} alt="" />
            </div>
            
           </div>
           <div className="w-[7.37rem] h-[6rem] bg-[#E8DFCF] rounded-lg shadow-xl">
           <div className="w-[5.24rem] mx-auto mt-7 h-[2.57rem]">
              <img src={WhiteShoeP} alt="" />
            </div>
           </div>
        </div>
        

      </div>
      <div className="w-[44rem] flex h-[35rem]">
      <div className=" flex w-[42rem] ml-5 h-[32rem]">
        <div className="w-[27.5rem]  h-[4.5rem] ml-5">
          <h1 className='font-bold  text-3xl '>Tênis Nike Revolution 
          6 Next Nature Masculino</h1>
          <p className='text-lg'> Casual | Nike | REF:38416711  </p>

          <div className="w-[5.8rem] flex h-[0.89rem]">
          <img src={Stars} alt="" />
          </div>
          <div className="w-[11.5rem]  h-[1.5rem]">
            <div className="w-[4rem] h-[1.5rem]">
            <img src={Avaliação} alt="" />
            </div>
            <p className='text-[#8F8F8F] text-sm'>(90 avaliações)</p>

          </div>


        </div>
        
        
      </div>
      
      </div>
      
    </div>
  );
}
export default MenuSlide;
