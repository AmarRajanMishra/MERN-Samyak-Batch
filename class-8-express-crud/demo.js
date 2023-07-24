let arr = [{
    id : 1,
    Name: 'Ajay'
},
{
    id : 2,
    Name: 'Rajat'
},
{
    id : 3,
    Name: 'Sachin'
},

{
    id : 4,
    Name: 'Vijay'
}
]

const data = arr.find((a)=>{
    return a.id === 3
})
console.log(data)

arr[2]