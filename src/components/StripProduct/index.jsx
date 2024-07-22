import tShirt from '../../assets/tShirt.png';
import calças from '../../assets/calças.png';
import bones from '../../assets/bones.png';
import phones from '../../assets/phones.png';
import shoes from '../../assets/shoes.png';
function StripProduct() {
  return (
    <div className="flex items-center  relative justify-center w-[100%] h-[25rem]">
      <div className="w-[120rem] h-[20rem] ml-[7.28rem]">
        <h3 className="font-bold text-center">Coleções em destaque </h3>

        <div className=" flex items-center justify-between mt-9 ml-[37rem]  w-[44.5rem] h-[8.5rem]">
          <div className="w-[6.67rem] justify-center h-[8.4rem]">
            <div className="w-[6.5rem] bg-[#FFFFFF] shadow-md absolute h-[6.5rem] gap-[0.63rem] mt-2 rounded-[9.39rem]">
              <img
                className="w-[4rem] ml-5 h-[4rem] mt-4"
                src={tShirt}
                alt=""
              />
            </div>
            <div className="w-[5rem] ml-3 mt-[7.5rem] leading-3 content-center h-[1.57rem]">
              <p className="text-base font-bold">Camisetas</p>
            </div>
          </div>
          <div className="w-[6.67rem] justify-center h-[8.4rem]">
            <div className=" w-[6.5rem] bg-[#FFFFFF] shadow-md absolute h-[6.5rem] gap-[0.63rem] mt-2 rounded-[9.39rem]">
              <img
                className="w-[3.14rem] ml-7 mt-4 h-[4rem]"
                src={calças}
                alt=""
              />
            </div>
            <div className="w-[3.2rem] ml-7 mt-[7.5rem] leading-3 content-center h-[1.57rem]">
              <p className="text-base font-bold">Calças</p>
            </div>
          </div>

          <div className="w-[6.67rem] justify-center h-[8.4rem]">
            <div className="w-[6.5rem] bg-[#FFFFFF] shadow-md absolute h-[6.5rem] gap-[0.63rem] mt-2 rounded-[9.39rem]">
              <img
                className="w-[3.14rem] ml-7 mt-4 h-[4rem]"
                src={bones}
                alt=""
              />
            </div>
            <div className="w-[3.2rem] ml-7 mt-[7.5rem] leading-3 content-center h-[1.57rem]">
              <p className="text-base font-bold">Bonés</p>
            </div>
          </div>
          <div className="w-[6.67rem] justify-center h-[8.4rem]">
            <div className="w-[6.5rem] shadow-md bg-[#FFFFFF] absolute h-[6.5rem] gap-[0.63rem] mt-2 rounded-[9.39rem]">
              <img
                className="w-[3.14rem] ml-7 mt-4 h-[4rem]"
                src={phones}
                alt=""
              />
            </div>
            <div className="w-[5.9rem] ml-2 mt-[7.5rem] leading-3 content-center h-[1.57rem]">
              <p className="text-base font-bold"> Headphones </p>
            </div>
          </div>
          <div className="w-[6.67rem] justify-center h-[8.4rem]">
            <div className="w-[6.5rem] bg-[#FFFFFF] shadow-md absolute h-[6.5rem] gap-[0.63rem] mt-2 rounded-[9.39rem]">
              <img
                className="w-[3.14rem] ml-7 mt-4 h-[4rem]"
                src={shoes}
                alt=""
              />
            </div>
            <div className="w-[2.5rem] ml-8 mt-[7.5rem] leading-3 content-center h-[1.57rem]">
              <p className="text-base font-bold">Tênis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StripProduct;
