# COVID-19 API

This project tracks estatistics of COVID-19 around the world and by single country.
- https://coelho-covid19tracker.herokuapp.com/

## Credits
https://covid19.mathdro.id/api
https://github.com/mathdroid/covid-19-api

## Getting Started

- Clone the repo
- open with some code editor(**vs code** preferably)

### Prerequisites

- First of all you will need to install **nodeJS**(recommended the LTS version)
- A code editor(as i sad **vs code** preferably)

### Installing

- open the project in the editor
- if you are using vscode open the terminal coupled and type npm install
  else just open your terminal and go to the file where the project is and do the same thing(npm install)

## Running

- open package.json and make sure that your "script" session looks like this:   
  ```
  "scripts": {
    "start": "nodemon index.js"
  },
  ```
- go to the terminal and type in npm run start
- the application is now running on PORT 5000 so you just have to make a request, go to your browser and search for **localhost:5000.**

## Examples

### finding all data: 
  - Do a get request at localhost:5000
  response ex : 
  ```
  {
    "data": {
      "active": "975.372",
      "confirmed": "1.324.907",
      "deaths": "73.703",
      "recovered": "275.832",
      "pct": "0.0170%", 
      "date": "Mon Apr 06 2020 19:33:29 GMT+0000 (Coordinated Universal Time)"
    },
    "countriesList": [...]
  }
  ```
  
### finding data by country:
  - Do a get request passing a country name at localhost:5000/country/{countryName}
  response ex :   
  ``` 
  {
    "country": "Brazil",
    "data": {
      "active": "11.078",
      "confirmed": "11.721",
      "deaths": "516",
      "recovered": "127",
      "pct": "0.0002%",
      "date": "Mon Apr 06 2020 20:56:31 GMT+0000 (Coordinated Universal Time)"
    } 
  }
  ```
 

## Authors

- **Joel Coelho**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
