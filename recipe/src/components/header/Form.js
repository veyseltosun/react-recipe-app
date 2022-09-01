import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyle";
// api key = 3e90d6f17a2e7fd7004bfb5942623bae
const Form = ({setQuery, query, getData, mealTypes, setMeal, meal})=>{

 const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(handleSubmit);
    console.log("query", query);
    getData()
 }
    return(
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput type="text" placeholder="Search" value={query} onChange={(e) =>setQuery(e.target.value)}/>
            <Button>Search</Button>
            <Select name="mealTypes" id="mealTypes" onChange={handChange}>
                {mealTypes?.map((item, index) => (
                    <option value ={item.toLowerCase()} key={index}>{item}</option>

                ))}
                    
                         
            </Select>
        </FormContainer>
    );
};

export default Form;