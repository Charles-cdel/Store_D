import BigShoe from'../../assets/BigShoe.png'

function RoadFeet(){
  return(
    <div className="flex items-center gap-20 w-full h-[34.5rem] justify-center">
      
      <div className="w-[29.13rem] h-[29.13rem] mt-4 ml-4">
        <div className="w-[29.13rem] h-[29.13rem] rounded-full bg-gradient-to-t from-[#ffffff] to-gray-500" >
        <div className="flex my-7 -ml-16 w-[36rem] h-[20.65rem]">
            <img className='mt-4' src={BigShoe} alt="" />
          </div>
        </div>
          
      </div>
      <div className="w-[37.5rem] h-[21.5rem]">
        <p className='text-[#C92071] font-bold text-base'>
          Oferta Especial

        </p>
        <h2 className='font-bold mt-2 text-6xl'>
        Air Jordan edição de 
        colecionador
        </h2>
         <p className='leading-6 mt-5 text-[#474747] tracking-wider text-lg'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
         </p>
         <button className='w-[12.5rem] mt-7 h-[2.5rem] bg-[#C92071] rounded-xl text-white text-base'>
            Ver Oferta
         </button>
      </div>
    </div>
  )
}
export default RoadFeet