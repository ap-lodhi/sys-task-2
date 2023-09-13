function display(num){
    document.getElementById('textarea').value+=num
}

function calculate(){
  var  val =   document.getElementById('textarea').value
  var answer =eval(val)
  document.getElementById('textarea').value=answer
  
}

function clr(){
    
     document.getElementById('textarea').value = ""
}