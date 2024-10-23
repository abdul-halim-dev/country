import { Link } from "react-router-dom";

 

const Country = (props) => {

    const { name, flags, capital, population, area, timezones, status,region	} = props.singleCard;
  
 
  const removeCountry =(removeId)=>{
    props.removeSingleCard(removeId)
  }
  
  
  
  
    return (
    <div className=" w-[100%]  md:w-[48%] lg:w-[32%] bg-[#34495e] text-white hover:scale-95 duration-300 transform p-[10px] sm:p-[20px] h-[670px] flex items-center justify-center flex-col gap-6 rounded-md shadow-md ">
        <div className="w-full h-[180px] rounded-md">
            <img className="w-full h-full object-cover rounded-md shadow-md" src={flags.png} alt="" />
        </div>
        <div className="w-full flex  items-start  justify-center   gap-8 flex-col">
            <div className="w-[full] flex  items-start  justify-center   gap-4 flex-col ">
                <p className="text-lg font-bold "> Common Name:  {name.common} </p>
                <p className="text-lg font-bold "> Official Name: {name.official	} </p>
               
                <p className="text-lg font-bold "> Capital Name: {capital} </p>
                <p className="text-lg font-bold "> Region: {region	} </p>
                <p className="text-lg font-bold "> Total Population: {population} </p>
                <p className="text-lg font-bold "> Total Area: {area} </p>
                <p className="text-lg font-bold "> Time Zone: { timezones		} </p>
                <p className="text-lg font-bold "> Status: {status	} </p>

            </div>
             <div className="w-full text-center">
                <button onClick={()=>{
                    removeCountry(name.common)
                }} className=" px-[20px] py-[4px] hover:bg-orange-700 duration-300 rounded-md shadow-md bg-orange-400  text-lg font-bold  "> Remove </button>
           
             </div>
             
        </div>

    </div>
  )
}

export default Country