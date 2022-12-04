# Ultimate Task
The goal of this task is to greate an API endpoint that returns the total population and the name of the country with the highest population from the user's region/continent GET request. 

Timeframe: 2 hours

## Technology Used
- Node.js
- Express
- Axios
- Jset
- Supertest
- Insomnia

## Running and Testing the Server

#### Run the Server
The server can be run by running  ```npm run start```  in the terminal to start the server. After the server is running, this endpoint : ```http://localhost:4000/{region}``` can be used to make a get request through the browser or a tool such as Insomnia. The regions available are Africa, Americas, Asia, Europe, Oceania.

#### Test the Server
The server can be tested by running ```npm run test``` in the terminal. It tests for the total population to be defined, the sample response to the most populated country in the region is correct, and that en error status is responded if the region was misspelled.


## Sample Response


```totalRegionPop```  indicates the total population of the requested region

```mostPopCountry``` indicates the name of the country with the highest population

<br>  

GET request: ```http://localhost:4000/asia```

```
{
	"totalRegionPop": 4604594974,
	"mostPopCountry": "China"
}
```

