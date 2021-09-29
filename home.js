

function slide(){
let images=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjxJTyIHhYBq00K-eeYvdzNtmvlv6ye4MDA&usqp=CAU",
   "https://images.unsplash.com/photo-1535446937720-e4cad0145efe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/c/c4/Life_%282017_film%29.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjxJTyIHhYBq00K-eeYvdzNtmvlv6ye4MDA&usqp=CAU",
    "https://images.unsplash.com/photo-1535446937720-e4cad0145efe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjxJTyIHhYBq00K-eeYvdzNtmvlv6ye4MDA&usqp=CAU",
    "https://images.unsplash.com/photo-1535446937720-e4cad0145efe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    
];
console.log(images)
let a=0;
setInterval(function(){
if(a==images.length){
    a=0;
}
else{
    let parent=document.getElementById("headline");
    parent.innerHTML=`<img src="${images[a]}"/>`;
    a++;

}
},2000)
}
slide();
////////////////////////////////this was for slide show////////////////
let movies=[
    {
        name: "Mank",
        release: "2020",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZTllMjI0ZGYtM2FmZC00ZmY4LTlkNTYtZThlOWQ1OGQyZTA3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        rating: "6.9",
      },
      {
        name: "Soul",
        release: "2020",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UY209_CR0,0,140,209_AL_.jpg",
        rating: "8.1",
      },
      {
        name: "Joker",
        release: "2019",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        rating: "8.4",
      },
      {
        name: "Avengers:Endgame",
        release: "2019",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        rating: "8.4",
      },
      {
        name: "Parasite",
        release: "2019",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY209_CR0,0,140,209_AL_.jpg",
        rating: "8.6",
      },
      {
        name: "Toy Story 4",
        release: "2019",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        rating: "7.7",
      },
      {
        name: "Cold War",
        release: "2018",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNTJmNzExOGItZTQyMi00YzBlLTk0ZTQtNzAxYmUwZDQwZjU4XkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_UY209_CR0,0,140,209_AL_.jpg",
        rating: "7.6",
      },
      {
        name: "Minari",
        release: "2020",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNWEzOTNjNDgtZDhhYS00ODAxLWIzNGMtYjU3OGZhYmI3ZDU4XkEyXkFqcGdeQXVyMTAzNjk5MDI4._V1_UY209_CR2,0,140,209_AL_.jpg",
        rating: "7.5",
      },
      {
        name: "Crip Camp",
        release: "2020",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTNlMDI3MGYtY2FmNy00ZDdmLTkzZDMtMDg1MWYyM2M4YzQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        rating: "7.7",
      },
];

//console.log(movies);
var movie_list=localStorage.getItem("movies");
if(movie_list==null)
{
   movie_list= localStorage.setItem("movies",JSON.stringify(movies))
}
console.log(movie_list);
 
//////////////////////////////////////////JSON PARSE///////////////////

function add_movies(data){
    let parent=document.getElementById("details");
   parent.innerHTML= null;

data.forEach((element) => {

    let div=document.createElement("div");

    let name=document.createElement("p");
    name.innerHTML=`Name:${element.name}`;

    let release=document.createElement("p");
    release.innerHTML=`Release:${element.release}`;

    let rating=document.createElement("p");
    rating.innerHTML=`Rating:${element.rating}`;

    let poster=document.createElement("img");
    poster.src=element.poster

    div.append(name,release,rating,poster);
    parent.append(div);
    
});
}
add_movies(JSON.parse(localStorage.getItem("movies")));

function sortLH() {
    
    
    let movi = JSON.parse(localStorage.getItem("movies"));
    
    
       movi= movi.sort(function (a, b) {
            return(a.rating - b.rating) ;
            
          });
          add_movies(movi);
         // appendmovies(movi);
   }
  function sortHL() {
    let movi = JSON.parse(localStorage.getItem("movies"));
     movi.sort(function (a, b) {
      return b.rating - a.rating;
    });
    add_movies(movi);
    //appendmovies(movi);
  }

  
