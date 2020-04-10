// const URL = 'https://api.github.com/users/puancoffee/followers'
// fetch(`${URL}`).then (res => {
//     return res.json();
// }) .then (data =>{
//     console.log(data)
// })

// using axios 

const URL = 'http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination'

axios.get('https://catfact.ninja/breeds')

.then((response) =>{
    return response    
 })
.then(data =>{
    console.log(data.data.data)

    const getAll = data.data.data;

    getAll.forEach(item => {

        

        if(item.origin === ""){
            item.origin = "none"
        }if (item.coat === ""){
            item.coat = "none"
        }if (item.pattern === ""){
            item.pattern = "none"
        }
        const listHTML = `
        <tr>
            <td>${item.breed}</td>
            <td>${item.country}</td>
            <td>${item.origin}</td>
            <td>${item.coat}</td>
            <td>${item.pattern}</td>
        </tr>

        `
       

        document.getElementById('list').innerHTML += listHTML
    })
    
})