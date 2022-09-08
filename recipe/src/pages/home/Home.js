import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import { MainContainer, HomeImg, ImgDiv } from './HomeStyle';
import RecipeCardComp from './RecipeCardComp';
import homeSvg from '../../assets/home.svg';
import { MEAL_TYPES } from '../../helpers/constants';

function Home() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState();
    const [meal, setMeal] = useState(MEAL_TYPES[0].toLowerCase());

    const url = `${process.env.REACT_APP_BASE_API_URL}/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&mealType=${meal}`;

    const getData = async () => {
        if (query !== '') {
            const result = await axios.get(url);
            if (result.status === 200) {
                setRecipes(result.data.hits);
            }
        } else {
            alert('Please fill the form');
        }
    };

    useEffect(() => {
        if (!query) return;
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Header
                setQuery={setQuery}
                query={query}
                getData={getData}
                mealTypes={MEAL_TYPES}
                setMeal={setMeal}
                meal={meal}
            />
            {recipes ? (
                <MainContainer>
                    {recipes?.map((recipe, index) => (
                        <RecipeCardComp key={index} recipe={recipe?.recipe} />
                    ))}
                </MainContainer>
            ) : (
                <ImgDiv>
                    <HomeImg src={homeSvg} />
                </ImgDiv>
            )}
        </div>
    );
}

export default Home;
