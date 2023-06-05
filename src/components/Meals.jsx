import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const mealsURL = "http://localhost:3000/meals";

function Meals() {
    const { title } = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        axios
            .get(mealsURL)
            .then((response) => setMeals(response.data))
            .catch((error) => console.log(error));
    }, [])

    const filteredMeals = meals.filter((meal) => meal.menu === title);

    let mealsjsx = filteredMeals.map((meal, index) => {
        return (
            <div className="menuCard" key={index}>
                <div>{meal.title}</div>
                <div>{meal.description}</div>
                <div>{meal.menu}</div>
                {/* <Link to={"/editmeals/" + meal._id} >
                    <Button>Edit</Button>
                </Link> */}
            </div>
        )
    })
    return (
        <>
            <div className="menuWrapper">
                <div className="menuTitle"><p>Meals</p></div>
                <div className="menuContainer">
                    {mealsjsx}
                </div>
            </div>
        </>
    );
}

export default Meals;