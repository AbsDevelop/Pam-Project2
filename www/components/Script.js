// This is a JavaScript file

function mostrarImagem(){
    var nome = document.getElementById('nm').value;
    var idade = parseFloat(document.getElementById("id").value);
    var img = document.getElementById("img"); 
  
    if(idade < 18){
      img.src = "https://vandal-us.s3.amazonaws.com/spree/products/5e6bb08557001e076bd5e265/original/uploads_2F1584115784005-ik7p4o68ue9-f19e2a5edf32ab8df446b5c3709d041b_2F54.jpg";
      $('#msg').html("<h6>"+ nome +", assiste essa série mais leve e descontraída, é sobre uma delegacia bem diferente no Brooklyn </h6>");
    }
    if(idade >= 18){
      img.src = "https://nomoremag.com/wp-content/uploads/2020/09/Peaky-Blinders.jpg";
      $('#msg').html("<h6>"+ nome +", essa série é sobre uma família de gângsteres na Inglaterra no começo do século 20, tem sangue, navalhas e apostas!</h6>");
    }
};