//user names from the image.
var users = [{"name":"Luigi Damiano"},{"name":"Zenith Coboro"},{"name":"Zig Ziglar"},{"name":"Steve Costner"},{"name":"Bill Grazer"},{"name":"Timothy Frazer"},{"name":"Boris Becker"},{"name":"Glenn Gladwich"},{"name":"Jim Jackson"},{"name":"Aaron Kabin"},{"name":"Roy Goldwin"},{"name":"Jason Goldberg"},{"name":"Tim Ferris"},{"name":"Buck Singham"},{"name":"Malcom Gladwell"},{"name":"Joy Rabura"},{"name":"Vid Luther"},{"name":"Tom Glicken"},{"name":"Ray Baxter"},{"name":"Ari Kama"},{"name":"Kenichi Suzuki"},{"name":"Rick Olson"}]

//main function to match and display the name.
function suggest() {
  var nm = document.getElementById("name").value.toLowerCase();
  disPlaySuggestions(findName(nm));
}
//finding the matching name 
function findName(txt) {
  var matchingName = [];
  for (i = 0; i < users.length; i = i + 1) {
    if (users[i].name.toLowerCase().match("^" + txt)) {
      matchingName.push(users[i].name) ;
    }
  }
  return matchingName;
}
//to display the suggestions
function disPlaySuggestions(names){
  document.getElementById("sublist").innerHTML = "";
  for (i = 0; i < names.length; i = i + 1) {
    document.getElementById("sublist").style.display = "block";
    document.getElementById("sublist").innerHTML += "<li onclick = \"copy('"+names[i]+"')\"> "+names[i]+"</li>"
  }
}
//on click these name should be selected .
function copy(usrnm){
  document.getElementById("name").value = usrnm;
  document.getElementById("sublist").innerHTML = "";
  document.getElementById("sublist").style.display = "none";
}


