var inputs=[];
function show_p1(){
    for(var i=1;i<=6;i++);{
        inputs.push(document.getElementById("p1,sent-"+ i));
        document.getElementById("s_p1").innerHTML=inputs.join(". ");
    }
}