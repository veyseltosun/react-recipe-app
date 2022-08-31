import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyle";
// api key = 3e90d6f17a2e7fd7004bfb5942623bae
const Form = ()=>{

 const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(handleSubmit);
 }
    return(
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput type="text" placeholder="Search"/>
            <Button>Search</Button>
            <Select name="mealTypes" id="mealTypes"></Select>
        </FormContainer>
    );
};

export default Form;