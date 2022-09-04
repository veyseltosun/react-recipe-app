import { useNavigate } from "react-router-dom";
import { RecipeCard, RecipeImage, Button, RecipeHeader } from "./HomeStyle";
import defaultImg from "../../assets/default-image.jpg";

const RecipeCardComp = ({ recipe }) => {
  let navigate = useNavigate();

  function moreClick({
    
  }) {
        this.props.navigate("/details"),{recipe:recipe}
        



    }

  return (
    <RecipeCard>
      <RecipeHeader>{recipe?.label}</RecipeHeader>
     
      <RecipeImage src={recipe?.image || defaultImg} alt="" />  
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;