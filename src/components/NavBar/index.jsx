import { Link } from "react-router-dom";

function NavBar() {
    return (  
        <div className="flex mx-[10%] justify-between w-[40rem] mt-10">
            <div><Link className="hover:text-pink-600 hover:border-b-2 border-pink-600">Home</Link></div>
            <div><Link className="hover:text-pink-600 hover:border-b-2 border-pink-600">Produto</Link></div>
            <div><Link className="hover:text-pink-600 hover:border-b-2 border-pink-600">Categorias</Link></div>
            <div><Link className="hover:text-pink-600 hover:border-b-2 border-pink-600">Meus Pedidos</Link></div>
        </div>
    );
}

export default NavBar;
