
const linkCollection=[
    

    {   name: "Berlin",
        link: "https://en.wikipedia.org/wiki/Berlin"},
   
    {   name: "Hamburg",
        link: "https://en.wikipedia.org/wiki/Hamburg"},
   
    {   name: "Munich",
        link: "https://en.wikipedia.org/wiki/Munich"}
   
       
   ]
   
   // making a copy of tipCollection and putting it into useTips
   export const useCities = () => {
       return linkCollection.slice()
   }