var linked = data;

function data (data){
fetch("form.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById("contenedor").innerHTML = data;
  })
};