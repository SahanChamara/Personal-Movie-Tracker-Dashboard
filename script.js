// let card = document.getElementById("setCard");
// let ratingArr=[];


// fetch("https://dummyapi.online/api/movies")
// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     data.forEach(element => {
//         ratingArr.push(element.rating)
//     })    

// });


let movieDetails = [
    {
        id: 1,
        movie: `The Shawshank Redemption`,
        rating: 9.2,
        image: `https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg`,
        imdb_url: `https://www.imdb.com/title/tt011116/`
    },

    {
        id: 2,
        movie: `The Godfather`,
        rating: 2.9,
        image: `https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ`,
        imdb_url: `https://www.imdb.com/title/tt0068646/`
    },

    {
        id: 3,
        movie: `The Dark Knight`,
        rating: 5.9,
        image: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug`,
        imdb_url: `https://www.imdb.com/title/tt0468569/`
    },
    {
        id: 4,
        movie: `Pulp Fiction`,
        rating: 6.9,
        image: `https://i.pinimg.com/474x/9d/9d/1c/9d9d1cbe949337e0d28f11ecd8d0f7cd.jpg`,
        imdb_url: `https://www.imdb.com/title/tt0110912/`
    },
    {
        id: 5,
        movie: `The Lord of the Rings: The Return of the King`,
        rating: 3.9,
        image: `https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg`,
        imdb_url: `https://www.imdb.com/title/tt0167260/`
    }
]


console.log(movieDetails);

let card="";
movieDetails.forEach(element => {
    card += `<div class="card" style="width: 18rem;">
  <img src="${element.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.movie}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="${element.imdb_url}" class="btn btn-primary">View on IMDB</a>
  </div>
</div>`
});

document.getElementById("setCard").innerHTML=card;

// rating arr
let ratingArr = [];
movieDetails.forEach(element => {
    ratingArr.push(element.rating)
})

//chart
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'The Lord of the Rings: The Return of the King'],
      datasets: [{
        label: 'Rating',
        data: ratingArr,
        borderWidth: 2,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'The Lord of the Rings: The Return of the King'],
      datasets: [{
        label: 'Rating',
        data: ratingArr,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  // Favorite genres pie chart

  let favGenArr=[
    {
        rank:`Action`,
        movies:67
    },
    {
        rank:`Adventure`,
        movies:47
    },
    {
        rank:`Comedy`,
        movies:74
    },
    {
        rank:`Horror`,
        movies:40
    },
    {
        rank:`Drama`,
        movies:163
    },
    {
        rank:`Roamntic`,
        movies:6
    },
    {
        rank:`Documentry`,
        movies:72
    },
    {
        rank:`Western`,
        movies:3
    },
    {
        rank:`Perfrmance`,
        movies:8
    },
    {
        rank:`Educational`,
        movies:1
    }
  ];

