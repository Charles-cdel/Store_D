import ButtonD from "../ButtonD";
import tenis from '../../assets/tenisRosa.png'
function Main() {
    return ( 
    <div className="h-[50rem] bg-gray-100 w-[100%]  items-center flex" >
        <div className="flex flex-col  justify-around w-[50rem] mx-[10%]  h-[28rem] ">
            <div>
                <p className="text-yellow-500 font-extrabold">Melhores ofertas personalizadas</p>
            </div>
            <div>
                <h1 className="text-[5rem] font-extrabold ">Queima de <br />Stoque Nike 🔥</h1>
            </div>
            <div>
                <p>
                    Consequat culpa exercutation mollit nisi excepteur do <br /> 
                    do tempor laboris eiusmod irure consectetur.
                </p>
            </div>
            <div className="mt-10">
                <ButtonD tamanho="large" texto="Ver Ofertas" />

            </div>
        </div>
        <div >
            <img src={tenis} alt="" />
        </div>
    </div> 
    );
}

export default Main;