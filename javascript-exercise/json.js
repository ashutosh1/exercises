//user names from the image.
var users = [{"name":"Luigi Damiano"},{"name":"Zenith Coboro"},{"name":"Zig Ziglar"},{"name":"Steve Costner"},{"name":"Bill Grazer"},{"name":"Timothy Frazer"},{"name":"Boris Becker"},{"name":"Glenn Gladwich"},{"name":"Jim Jackson"},{"name":"Aaron Kabin"},{"name":"Roy Goldwin"},{"name":"Jason Goldberg"},{"name":"Tim Ferris"},{"name":"Buck Singham"},{"name":"Malcom Gladwell"},{"name":"Joy Rabura"},{"name":"Vid Luther"},{"name":"Tom Glicken"},{"name":"Ray Baxter"},{"name":"Ari Kama"},{"name":"Kenichi Suzuki"},{"name":"Rick Olson"}]

//function to set the interval after it look for suggestion.
function suggest() {
  initial_var = setInterval(function () {findName()}, 200);
}
//finding the matching name and showing those as suggestion.
function findName() {
  var text = document.getElementById("name").value.toLowerCase();
  document.getElementById("sublist").innerHTML = "";
  for (i = 0; i < users.length; i = i + 1) {
    if (users[i].name.toLowerCase().match("^" + text)) {
      document.getElementById("sublist").style.display = "block";
      document.getElementById("sublist").innerHTML += "<li onclick='copy(this)'>" + users[i].name + "</li>";
    }
  }
}
//on click these name should be selected .
function copy(element) {
  document.getElementById("name").value = element.innerText;
  document.getElementById("sublist").innerHTML = "";
  document.getElementById("sublist").style.display = "none";
}


