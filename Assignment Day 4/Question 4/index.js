let friends =[
    {
        name: "Deepu",
        age: "18",
        country: "India",
        hobbies: ['dance','design','play']
    },
    {
        name: "Cherry",
        age: "19",
        country: "US",
        hobbies: ['dance','watch','sing']
    },
    {
        name: "Jothika",
        age: "35",
        country: "Australia",
        hobbies: ['eating','write','read']
    },
    {
        name: "Sruthi",
        age: "40",
        country: "Russia",
        hobbies: ['sleep','Lazy','Eating']
    },
];

function displayCountry(friends){
    console.log("People in India");
    friends.forEach(element =>{
        if(element.country == "India"){
            console.log(element);
        }
    });
}

function displayAge(friends){
    console.log("People with age less than 30");
    friends.forEach(element =>{
        if (element.age<30)
        {
            console.log(element);
        }
    });
}
displayAge(friends);
displayCountry(friends);