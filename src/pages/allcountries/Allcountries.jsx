import Country from "../country/Country"

 

const Allcountries = ({allCards, removeCountryCard}) => {
    
  return (
    <div className="w-full flex items-center justify-center gap-4 flex-wrap "> 

        {
        allCards.map((item, index)=>(
            <Country key={index} singleCard={item}  removeSingleCard={removeCountryCard}  />
        ))
        
        
        
        
        
        }
    </div>
  )
}

export default Allcountries