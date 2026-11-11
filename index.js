const URL="http://localhost:9000/Students"

// //GET

// fetch("http://localhost:9000/Students")
// .then((res)=>res.json()).then((res1)=>console.log(res1));



//POST
let options ={
    "method":"POST"
    "headers":{
        "content-type":"application/json"

    },
    "body":JSON.stringify({
        "id":"6",
        "name":"Rani",
        "age":22
    })
}

fetch(URL,options).then(res=>{
    if(res.ok){
        console.log(res.statusText,res.status)
    }
}).catch(res=>console.log(res))

// PUT
// const URL="http://localhost:9000/Students/4"
// let options ={
//     "method":"PUT",
//     "headers":{
//         "content-type":"application/json"

//     },
//     "body":JSON.stringify({
//         "id":"4",
//         "name":"Rani",
//         "age":22
//     })
// }
// fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.statusText,res.status)
//     }
// }).catch(res=>console.log(res))


//PATCH
// const URL="http://localhost:9000/data/4"
// let options ={
//     "method":"PATCH",
//     "headers":{
//         "content-type":"application/json"

//     },
//     "body":JSON.stringify({
//         "id":"4",
//         "name":"Raju",
//         "age":22
//     })
// }
// fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.statusText,res.status)
//     }
// }).catch(res=>console.log(res))




// //DELETE
// const URL="http://localhost:9000/Students/4"
// let options ={
//     "method":"DELETE"
   
// }
// fetch(URL,options).then(res=>console.log(res))