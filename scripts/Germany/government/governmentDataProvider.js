const linkCollection=[
    

    {   name: "President: Frank-Walter Steinmeier",
        link: "https://www.google.com/search?rlz=1C1GCEA_enUS873US873&sxsrf=ALeKk01Z4SPIFU3qNLi9wW7X7pN77oDl4Q:1582661341867&q=Frank-Walter+Steinmeier&stick=H4sIAAAAAAAAAONgVuLUz9U3sLCsyil7xOjMLfDyxz1hKatJa05eYzTh4grOyC93zSvJLKkUUuNig7JkuHilELo0GKS4uRBcnkWs4m5FiXnZuuGJOSWpRQrBJamZebmpmalFAJyQPfptAAAA"},
   
    {   name: "Chancellor of Germany: Angela Merkel",
        link: "https://www.google.com/search?rlz=1C1GCEA_enUS873US873&sxsrf=ALeKk03mD3ekuyeAOZCUjhvA7xoPuhaDPw:1582661580211&q=Angela+Merkel&stick=H4sIAAAAAAAAAONgVuLQz9U3yMoxSH_E6Mgt8PLHPWEpi0lrTl5jNOLiCs7IL3fNK8ksqRRS4WKDsqS4eKTgmjQYpLi44DyeRay8jnnpqTmJCr6pRdmpOQDYMrryYAAAAA"},
   
    {   name: "Vice Chancellor of Germany: Olaf Scholz",
        link: "https://en.wikipedia.org/wiki/Olaf_Scholz"}
   
       
   ]
   
   // making a copy of tipCollection and putting it into useTips
   export const useGovernment = () => {
       return linkCollection.slice()
   }