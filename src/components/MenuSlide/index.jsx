import WhiteShoe from '../../assets/WhiteShoe.png';
import WhiteShoeP from '../../assets/WhiteShoeP.png';
function MenuSlide() {
  return (
    <div className="w-[80%] mx-auto h-[60rem] flex border-solid border-2 border-red-600">
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
      <div className=""></div>
    </div>
  );
}
export default MenuSlide;
