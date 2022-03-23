const { gql, ApolloServer } = require('apollo-server')

const items = [
    {
        "id": 1,
        "title": "Pizzanesa clásica",
        "description": "",
        "price": 1530,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/49224445-40d0ab3e-e04f-40f2-b180-f984c2821ea4.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 1,
        "id_restaurant": 1
    },
    {
        "id": 2,
        "title": "Pizzanesa muzzarella",
        "description": "Milanesa de ternera, muzzarella, salsa de tomate, aceitunas verdes y orégano. Con papas fritas",
        "price": 1890,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2740832-39ba8103-c869-4eab-901c-d18c0b189d96.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 1,
        "id_restaurant": 1
    },
    {
        "id": 3,
        "title": "Pizzanesa fugazzeta con queso",
        "description": "Cebolla, aceite de oliva, pimienta, orégano y muzzarella. Con papas fritas",
        "price": 1950,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2740834-95d24c4e-2a2d-4a3a-94ad-edf8a1a0cee3.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 1,
        "id_restaurant": 1
    },
    {
        "id": 4,
        "title": "Milanesa clásica",
        "description": "Milanesa clásica con papas fritas",
        "price": 890,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741857-c07b410e-3767-4ddc-8de0-772788d2624a.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 2,
        "id_restaurant": 1
    },
    {
        "id": 5,
        "title": "Milanesa completa",
        "description": "Milanesa con papas fritas y 2 huevos fritos",
        "price": 980,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741858-146abd8b-16cb-4187-913b-c83298c6ffb0.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 2,
        "id_restaurant": 1
    },
    {
        "id": 6,
        "title": "Pizza Muzzarella",
        "description": "Muzzarella, salsa de tomate, aceitunas verdes y orégano",
        "price": 650,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741890-7e04308a-ccf7-4342-926a-fb162401dd31.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 3,
        "id_restaurant": 1
    },
    {
        "id": 7,
        "title": "Pizza napolitana",
        "description": "Muzzarella, salsa de tomate, tomates en rodajas y provenzal",
        "price": 830,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741896-70c08020-fb50-4f89-b9ca-65489a725d44.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 3,
        "id_restaurant": 1
    },
    {
        "id": 8,
        "title": "Pizza La Farola",
        "description": "Tomate, muzzarella, jamón cocido, huevo, morrones, aceitunas negras, pálmitos y orégano",
        "price": 980,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741889-42836359-9546-4ddf-883f-464bbd42aeb5.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 3,
        "id_restaurant": 1
    },
    {
        "id": 9,
        "title": "Empanada de carne",
        "description": "",
        "price": 185,
        "photo": "",
        "id_category": 4,
        "id_restaurant": 1
    },
    {
        "id": 10,
        "title": "Empanada de pollo",
        "description": "",
        "price": 185,
        "photo": "",
        "id_category": 4,
        "id_restaurant": 1
    },
    {
        "id": 11,
        "title": "Empanada de jamón y queso",
        "description": "",
        "price": 185,
        "photo": "",
        "id_category": 4,
        "id_restaurant": 1
    },
    {
        "id": 12,
        "title": "Empanada verdura con queso",
        "description": "",
        "price": 185,
        "photo": "",
        "id_category": 4,
        "id_restaurant": 1
    },
    {
        "id": 13,
        "title": "Empanada de carne",
        "description": "",
        "price": 200,
        "photo": "",
        "id_category": 4,
        "id_restaurant": 2
    },
    {
        "id": 14,
        "title": "Empanada jamón y queso",
        "description": "",
        "price": 200,
        "photo": "",
        "id_category": 4,
        "id_restaurant": 2
    },
    {
        "id": 15,
        "title": "Bife de chorizo con papas fritas",
        "description": "",
        "price": 1450,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2742867-3664dfcf-62d1-47c8-8381-52c60f56d81d.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 5,
        "id_restaurant": 1
    },
    {
        "id": 16,
        "title": "Bife de lomo completo con papas fritas y huevo frito",
        "description": "",
        "price": 1570,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2742883-99942be3-d375-43dd-9804-b60489e64b23.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 5,
        "id_restaurant": 1
    },
    {
        "id": 17,
        "title": "Lomo al champignon con papas españolas",
        "description": "",
        "price": 1570,
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2742875-99814691-4c7d-46bf-866f-e8910731e4d6.jpeg?quality=90&height=96&width=96&webp=1",
        "id_category": 5,
        "id_restaurant": 1
    },
    {
        "id": 18,
        "title": "Gaseosa 500cm3 línea Coca Cola",
        "description": "",
        "price": 200,
        "photo": "",
        "id_category": 6,
        "id_restaurant": 2
    },
    {
        "id": 19,
        "title": "Gaseosa 500cm3 línea Coca Cola",
        "description": "",
        "price": 220,
        "photo": "",
        "id_category": 6,
        "id_restaurant": 1
    },
    {
        "id": 20,
        "title": "Cortado",
        "description": "",
        "price": 150,
        "photo": "",
        "id_category": 7,
        "id_restaurant": 2
    },
    {
        "id": 21,
        "title": "Cafe con leche",
        "description": "",
        "price": 180,
        "photo": "",
        "id_category": 7,
        "id_restaurant": 2
    },
    {
        "id": 22,
        "title": "Cafe con leche con 2 medialunas",
        "description": "",
        "price": 250,
        "photo": "",
        "id_category": 7,
        "id_restaurant": 2
    }
]

const restaurants = [
    {
        "id": 1,
        "name": "La Farola de Caballito",
        "address": "Av. Independencia 4399",
        "mail": "",
        "phone": "011-4983-1437",
        "location": "C.A.B.A"
    },
    {
        "id": 2,
        "name": "Adela's",
        "address": "Justo José de Urquiza 4829",
        "mail": "",
        "phone": "011-4716-5317",
        "location": "Caseros, GBA"
    }
]

const categories = [
    {
        "id": 1,
        "name": "Pizzanesas",
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/49224445-40d0ab3e-e04f-40f2-b180-f984c2821ea4.jpeg?quality=90&height=96&width=96&webp=1"
    },
    {
        "id": 2,
        "name": "Milanesas",
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741858-146abd8b-16cb-4187-913b-c83298c6ffb0.jpeg?quality=90&height=96&width=96&webp=1"
    },
    {
        "id": 3,
        "name": "Pizzas",
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741896-70c08020-fb50-4f89-b9ca-65489a725d44.jpeg?quality=90&height=96&width=96&webp=1"
    },
    {
        "id": 4,
        "name": "Empanadas",
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2741915-e25880ed-a325-49e2-97e5-e137354fc699.jpeg?quality=90&height=96&width=96&webp=1"
    },
    {
        "id": 5,
        "name": "Carnes",
        "photo": "https://images.deliveryhero.io/image/pedidosya/products/2742867-3664dfcf-62d1-47c8-8381-52c60f56d81d.jpeg?quality=90&height=96&width=96&webp=1"
    },
    {
        "id": 6,
        "name": "Bebidas",
        "photo": "https://www.larazon.es/resizer/uQfARnoRAlCHQHzZv61rtkzNTHY=/1260x840/smart/filters:format(jpg)/cloudfront-eu-central-1.images.arcpublishing.com/larazon/FW3MW3JVGFEP5GOW3TGKNASLWI.jpg"
    },
    {
        "id": 7,
        "name": "Confitería",
        "photo": "https://www.clarin.com/img/2019/02/07/las-medialunas-companeras-del-cafe___7OomNmEex_720x0__1.jpg"
    }
]

const tables = [
    {
        "id": 1,
        "table_number": "A0001",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 2,
        "table_number": "A0002",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 3,
        "table_number": "A0003",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 4,
        "table_number": "A0004",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 5,
        "table_number": "A0005",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 6,
        "table_number": "A0006",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 7,
        "table_number": "A0007",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 8,
        "table_number": "A0008",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 9,
        "table_number": "A0009",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 10,
        "table_number": "A0010",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 11,
        "table_number": "B0001",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 12,
        "table_number": "B0002",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 13,
        "table_number": "B0003",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 14,
        "table_number": "B0004",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 15,
        "table_number": "B0005",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 2
    },
    {
        "id": 16,
        "table_number": "001",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 1
    },
    {
        "id": 17,
        "table_number": "002",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 1
    },
    {
        "id": 18,
        "table_number": "003",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 1
    },
    {
        "id": 19,
        "table_number": "004",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 1
    },
    {
        "id": 20,
        "table_number": "005",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 1
    },
    {
        "id": 21,
        "table_number": "006",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 1
    },
    {
        "id": 22,
        "table_number": "007",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 1
    },
    {
        "id": 23,
        "table_number": "008",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 1
    },
    {
        "id": 24,
        "table_number": "009",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 1
    },
    {
        "id": 25,
        "table_number": "010",
        "table_active": 0,
        "table_call": 0,
        "id_restaurant": 1
    }
]


const typeDefs = gql`
type Item{
    id: ID!
    title: String!
    description: String!
    price: Int!
    photo: String!,
    id_category: Int!
    id_restaurant: Restaurant!
}

type Restaurant {
    id: ID!
    name: String!
    address: String!
    mail: String!
    phone: String!
    location: String!
  }

  type Category {
    id: ID!
    name: String!
    photo: String!
  }

  type Tables {
    id: ID!
    table_number: String!
    table_active: Int!
    table_call: Int!
    id_restaurant: Restaurant!
  }


type Query {
    allItems: [Item]
    allTables: [Tables]
}
`

const resolvers = {
    Query: {
        allItems: () => items,
        allTables: () => tables
    },
    Item: {
        id_restaurant: ({ id_restaurant }) => {
            return restaurants.find((e) => {
                return e.id === id_restaurant
            })
        }
    },
    Tables: {
        id_restaurant: ({ id_restaurant }) => {
            return restaurants.find((e) => {
                return e.id === id_restaurant
            })
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()
    .then(({ url }) => {
        console.log(`Server ready ${url}`)
    })