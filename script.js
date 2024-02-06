
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmE4ODA0YjA4NjAxYjExOGExZjFhZjZhMzgzNGI3NCIsInN1YiI6IjY0OWVmZmM0YzlkYmY5MDEwN2UxZTU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EV_B46kJXwRaqfcfXunUdvSCCDyyRzkS13QBLwEgXK4'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(data => {
  const movielist=data.results;
  
  movielist.map((item)=>{
  const name=item.title;
  
  const poster_path=item.poster_path;
  const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  //console.log(imageURL)
   const movies=`<li><img src="${imageURL}"> <h2>${name}</h2>
  </li>`;
  document.querySelector('.results').innerHTML += movies;
  });
  })
  .catch(err => console.error(err));
  
  
  
  function fetchMovie(){
    const searchinput = document.getElementById("searchInput").value;
    let results = document.querySelector('.results');
              results.innerHTML = "";
  //resultss.innerHTML = " ";
  if (!results) {
    results = document.createElement("div");
    results.setAttribute("id", "results");
    document.body.appendChild(results);
  }
    
  fetch("https://api.themoviedb.org/3/search/movie?query=" + searchinput + "&include_adult=false&language=en-US&page=1", options)
  
        .then((response) => response.json())
        .then((response) => {
          for (let i = 0; i < response.results.length; i++) {
           // console.log(response);
            let title = response.results[i].title;
            let release_date = response.results[i].release_date;
            let poster_pat = response.results[i].poster_path;
            let overvieww = response.results[i].overview;
            let card = document.createElement("div");
            card.style = 'style="width: 18rem';
            card.setAttribute("class", "col-lg-3");
    
            let img = document.createElement("img");
            img.classList.add("card-img-top");
           // const poster_path=item.poster_path;
  const imageURL = `https://image.tmdb.org/t/p/w500${poster_pat}`;
            img.src =imageURL;
    
            let ctitle = document.createElement("h5");
            ctitle.setAttribute("class", "card-title");
            ctitle.textContent = title;
    
            let crd = document.createElement("h7");
            crd.setAttribute("class", "card-title");
            crd.textContent = "Date of Release: " + release_date;
    
            let overveiw = document.createElement("h7");
            overveiw.setAttribute("class", "card-title");
            overveiw.textContent = overvieww;
    
            card.append(img);
            card.append(ctitle);
            card.append(crd);
            card.append(overveiw);
            results.prepend(card);
          }
        })
        .catch((err) => console.error(err));
  }
 