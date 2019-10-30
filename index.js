//J'assigne l'évènement 'click' et la fonction 'verify' à l'ID 'button'.
document.getElementById('button').addEventListener('click', verify);
//Je déclare la fonction 'verify'.
function verify(){
//La condition demande de vérifier si le pw et le 2ème pw sont identiques.
  if (password.value == ''){
    document.getElementById('password').style.border = '3px solid red';
    document.getElementById('confirmPassword').style.border = '3px solid red';
    alert('Hello, tu n\'as pas rempli le 1er champ');
  }else if (confirmPassword.value == ''){
    document.getElementById('password').style.border = '3px solid red';
    document.getElementById('confirmPassword').style.border = '3px solid red';
    alert('Hello, tu n\'as pas rempli le 2ème champ');
  }else if (password.value == confirmPassword.value ){
    //les bordures s'affichent en vert si le pw et le 2ème pw sont identiques.
    document.getElementById('password').style.border = '3px solid green';
    document.getElementById('confirmPassword').style.border = '3px solid green';
  }else {
    //si la 1ère condition n'est pas remplie, les bordures s'affichent alors en rouge.
    document.getElementById('password').style.border = '3px solid red';
    document.getElementById('confirmPassword').style.border = '3px solid red';
  }
}
