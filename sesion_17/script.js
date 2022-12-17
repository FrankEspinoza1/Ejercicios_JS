function getUsers() {
  fetch("http://localhost:9000/api/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getUsers();
function getUser(id) {
  fetch(`http://localhost:9000/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}


getUser("639ceb140b19085ecb1aeda0");