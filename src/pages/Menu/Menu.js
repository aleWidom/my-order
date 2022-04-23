
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import styles from "./Menu.module.css"

import { getAllCategories, getItemsAccordingToSelectedCategory } from "../../services/menu";

import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsDishFood from "../../components/CardsDishFood/CardsDishFood";
import HeaderBrandTable from "../../components/HeaderBrandTable/HeaderBrandTable";



const Menu = ({ table, cart, setCart }) => {

  const [categorySelected, setCategorySelected] = useState("Pizzanesas")

  const [categories, setCategories] = useState([]);

  const [foodCategory, setFoodCategory] = useState([])


  useEffect(() => {
    setCategories(menu.categories)
    /*   getAllCategories()
          .then((data) => {
              console.log({ data })
              setCategories(data)
          })
          .catch((err) => console.log(err)) */
  }, []);



  useEffect(() => {
    const getItemsAccordingToSelectedCategory  = menu.products.filter((e)=> e.category === categorySelected)
    setFoodCategory(getItemsAccordingToSelectedCategory)
    /*  getItemsAccordingToSelectedCategory(categories, categorySelected)
         .then((data) => {
             setFoodCategory(data)
         })
         .catch((err) => console.log(err)) */
  }, [categorySelected] /* [categories, categorySelected] */)


  //CardsCategories
  const handleClickCategory = (cardSelected) => () => {
    /*    setCategorySelected(cardSelected.name) */
    setCategorySelected(cardSelected.nameCategories)
  }

  //CardsDishfood
  const handleClickSelected = (item) => () => {
    setCart([...cart, item])
  }

  //CardsDishfood
  const handleClickNotSelected = (item) => () => {
    const cartCurrent = cart.filter((e) => e.id !== item.id)
    setCart(cartCurrent)
  }





  let menu = {
    "categories": [
      {
        "nameCategories": "Pizzanesas",
        "id": 1000,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/49224445-40d0ab3e-e04f-40f2-b180-f984c2821ea4.jpeg?quality=90&height=96&width=96&webp=1"
      },
      {
        "nameCategories": "Milanesas",
        "id": 2000,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741858-146abd8b-16cb-4187-913b-c83298c6ffb0.jpeg?quality=90&height=96&width=96&webp=1"
      },
      {
        "nameCategories": "Pizzas",
        "id": 3000,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741896-70c08020-fb50-4f89-b9ca-65489a725d44.jpeg?quality=90&height=96&width=96&webp=1"
      },
      {
        "nameCategories": "Empanadas",
        "id": 4000,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741915-e25880ed-a325-49e2-97e5-e137354fc699.jpeg?quality=90&height=96&width=96&webp=1"
      },
      {
        "nameCategories": "Carnes",
        "id": 5000,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2742867-3664dfcf-62d1-47c8-8381-52c60f56d81d.jpeg?quality=90&height=96&width=96&webp=1"
      }
    ],
    "products": [
      {
        "id": 1001,
        "title": "Pizzanesa clásica",
        "description": "",
        "price": 1530,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/49224445-40d0ab3e-e04f-40f2-b180-f984c2821ea4.jpeg?quality=90&width=864&webp=1",
        "category": "Pizzanesas"
      },
      {
        "id": 1002,
        "title": "Pizzanesa muzzarella",
        "description": "Milanesa de ternera, muzzarella, salsa de tomate, aceitunas verdes y orégano. Con papas fritas",
        "price": 1890,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2740832-39ba8103-c869-4eab-901c-d18c0b189d96.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Pizzanesas"
      },
      {
        "id": 1003,
        "title": "Pizzanesa fugazzeta con queso",
        "description": "Cebolla, aceite de oliva, pimienta, orégano y muzzarella. Con papas fritas",
        "price": 1950,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2740834-95d24c4e-2a2d-4a3a-94ad-edf8a1a0cee3.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Pizzanesas"
      },
      {
        "id": 2001,
        "title": "Milanesa clásica",
        "description": "Milanesa clásica con papas fritas",
        "price": 890,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741857-c07b410e-3767-4ddc-8de0-772788d2624a.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Milanesas"
      },
      {
        "id": 2002,
        "title": "Milanesa completa",
        "description": "Milanesa con papas fritas y 2 huevos fritos",
        "price": 980,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741858-146abd8b-16cb-4187-913b-c83298c6ffb0.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Milanesas"
      },
      {
        "id": 2003,
        "title": "Milanesa napolitana",
        "description": "Milanesa acompañada de salsa de tomate, rodajas tomate natural, aceitunas verdes y orégano",
        "price": 990,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741859-613a448c-43d9-4856-a27c-45afeba3298a.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Milanesas"
      },
      {
        "id": 3001,
        "title": "Pizza Muzzarella",
        "description": "Muzzarella, salsa de tomate, aceitunas verdes y orégano",
        "price": 650,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741890-7e04308a-ccf7-4342-926a-fb162401dd31.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Pizzas"
      },
      {
        "id": 3002,
        "title": "Pizza napolitana",
        "description": "Muzzarella, salsa de tomate, tomates en rodajas y provenzal",
        "price": 830,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741896-70c08020-fb50-4f89-b9ca-65489a725d44.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Pizzas"
      },
      {
        "id": 3003,
        "title": "Pizza con jamón y morrones",
        "description": "Muzzarella, salsa de tomate, aceitunas verdes, jamón y morrones",
        "price": 890,
        "photo": "",
        "category": "Pizzas"
      },
      {
        "id": 3004,
        "title": "Pizza cuatro quesos",
        "description": "Muzzarella, salsa de tomate, gruyere, roquefort y parmesano",
        "price": 990,
        "photo": "",
        "category": "Pizzas"
      },
      {
        "id": 3005,
        "title": "Pizza La Farola",
        "description": "Tomate, muzzarella, jamón cocido, huevo, morrones, aceitunas negras, pálmitos y orégano",
        "price": 980,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741889-42836359-9546-4ddf-883f-464bbd42aeb5.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Pizzas"
      },
      {
        "id": 4001,
        "title": "Empanada de carne",
        "description": "",
        "price": 185,
        "photo": "",
        "category": "Empanadas"
      },
      {
        "id": 4002,
        "title": "Empanada de carne picante",
        "description": "",
        "price": 185,
        "photo": "",
        "category": "Empanadas"
      },
      {
        "id": 4003,
        "title": "Empanada de pollo",
        "description": "",
        "price": 185,
        "photo": "",
        "category": "Empanadas"
      },
      {
        "id": 4004,
        "title": "Empanada de jamón y queso",
        "description": "",
        "price": 185,
        "photo": "",
        "category": "Empanadas"
      },
      {
        "id": 4005,
        "title": "Empanada capresse",
        "description": "",
        "price": 185,
        "photo": "",
        "category": "Empanadas"
      },
      {
        "id": 4006,
        "title": "Empanada humita",
        "description": "",
        "price": 185,
        "photo": "",
        "category": "Empanadas"
      },
      {
        "id": 4007,
        "title": "Empanada roquefort",
        "description": "",
        "price": 185,
        "photo": "",
        "category": "Empanadas"
      },
      {
        "id": 4008,
        "title": "Empanada cebolla y queso",
        "description": "",
        "price": 185,
        "photo": "",
        "category": "Empanadas"
      },
      {
        "id": 4009,
        "title": "Empanada verdura con queso",
        "description": "",
        "price": 185,
        "photo": "",
        "category": "Empanadas"
      },
      {
        "id": 5001,
        "title": "Bife de chorizo con papas fritas",
        "description": "",
        "price": 1450,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2742867-3664dfcf-62d1-47c8-8381-52c60f56d81d.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Carnes"
      },
      {
        "id": 5002,
        "title": "Bife de chorizo completo y con huevo frito",
        "description": "",
        "price": 1550,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2742870-249d9db2-999c-4061-9c84-7030743204bb.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Carnes"
      },
      {
        "id": 5003,
        "title": "Bife de lomo completo con papas fritas y huevo frito",
        "description": "",
        "price": 1570,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2742883-99942be3-d375-43dd-9804-b60489e64b23.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Carnes"
      },
      {
        "id": 5004,
        "title": "Lomo al champignon con papas españolas",
        "description": "",
        "price": 1570,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2742875-99814691-4c7d-46bf-866f-e8910731e4d6.jpeg?quality=90&height=96&width=96&webp=1",
        "category": "Carnes"
      }
    ]
  }

  return (
    <>
      <HeaderBrandTable table={table} />
      <CardsCategories handleClickCategory={handleClickCategory} category={categorySelected} categories={categories} />
      <CardsDishFood cart={cart} foodCategory={foodCategory} setCart={setCart} category={categorySelected} handleClickNotSelected={handleClickNotSelected} handleClickSelected={handleClickSelected} />
      <div className={styles.container}>
        {cart.length === 0 ? "" : <Link to={`/table/${table.table_number}/menu/order`} className={styles.order}>Ver mi orden</Link>}
        <Link to={`/table/${table.table_number}`} className={styles.home}>Volver a home</Link>
      </div>
    </>
  )
};

export default Menu;
