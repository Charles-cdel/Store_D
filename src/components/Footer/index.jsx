import footer from "../../assets/footer.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="h-[45rem] w-[100%] bg-black flex flex-col  ">
        <div className=" h-[45rem] w-[100%] bg-black flex  items-center   justify-center border-solid">
        <div className=" h-[36rem] w-[90%]  bg-black flex border-solid  ">
          <div className="h-[90%] w-[28%] border-solid  mx-5">
            <div className="">
              <img src={footer} alt="" />
            </div>
            <div>
              <p className="items-center text-white gap-0.5 mt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            <div className="w-[12rem] h-[3rem] flex gap-8 border-solid mt-20 text-white">
              <Link to="https://web.facebook.com/digitalcollegebr/?_rdc=1&_rdr">
                <FaFacebookF />
              </Link>

              <Link>
                <FaInstagram />
              </Link>

              <Link>
                <FaTwitter />
              </Link>
            </div>
          </div>

            <div className="h-[27rem] w-[16rem] flex flex-col gap-4 border-solid text-white mx-40">
              <h2 class="font-bold ">Informação</h2>
              <Link> Sobre Drip Store </Link>
              <Link> Segurança </Link>
              <Link> Wishilist </Link>
              <Link> Blog </Link>
              <Link> Trabalhe conosco </Link>
              <Link>Meus Pedidos </Link>
            </div>
            <div className=" h-[27rem] w-[14rem] flex flex-col gap-4 border-solid  text-white mx-12">
              <h2 class="font-bold"> Categorias </h2>
              <Link> Camisetas </Link>
              <Link> Calças </Link>
              <Link> Bonés </Link>
              <Link> Headphones </Link>
              <Link> Tênis </Link>
            </div>
          <div className=" h-[14rem] w-[20rem] flex flex-col gap-4 border-solid text-white mx-24">
            <h2 class="font-bold"> Contato </h2>
            <Link>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </Link>
            <p>(85) 3051-3411</p>
          </div>
        </div>
        </div>
        
        <div className="mb-[10px] flex flex-col items-center  h-[40px] text-white">
        <hr  className="border-solid border-1 border-white w-[80%]  "/>
            <p>@ 2022 Digital College</p>
        </div>

      </div>


    </>
  );
}

export default Footer;
