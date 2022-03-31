Drink.destroy_all
puts "creating drinks"


User.destroy_all


Drink.create!([
    {
        name: "MILK GREEN TEA",
        price: 6,
        image: './image/t1.jpg'
    },
    {
        name: "COFFEE MILK TEA",
        price: 6
        image: './image/t2.jpg'
    },

    {
        name: "TARO MILK GREEN TEA",
        price: 5
        image: './image/t3.jpg'
    },

    {
        name: "FRESH TEA"
        price: 3
        image: './image/t4.jpg'
    },

    {
        name: "AMERICANO"
        price: 3
        image: './image/t5.jpg'
    },

    {
        name: "VIETNAMESE ICED COFFEE"
        price: 4
        image: './image/t6.jpg'
    },
    {
        name: "CARAMEL LATTE"
        price: 4
        image: './image/t7.jpg'
    },
    {
        name: "CHAI LATTE"
        price: 4
        image: './image/t8.jpg'
    },

    {
        name: "BANANA SPLIT"
        price: 4
        image: './image/t9.jpg'
    },
    {
        name: "COOKIE MONSTER"
        price: 4
        image: './image/t10.jpg'
    },
    {
        name: "BERRY PEACHY"
        price: 4
        image: './image/t11.jpg'
    },
    {
        name: "FUZZY MANGO"
        price: 4
        image: './image/t12.jpg'
    },
    {
        name: "HAWAIIAN COOLER"
        price: 4
        image: './image/t13.jpg'
    },

    {
        name: "ISLAND BERRY"
        price :4
        image: './image/t14.jpg'
    },

    {
        name: "LAVA FLOW"
        price: 4
        image: './image/t15.jpg'
    },
    {
        name: "MANGO SUNRISE"
        price: 4
        image: './image/t16.jpg'
    },
    {
        name: "TROPICAL PASSION"
        price: 4
        image: './image/t17.jpg'
    }

])
puts "creating users"
User.create!([
{
    username: '12345'

}
])