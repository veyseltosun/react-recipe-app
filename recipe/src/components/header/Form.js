import React from 'react';
import { Button, FoodInput, FormContainer, Select } from './HeaderStyle';

const Form = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        getData();
    };

    const handChange = (e) => {
        setMeal(e.target.value);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
    return (
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleInputChange}
            />
            <Button>Search</Button>
            <Select name="mealTypes" id="mealTypes" onChange={handChange}>
                {mealTypes?.map((item, index) => (
                    <option value={item.toLowerCase()} key={index}>
                        {item}
                    </option>
                ))}
            </Select>
        </FormContainer>
    );
};

export default Form;
