window.onload=function(){
    let array = [];

    if(localStorage.getItem("array")==null){
        let stringbuses=JSON.stringify(array);

        console.log(stringbuses);
        localStorage.setItem("array", stringbuses);
    }

}
function display(arr=undefined) {
    let array;
    
    if(arr==undefined){
    array= JSON.parse(localStorage.getItem("array"));
    }
    else if(localStorage==undefined)
    {
        localStorage.setItem("array",JSON.stringify(array));
        array = JSON.parse(localStorage.getItem("array"));
    }
    else{
        array = arr;
    }
    
    let data= "";
    if(array != undefined){
        array.forEach(function(element, index) {
        let temp = `
      <tr>
      <td>${index+1}</td>
      <td>${element.name}</td>
      <td>${element.source}</td>
      <td>${element.destination}</td>
      <td>${element.number}</td>
      <td>${element.passengerCapacity}</td>
   
      </tr>`;
        data+=temp;
        
    });
     console.log(typeof(array));
     document.getElementById('tablerows').innerHTML = data;

    }
}
display();
    
    
function insert(e) {
    if(localStorage.getItem("array")==null)
    {
        localStorage.setItem("array",stringbuses);
    }
    e.preventDefault();

    let bus = {};
    let ins_name = document.getElementById("ins-name").value;
    let ins_source = document.getElementById("ins-source").value;
    let ins_dest = document.getElementById("ins-dest").value;
    let ins_number = document.getElementById("ins-number").value;
    let ins_passcap = document.getElementById("ins-passcap").value;
 
   bus.name = ins_name;
   bus.source=ins_source;
   bus.destination=ins_dest;
   bus.number=ins_number;
   bus.passengerCapacity=ins_passcap;

   let array=JSON.parse(localStorage.getItem("array"));
   array.push(bus);
   let strrtbuses=JSON.stringify(array);
   localStorage.setItem("array",strrtbuses);

    display();
    location.reload();

    document.getElementsByTagId("ins-name").value = "";
    document.getElementsByTagId("ins-source").value = "";
    document.getElementsByTagId("ins-dest").value = "";
    document.getElementsByTagId("ins-number").value = "";
    document.getElementsByTagId("ins-passcap").value = "";         
 
}

function search() {
    let ser_ele = document.getElementById("searching").value;

    let array= JSON.parse(localStorage.getItem("array"));

    let bus_arr = array.filter(function (element) {
        if (element.source.indexOf(ser_ele) != -1) {
            return element.source.indexOf(ser_ele) != -1;
        }
        else if (element.destination.indexOf(ser_ele) != -1) {
            return element.destination.indexOf(ser_ele) != -1;


        };

    })
    display(bus_arr);
}
