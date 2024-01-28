function closec(){
    document.getElementById("coffee").style.height="0%";
}
function openc(){
    document.getElementById("coffee").style.height="100%";
    document.getElementById("pause").style.display="none";
    document.getElementById("message").style.display="none";
    document.getElementById("cup").style.display="block";
    document.getElementById("play").style.display="block";
}
function hidecup(){
    document.getElementById("cup").style.display="none";
    document.getElementById("play").style.display="none";
    document.getElementById("pause").style.display="block";
    document.getElementById("message").style.display="block";

}
function showcup(){
    document.getElementById("cup").style.display="block";
    document.getElementById("play").style.display="block";
    document.getElementById("pause").style.display="none";
    document.getElementById("message").style.display="none";


}