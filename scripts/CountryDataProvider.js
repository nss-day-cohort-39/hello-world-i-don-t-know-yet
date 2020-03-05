const countryData=[
    {
      name: "Cities",
      link1:"Reims",
      link2:"Paris",
      link3:"Sarlatt"
    },
     {
      name: "Landmarks",
      link1:"Mont Saint Michel",
      link2:"Notre Dame",
      link3:"The Riveria",
    },
     {
      name: "Government",
      link1:"Napoleon",
      link2:"DeGaulle",
      link3:"Mitterand"  
    }
]

export const useCountryData = () => {
  return countryData.slice()
}