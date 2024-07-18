import footer from '../../assets/footer.png';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="  h-[45rem] w-[100%] bg-black flex  items-center gap-0.5  justify-center border-solid border-2 border-sky-500">
        <div className=" h-[36rem] w-[90%]  bg-black flex border-solid border-2 border-sky-500 ">
          <div className="h-[90%] w-[28%] border-solid border-2 border-sky-500 mx-5">
            <div className="">
              <img src={footer} alt="" />
            </div>
            <div>
              <p className="items-center text-white gap-0.5 mt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            <div className="w-[12rem] h-[3rem] flex gap-8 border-solid border-2 border-sky-500  mt-20 bg-white">
              <FiFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          <div className="h-[27rem] w-[14rem] flex flex-col gap-4 border-solid border-2 border-sky-500 text-white mx-40">
            <h2 class="font-bold">Informação</h2>
            <Link> Sobre Drip Store </Link>
            <Link> Segurança </Link>
            <Link> Wishilist </Link>
            <Link> Blog </Link>
            <Link> Trabalhe conosco </Link>
            <Link>Meus Pedidos </Link>

          </div>
          <div className=" h-[27rem] w-[14rem] flex flex-col gap-4 border-solid border-2 border-sky-500 text-white mx-12" >
            <h2 class="font-bold"> Categorias </h2>
            <Link> Camisetas </Link>
            <Link> Calças </Link>
            <Link> Bonés </Link>
            <Link> Headphones </Link>
            <Link> Tênis </Link>

          </div>
          <div className=" h-[14rem] w-[20rem] flex flex-col gap-4 border-solid border-2 border-sky-500 text-white mx-24">
            <h2 class="font-bold"> Contato </h2>
            <Link>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</Link>
            <p>(85) 3051-3411</p>
          </div>
        </div>
        <div className="border-2 border-sky-500 text-white mt-16">
        
        </div>
        <div className="flex h-[0.5rem] w-[2rem] text-white">
        <p>@ 2022 Digital College</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
