import { Link } from "react-router-dom";

function MenuTop (){
  return(
    <div className="flex gap-2 mx-56 m-8">
      <Link className="font-bold text-base">Home /</Link>
      <Link className="text-base">Produtos /</Link>
      <Link className="text-base">Tênis /</Link>
      <Link className="text-base">Nike /</Link>
      <div className="w-[21rem] h-[1.4rem]">
        < p className="text-base">Tênis Nike Revolution 6 Next Nature Masculino</p>
      </div>

      
      
    </div>
  )
}
export default MenuTop;