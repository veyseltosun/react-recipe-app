import React from "react";

import {
  DetailContainer,
  DetailPart,
  ImgContainer,
  HeaderContainer,
  IngContainer,
  OtherPart,
} from "./DetailsStyle";
import dietSvg from "../../assets/diet.svg";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location  = useLocation();
  console.log("recipe", location)

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{location.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <>Nutrients</>
          <p>
            {location.totalNutrients.CA.label} :{" "}
            {Math.round(location.totalNutrients.CA.quantity)}
            {location.totalNutrients.CA.unit}
          </p>
          <p>
            {location.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(location.totalNutrients.CHOCDF.quantity)}
            {location.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {location.totalNutrients.CHOLE.label} :{" "}
            {Math.round(location.totalNutrients.CHOLE.quantity)}
            {location.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {location.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(location.totalNutrients.ENERC_KCAL.quantity)}
            {location.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{location.totalWeight}</p>
          <p>Calories: {Math.round(location.calories)}</p>
          {location.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img src={location.image} alt={location.label} />
        </ImgContainer>
        <IngContainer>
          {location.ingredientLines.map((line, index) => (
            <div key={index}>
              <p>
                {index + 1} - {line}
              </p>
              <br />
            </div>
          ))}
        </IngContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;