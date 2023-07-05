
var input = document.getElementById("search");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("image-button").click();
  }
});

const editableText= document.getElementById('editable-text');

if(localStorage.getItem('savedText')){
  editableText.textContent=localStorage.getItem('savedText');
}


editableText.addEventListener('input', function(){

  localStorage.setItem('savedText',this.textContent);
})

