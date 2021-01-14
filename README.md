# Assignment 2 - Web API.

Name: Stephen Malone

## Features.

 
 + Feature 1 - Added Upcoming Movies to the API with Mongo Intergration.
 + Feature 2 - Added Top Rated Movies to the API with Mongo Intergration.
 + Feature 3 = Implemented this updated API with my Assignment 1.


## Installation Requirements


```bat
Download the zip version of my API found at https://github.com/StephenMalone99/wad-api-labs-2020
Download the zip version of my Assignment 1 react app found at https://github.com/StephenMalone99/wad2-moviesApp

My assignment one is appearing as a submodule and when you download this project it appears as empty. 
I don't know how to fix this, you have to make the following changes to the react app to get it to work 
with the API once you download it.

Add the following to /api/tmdb-api.js and comment out the previous calls.

  export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTopRatedMovies = () => {
    return fetch(
       '/api/toprated',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
      ).then(res => res.json());
  };

Add the following to package.json in the react app.

,"proxy":"http://localhost:8080"


```

followed by installation

```bat
for the API
Download MongoDB from https://www.mongodb.com/try/download/community
Once that is completed, unzip the API, naivgate to the root folder and then run 'npm install'. 
Once it's completed add the .env file as below and use npm start.

for the React APP
Unzip it, run npm install and then once it is finished run npm start.
```


## API Configuration


```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/movies_db
seedDb=true
secret=ilikecake
```


## API Design


Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies | Gets a list of movies | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/users?action=register| N/A | Register as a user | N/A | N/A
| /api/users | Gets a list of users | Log in as a user | N/A | N/A
| /api/users/{username}/favourites | Gets favourite movies for a user | Adds a favourite | N/A | N/A
| /api/toprated | Gets a list of top rated movies| N/A | N/A | N/A
| /api/upcoming | Gets a list of upcoming movies | N/A | N/A | N/A
| ... | ... | ... | ... | ...


## Security and Authentication


Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.


## Integrating with React App


Link to React App : - https://github.com/StephenMalone99/wad2-moviesApp

~~~Javascript

export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

  export const getTopRatedMovies = () => {
    return fetch(
      '/api/toprated',{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getUpComingMovies = () => {
  return fetch(
    '/api/upcoming',{headers:{
      'Authorization':window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

~~~


## Extra features


## Independent learning.


Figured out how to navigate the API docs of TMDB and how to locate the seed data.
