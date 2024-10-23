import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Allcountries from "./pages/allcountries/Allcountries"
import Search from "./pages/search/Search"
import './App.css'


 
 
 const App = () => {

  const [loader, setloader] = useState(true)

  const [allcountry, setallcountry] = useState([])

  const [ errormessage, seterrormessage] = useState('')

  

 

  useEffect(()=>{
  
      const myFunction =  async ()=>{

try {
  setloader("  Loading............ ")
  const apiFetch = await axios.get("https://restcountries.com/v3.1/all");
 
  const response = apiFetch.data;
 
  setallcountry(response)
 
  setloader(false)

} catch (error) {
 
  seterrormessage(error.message)

}
 
      }
 
    myFunction();
 
  },[])

// const searchValuehandle = (searchValue)=>{
//   let value = searchValue.toLowerCase();
//   const countryName = allcountry.name.common.toLowerCase();
//    console.log("it is value" , value , "it is name" , countryName)

// }

const handleSearch = (searchValue) => {


  let value = searchValue.toLowerCase();
  const newCountries = allcountry.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    return countryName.startsWith(value);
  });
  setallcountry(newCountries);
  console.log(searchValue)

};

 

// const removeCountry =(countryValue)=>{

// const filter = allcountry.filter((country)=> country.name.common != countryValue)

//  setallcountry(filter)
// }

const handleRemoveCountry = (name) => {
 const filter= allcountry.filter((item)=>item.name.common != name)
 setallcountry(filter)
};





// const searchValuehandle =(handleSearch)=>{
 
// }


   return (

    <> 
    <Search onsearch={handleSearch} />
    
    <div id="mainApp" className="pt-[150px] sm:pt-[100px]  w-full h-full p-[20px] sm:p-[30px] bg-slate-50 flex items-center justify-center gap-4 flex-col overflow-x-hidden">


{ loader && 

<div className=" w-full h-screen bg-slate-300 flex items-center justify-center">
 <h1 className="text-3xl font-bold text-orange-600 ">{loader} </h1>
 </div>
 }


{errormessage ? errormessage :" " }






<Allcountries allCards={allcountry} removeCountryCard={handleRemoveCountry} /> 

 
     </div>
    </>
     
   )
 }
 
 export default App