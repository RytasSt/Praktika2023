import "./menu.scss"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const menuURL = "http://localhost:3000/menu";
const mealsURL = "http://localhost:3000/meals";
function Menu() {
    const [menu, setMenu] = useState([]);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios
            .get(menuURL)
            .then((response) => setMenu(response.data))
            .catch((error) => console.log(error));
        axios
            .get(mealsURL)
            .then((response) => setMeals(response.data))
            .catch((error) => console.log(error));
    }, [])

    // const handleViewMeals = (menu) => {
    //     // Logic to filter meals based on the selected menuId
    //     const filteredMeals = meals.filter((meal) => meal.menu === menu);
      
    //     // Perform any necessary actions with filteredMeals (e.g., redirect to a new page)
    //     console.log(filteredMeals);
    //   };

    let menujsx = menu.map((item, index) => {
        return (
            <div className="menuCard" key={index}>
                <div className="menuCardTitle" key={index}>{item.title}</div>

                <Link to={"/meals/" + item.title} >
                    <button 
                    // onClick={() => handleViewMeals(item.title)}
                    >
                        View</button>
                </Link>
            </div>
        )
    })
    return (
        <>
            <div className="menuWrapper">
                <div className="menuTitle"><p>Menu</p></div>
                <div className="menuContainer">
                    {menujsx}
                </div>
            </div>
        </>
    );
}

export default Menu;