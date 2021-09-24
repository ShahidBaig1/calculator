// let a = document.querySelector("ul");
// let x = [0, 1, 2, 3];
// for (let i = 0; i < x.length; i++) {
//   a.innerHTML += `<li>${x[i]}</li>`;
// }

let data = [
  {
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " Cp6s3jERPl",
    bt: "click me",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " X9geZuQ4",
    bt: "click me",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHwzfHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " Fb",
    bt: "click me",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHw0fHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " 6Vtedj5yslU51peKwy",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " EwHEx4fsVt10QtzMn82",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHw2fHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " wDY6Qmngh072vOWahJwlxq0o",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHw3fHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " KaJqZZa",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHw4fHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " 1LPVKoPE",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501820488136-72669149e0d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " 8l7dg6X2W5U0RwF",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTYyMTk0MDU5Mw&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " FBwg",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " KTetn1wcGHldyRtNtUi9Vd0",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " wO0IDE99WI",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501820488136-72669149e0d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " EB6qVyYTV1P",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTYyMTk0MDU5Mw&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " yyAvhaSG",
    para: "this is pakistan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAzODZ8MHwxfHNlYXJjaHw3fHxjYXR8ZW58MHx8fHwxNjIxOTQwNTkz&ixlib=rb-1.2.1&q=80&w=1080",
    imageName: " HItFouW78",
    para: "this is pakistan",
  },
];

// let a = document.querySelector(".card");
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
//   a.innerHTML += `<img src="${data[i].image}" />
//   `;
//   //   a.innerHTML = `<li>${data[i]}</li>`;
// }

let card = document.querySelector(".card");
for (i = 0; i < data.length; i++) {
  card.innerHTML += `
    <img class="Img" src="${data[i].image}" alt="" />
    <h1 class = "do2">${data[i].imageName}</h1>
    <button class = "aba">${data[i].bt}</button>
    <p class = "ab">${data[i].para}</p>
    
    
    `;
}

document.getElementById("d1").style.backgroundColor = "blue";
