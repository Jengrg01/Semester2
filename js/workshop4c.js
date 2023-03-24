async function getData(){
    try{
        let name = ' '
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        data.forEach((user) =>{
            name += `Name: ${user.name}<br>Email: ${user.email}<br>`
        })
        document.getElementById("sections").innerHTML=name;
    }
    catch (error){
        document.getElementById("sections").innerHTML=error;
    }
}
getData();
/*async function getData(){
    try{
        let name=' ';
        let status=' ';
        let id="";
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        data.forEach((user) =>{
            status = user.completed;
            id = user.id
            if (status===true && id<=50){
                name +=`Userid: ${user.userId}<br>Title: ${user.title}<br>Status: ${user.completed}<br>`
            }
        })
        document.getElementById("sections").innerHTML=name;
    }
    catch (error){
        document.getElementById("sections").innerHTML=error;
    }
}*/
getData();