import React, {useEffect, useState}from 'react'
import Header from '../../components/header/Header'
import axios from "axios";


const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "e62b0b0f"
const APP_KEY = "3e90d6f17a2e7fd7004bfb5942623bae"
function Home() {
    const [query, setQuery] = useState("apple");
    const [recipes, setRecipes] = useState();
    const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
    const getData =  async () =>{
        if(query!==""){
            const result = await axios.get(url);
       
            console.log(result)
        }
        

    }
    useEffect(()=>{
        getData()
    },[]);
  return (
    <div>
        <Header/>

    </div>
  )
}

export default Home;