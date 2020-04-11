document.getElementById("piramide").onclick = function() {piramide()};
var x = document.getElementById("txt1");
function piramide(event) {
if (window.getComputedStyle(x).display === "none") {
    $("#txt1").show();
    $("#piramide").find('i').removeClass('fas fa-chevron-up');
    $("#piramide").find('i').addClass('fas fa-chevron-down');
    event.preventDefault();}
else{
    $("#txt1").hide();
    $("#piramide").find('i').removeClass('fas fa-chevron-down');
    $("#piramide").find('i').addClass('fas fa-chevron-up');
    event.preventDefault();}
}

document.getElementById("historico").onclick = function() {historico()};
var y = document.getElementById("txt2");
function historico(event) {
if (window.getComputedStyle(y).display === "none") {
    $("#txt2").show();
    $("#historico").find('i').removeClass('fas fa-chevron-up');
    $("#historico").find('i').addClass('fas fa-chevron-down');
    event.preventDefault();}
else{
    $("#txt2").hide();
    $("#historico").find('i').removeClass('fas fa-chevron-down');
    $("#historico").find('i').addClass('fas fa-chevron-up');
    event.preventDefault();}
}

document.getElementById("simbolismo").onclick = function() {simbolismo()};
var z = document.getElementById("txt3");
function simbolismo(event) {
if (window.getComputedStyle(z).display === "none") {
    $("#txt3").show();
    $("#simbolismo").find('i').removeClass('fas fa-chevron-up');
    $("#simbolismo").find('i').addClass('fas fa-chevron-down');
    event.preventDefault();}
else{
    $("#txt3").hide();
    $("#simbolismo").find('i').removeClass('fas fa-chevron-down');
    $("#simbolismo").find('i').addClass('fas fa-chevron-up');
    event.preventDefault();}
}