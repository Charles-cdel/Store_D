import BigShoe from'../../assets/BigShoe.png'

function RoadFeet(){
  return(
    <div className="flex content-center items-center w-[90rem] h-[34.57rem] border-solid border-2 border-red-700">
      <div className="w-[40%] h-[34rem] border-solid border-2 border-blue-700">
        <div className="w-[35.82rem] h-[20.65rem] border-solid border-2 border-yellow-500">
          <img className='' src={BigShoe} alt="" />
        

        </div>
         <div className="w-[36.82rem] h-[21.32rem]">
          <div className="">
            <p className=''>

            </p>
            <div className="">
              <h1 class=''>

              </h1>
            </div>
          </div>
          <div className="">
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officia quaerat ipsum voluptatibus cum excepturi sed! Maiores consequatur autem expedita, error, neque saepe aperiam distinctio hic doloremque vel sint nihil.</p>
          </div>
         </div>
         <div className="">
          <button className=''> Ver Ofertas</button>
         </div>
      </div>
    </div>
  )
}
export default RoadFeet