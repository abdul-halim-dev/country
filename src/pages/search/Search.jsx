import { useEffect, useState } from "react"
 
 

const Search = (props) => {
const [formValue, setformValue] = useState("")

const formValuehandle = (e)=>{
    setformValue(e.target.value)
    
}

useEffect(() => {
  props.onsearch(formValue);


  }, [formValue]);


 
  return (
    <header className=" flex-col sm:flex-row shadow-md w-full flex items-center justify-center gap-4   py-[20px]  ">

       <h1 className="font-bold text-2xl text-white uppercase "> Country App </h1>
       <input value={formValue} onChange={formValuehandle} className=" border-2 border-orange-500 focus:border-0 px-[20px] py-[4px] rounded-md text-lg " type="text" placeholder="Search Country" />
    </header>
  )
}

export default Search