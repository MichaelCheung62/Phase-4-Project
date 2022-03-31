Drink.destroy_all
puts "creating drinks"


User.destroy_all


Drink.create!([
    {
        name: "MILK GREEN TEA",
        price: 6,
    },
    {
        name: "COFFEE MILK TEA",
        price: 6
    },

    {
        name: "TARO MILK GREEN TEA",
        price: 5
    },

    {
        name: "FRESH TEA",
        price: 3
    },

    {
        name: "AMERICANO",
        price: 3
    },

    {
        name: "VIETNAMESE ICED COFFEE",
        price: 4
    },
    {
        name: "CARAMEL LATTE",
        price: 4
    },
    {
        name: "CHAI LATTE",
        price: 4
    },

    {
        name: "BANANA SPLIT",
        price: 4
    },
    {
        name: "COOKIE MONSTER",
        price: 4
    },
    {
        name: "BERRY PEACHY",
        price: 4
    },
    {
        name: "FUZZY MANGO",
        price: 4
    },
    {
        name: "HAWAIIAN COOLER",
        price: 4
    },
    {
        name: "ISLAND BERRY",
        price: 4
    },
    {
        name: "LAVA FLOW",
        price: 4
    },
    {
        name: "MANGO SUNRISE",
        price: 4
    },
    {
        name: "TROPICAL PASSION",
        price: 4
    }

])
puts "creating users"
User.create!([
{
    username: '12345'

}
])