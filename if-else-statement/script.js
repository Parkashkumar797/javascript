
    function yellowColor(){
        var A=parseInt(document.getElementById("in1").value)
        var B=parseInt(document.getElementById("in2").value)
        
 if(A>B){
    document.getElementById("div1").style.backgroundColor="red"
 }
 else if(A<B){
    document.getElementById("div1").style.backgroundColor="yellow"
 }
 else if(A==B){
       document.getElementById("div1").style.backgroundColor="green"
 }
 else{
    console.log("please enter a valid mumber");
 }
    }

