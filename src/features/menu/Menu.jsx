import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuIem from '../menu/MenuItem';
function Menu() {
  /// Third Step :- is use custom hook useLoaderData
  // ! this effect is called render as we fetch

  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 py-5">
      {menu.map((pizza) => (
        <MenuIem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// && First step :- create a loader function to fetch data from api

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
