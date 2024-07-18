import footer from "../../assets/footer.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="  h-[45rem] w-[100%] bg-black flex  items-center gap-0.5  justify-center">

        <div className=" h-[36rem] w-[90%]  bg-red-700 flex  ">

          <div className="h-[90%] w-[28%] border-solid border-2 border-sky-500 ">
                <div className="">
                    <img src={footer} alt="" />
                </div>
                    <div>
                    <p className="items-center gap-0.5 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>

                <div className="w-[9rem] flex gap-8  ">
                <FaFacebookF/>
                <FaInstagram/>
                <FaTwitter/>
                </div>
          </div>

          <div className="h-[2rem] w-[13rem] items-center justify-center flex flex-col content-between border-solid border-2 border-sky-500">
            <h2 class="size-2 font-bold">Informação</h2>
            <Link >teste</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
