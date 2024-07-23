import { MdArrowRightAlt } from 'react-icons/md';

function ProductBar() {
  return (
    <div className="flex items-center w-[110rem] ml-24 h-[2.4rem] ">
      <div className="w-[13.15rem] ">
        <p className="font-bold">Produtos em alta</p>
      </div>
      <div className="items-center wrap w-[7.65rem] h-[2.13rem]">
        <div className="w-[7rem] mt-1 ml-[89rem] h-[2.15rem]">
          <p className="text-[#C92071] text-base flex"> Ver todos</p>
        </div>

        <div className="w-[1.5rem] -mt-8 ml-[94rem] h-[1.5rem] text-[#C92071]">
          <MdArrowRightAlt />
        </div>
      </div>
    </div>
  );
}
export default ProductBar;
