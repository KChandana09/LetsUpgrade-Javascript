let fridge=["fruits","vegetables","icecreams","chocolates","juices"];
var m;
for(let i=0; i<fridge.length; i++)
{
    m=fridge[i].search('b');
    if(m>0)
    {
        console.log(fridge[i]);
    }
   
}