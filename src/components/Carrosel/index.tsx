import img from "../../assets/PhotoBanner.png"

const Carrosel = () => {
  return (
    <div className="grid grid-cols-2 gap-12">

      <div className="flex flex-col items-end justify-center">
        <div> 
          <h1 className="text-5xl text-center flex leading-[50px] xl:leading-10 md:leading-8">Helena <br/> Siena</h1>
          <p className="text-base text-center">Web Designer</p>
          <p className="text-2xl">UI/UX Desinger Jr</p>
        </div>
        
        
      </div>
      <img src={img}/>
    </div>
  )
}

export default Carrosel