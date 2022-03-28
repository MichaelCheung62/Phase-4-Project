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

    }
])
puts "creating users"
User.create!([
{
    username: '12345'

}
])