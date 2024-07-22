import BigShoe from'../../assets/BigShoe.png'

function RoadFeet(){
  return(
    <div className="flex content-center items-center w-[90rem] h-[34.57rem] border-solid border-2 border-red-700">
      <div className="w-[40%]  h-[34rem] ml-16 border-solid border-2 border-blue-700">
        <div className="w-[35.82rem] flex h-[20.65rem] border-solid ml-16 mt-24 border-2 border-yellow-500">
          <div className=" border-solid border-2 border-pink-700 rounded-xl ">
          <img className=' shadow-2xl rouded-[20rem]' src={BigShoe} alt="" />
          </div>
          
        

        </div>
       
      </div>
    </div>
  )
}
export default RoadFeet