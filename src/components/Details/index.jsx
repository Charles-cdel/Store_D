import { IoIosArrowDown } from "react-icons/io";
function Details(){
  return(
    <div className="w-[22rem] flex float-right mt-16 mr-8 p-4 items-center h-[5rem] border-solid border-2 border-gray-600">
    <p className="font-bold text-xl ">Ordenar por: </p>
    <p className="">mais relevantes</p>
    <IoIosArrowDown/>
    </div>
  )
}
export default Details