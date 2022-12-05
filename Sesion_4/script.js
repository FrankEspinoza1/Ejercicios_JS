let users = [
   {
      id: 1,
      nombre: "Andres",
      apellido: "Pacheco",
      edad: 38,
      profesion: "developer",
      created_at: "2022-09-26T06:25:21.118Z",
      modified_at: "",
   },
   {
      id: 2,
      nombre: "Andrea",
      apellido: "Sanchez",
      edad: 25,
      profesion: "profesor",
      created_at: "2022-04-18T14:14:32.879Z",
      modified_at: "",
   },
   {
      id: 3,
      nombre: "Julia",
      apellido: "Ochoa",
      edad: 32,
      profesion: "musico",
      created_at: "2021-12-14T11:53:38.279Z",
      modified_at: "",
   },
   {
      id: 4,
      nombre: "Samuel",
      apellido: "Martinez",
      edad: 29,
      profesion: "programador",
      created_at: "2022-01-26T03:31:15.202Z",
      modified_at: "",
   },
   {
      id: 5,
      nombre: "Roberto",
      apellido: "Mattos",
      edad: 40,
      profesion: "chef",
      created_at: "2022-07-27T02:06:22.760Z",
      modified_at: "",
   },
   {
      id: 6,
      nombre: "Mercedes",
      apellido: "Sanchez",
      edad: 35,
      profesion: "veterinario",
      created_at: "2022-05-01T22:06:35.864Z",
      modified_at: "",
   },
];

//Ordenar de acuerdo a la fecha de creacion de usuario

function ordenarUsuarios(array){
   let usuariosOrd = array.sort((a,b) => b.created_at.localeCompare(a.created_at));
   console.log('Del mas nuevo al mas antiguo:', usuariosOrd);
   let usuariosDro = [...usuariosOrd].reverse();
   console.log('Del mas antiguo al mas nuevo: ', usuariosDro);
}

//FIltrar mes y año
let mes=+prompt("ingrese mes");
let anio=+prompt("ingrese año");

function filtrarUsuarios(year, month) {
    month = month - 1;
  
    const usersFilter = users.filter((element) => {
      let fecha = element.created_at;
      // console.log(fecha);
  
      let nuevoDate = new Date(fecha);
      // console.log(nuevoDate);
  
      let mes = nuevoDate.getMonth();
      // console.log(mes);
  
      let anio = nuevoDate.getFullYear();
      // console.log(anio);
  
      if (anio === year && mes === month) {
        // console.log("heh");
        return true;
      }
    });
    console.log(usersFilter);
  }
  filtrarUsuarios(anio, mes);

// Funcion para crear usuarios
function create() {
   const newUser = {
      id: 0,
      nombre: "",
      apellido: "",
      edad: 0,
      profesion: "",
      created_at: "",
   };
   for (const prop in newUser) {
      if (prop === "id") {
         newUser[prop] = users.length + 1;
      } else if (prop === "edad") {
         newUser[prop] = +prompt(`Ingrese ${[prop]} por favor: `);
      } else if (prop === "created_at") {
         newUser[prop] = new Date().toISOString();
      } else {
         newUser[prop] = prompt(`Ingrese ${[prop]} por favor: `);
      }
    }
  }

// Funcion para leer los usuarios
function read() {
   const root = document.getElementById("root");
   root.innerHTML = "";

   // Leer encabezados
   const keys = Object.keys(users[0]);
   console.log(keys);

   // crear tabla
   const table = document.createElement("table");
   root.append(table);

   // crear encabezados de la tabla
   const thead = document.createElement("thead");
   table.append(thead);
   const tr = document.createElement("tr");
   thead.append(tr);
   keys.forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      tr.append(th);
   });

   // crear cuerpo de la tabla
   const tbody = document.createElement("tbody");
   table.append(tbody);
   users.forEach((user) => {
      const tr = document.createElement("tr");
      tbody.append(tr);
      keys.forEach((key) => {
         const td = document.createElement("td");
         td.textContent = user[key];
         tr.append(td);
      });
   });
   const br = document.createElement("br");
   root.append(br);
   return;
}

// Actualizar usuarios
function update() {
   let id = +prompt("Ingrese id del usuario a actualizar");
   let user = users.find((user) => user.id === id);
   console.log(user);
   if (user) {
      for (const prop in user) {
         if (prop === "id" || prop === "created_at") {
            continue;
         } else if (prop === "edad") {
            user[prop] = +prompt(`Ingrese ${[prop]} por favor: `);
         } else if (prop === "modified_at") {
            user[prop] = new Date().toISOString();
         } else {
            user[prop] = prompt(`Ingrese ${[prop]} por favor: `);
         }
      }
   } else {
      alert("Usuario no existe");
   }
   read();
}

// Eliminar usuario
function del() {    
   const indice = +prompt("Ingrese el id del usuario a eliminar: ")
   const seguro = prompt("Esta usted seguro? Si/No")
   if(seguro.toLowerCase() === "si"){
      users.splice((indice-1),1)
      alert("Usuario eliminado")
   }else if(seguro.toLowerCase() === "no"){
      alert("No se elimino ningun usuario")
   }else {
      alert("Ingrese una respuesta valida")
   }
   read();
}

// Ordenar por fecha
function sort_by_date(reverse = false) {
   if (reverse) {
      users.sort((a, b) => {
         const dateA = new Date(a.created_at);
         const dateB = new Date(b.created_at);
         return dateB - dateA;
      });
   } else {
      users.sort((a, b) => {
         const dateA = new Date(a.created_at);
         const dateB = new Date(b.created_at);
         return dateA - dateB;
      });
   }
   read();
}

// Ordenar los registros de manera ascendente haciendo click y con el siguiente click descendente

function sort_by_headers() {
   const ths = document.querySelectorAll("th");
   ths.forEach((th) => {
      th.addEventListener("click", (e) => {
         sort_by_date();
         read();
      });
   });
}

// Filtrar por (mes o año)
function filter_by() {
   let month = prompt("Ingrese mes");
   const filtered = users.filter((user) => {
      const date = new Date(user.created_at);
      return date.getMonth() == month;
   });
}

// Funcion para crear botones
function new_button(name, color_over, color_out, event) {
   let btn = document.createElement("button");
   btn.textContent = name;
   btn.style.backgroundColor = color_over;
   btn.style.borderRadius = "10px";
   btn.style.color = "white";
   btn.style.height = "30px";
   btn.style.width = "100px";
   btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = color_over;
   });
   btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = color_out;
   });
   btn.addEventListener("click", () => {
      event();
   });
   document.body.appendChild(btn);
}

function main() {
   read();
   sort_by_headers();
   //create
   new_button("Crear", "lightgreen", "green", create);
   //read
   new_button("Leer", "lightgreen", "blue", read);
   //update
   new_button("Actualizar", "lightgreen", "ligthorange", update);
   //delete
   new_button("Borrar", "lightgreen", "ligthred", del);
   // Filtrar por
   new_button("Filtrar", "lightgreen", "ligthbrown", filter_by);
}

main();