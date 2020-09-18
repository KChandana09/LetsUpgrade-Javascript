window.onload=function(){
    let buses = [];

    if(localStorage.getItem("buses")==null){
        let stringbuses=JSON.stringify(buses);
        localStorage.setItem("buses", stringbuses);
    }

};
function display(bus_data=undefined) {
    let resbuses;
    document.getElementById("tbody").innerHTML="";
    if(bus_data==undefined){
    resbuses=JSON.parse(localStorage.getItem("buses"));
    }
    else{
    resbuses = bus_data;
    }
  
    resbuses.forEach((element, index) => {
      
      document.getElementById("tbody").innerHTML+=`<tr>
      <td>${index+1}</td>
      <td>${element.name}</td>
      <td>${element.source}</td>
      <td>${element.destination}</td>
      <td>${element.number}</td>
      <td>${element.passengerCapacity}</td>
      <tr>`
        
    });

}
display();


function insert(e) {
    e.preventDefault()  
    let bus = {};
    let ins_name = document.getElementById("ins-name").value;
    let ins_source = document.getElementById("ins-source").value;
    let ins_dest = document.getElementById("ins-dest").value;
    let ins_number = document.getElementById("ins-number").value;
    let ins_passcap = document.getElementById("ins-passcap").value;
 
   bus.name = ins_name;
   bus.source=ins_source;
   bus.destination=ins_dest;
   bus.number=Number(ins_number);
   bus.passengerCapacity=Number(ins_passcap);

   let retbus=JSON.parse(localStorage.getItem("buses"));
   retbus.push(bus);
   strrtbuses=JSON.stringify(retbus);
   localStorage.setItem("buses",strrtbuses);

    let retbus1 = JSON.parse(localStorage.getItem("buses"));
    display(retbus1);
    
    document.getElementById("ins-name").value="";
    document.getElementById("ins-source").value="";
    document.getElementById("ins-dest").value="";
    document.getElementById("ins-number").value="";
    document.getElementById("ins-passcap").value="";


 
}

function searchbysource() {
    let ser_ele = document.getElementById("searchsource").value;

    let arrbus= JSON.parse(localStorage.getItem("buses"));

    let bus_arr = arrbus.filter( (element,index)=> {
        
        return element.source.toLowerCase().indexOf(ser_ele.toLowerCase())!=-1;

    })
    display(bus_arr);

}

function searchbydestination(){
    let ser_ele = document.getElementById("searchdest").value;

    let arrbus= JSON.parse(localStorage.getItem("buses"));

    let bus_arr = arrbus.filter( (element,index)=> {
        
        return element.destination.toLowerCase().indexOf(ser_ele.toLowerCase())!=-1;
})
  display(bus_arr);
}

