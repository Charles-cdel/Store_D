import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { BsSearch, BsCart } from 'react-icons/bs';
import ButtonD from '../ButtonD';


function HeaderTop() {
    return ( 
        <div className='mx-[10%] mt-[2%] flex items-center justify-between'>
            <div>
                <img src={logo} alt=""  width={253} height={44}/>
            </div>

            <div className=' w-[50rem] h-[60px] rounded-md bg-gray-200 flex items-center p-5 justify-between' >
                <input placeholder='Pesquisar produto...'  className=' bg-gray-200 focus:outline-none w-[80%]' />
                <BsSearch className='text-gray-400 ' size={25}/>
            </div>

            <div>
                <Link >Cadastre-se</Link>
            </div>

            <ButtonD tamanho="medium" texto="Entrar" />

            <div>
            <BsCart className='text-pink-500'/>
            </div>
        </div>
        
     );
}

export default HeaderTop;