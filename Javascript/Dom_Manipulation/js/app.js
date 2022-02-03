function changeMe()
{
 let element =  document.getElementById("data_change").innerHTML = "Hello, Iam Nazeer Ahmed"
  document.getElementById("data_change").onclick = function(){
    document.getElementById("data_change").innerHTML = "Change me!!!"
  }
}