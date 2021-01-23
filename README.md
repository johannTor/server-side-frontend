# API Creation project

In this project we were supposed to create our own API that's ready for applications to consume, and on the way explore the different technology stacks that are available to make this happen. I ended up using the MERN stack which includes: MongoDB for data persistance, Express.js and Node.js for the back end and React for a front end demo website that consumes the API.

## The Data

The API I decided to create and work with consists of random quotes I insterted into the database and made available through sending a request to a server.

The quotes are stored as objects with following 
properties:

    {
      id: the quotes id
      quote: content of the quote
      author: person who said it
      tags: an array of tags fitting for the quote
    }

## The API

Path to the API: https://mern-quote-base.herokuapp.com/

The root path / will return all of the quotes present in the database.

The API can filter the quotes retrieved by calling the /filter page with different tag names added to the query string.

Examples:

/filter?tags=space - gets you all quotes with the 'space' tag

/filter?tags=space,technology - gets you all quotes with the 'space' and 'technology' tags.

## The Front End

Path to the demo website: https://mern-quote-site.netlify.app/

The front end makes fetch requests to the server which will in turn retrieve the data from the database and then send it back to the front end. The frontpage will automatically fetch all the quotes are available and then you can filter them out with the available tag buttons. When those are clicked it will redirect to a different page where another fetch called is made but with filtering options that the server handles.

A good portion of creating the front-end went into figuring out how to use the query string and thats where the 'query-string' module was helpful. Each time the user clicks a tag to filter out the quotes it gets added to the query string of the url. That value is then sent to the API and is used there to make appropriate find call to MongoDB.

I used Heroku to deploy the server and Netlify for the demo website.

In the end this was a good exercise in creating a front-end that communicates with a back-end which connects to MongoDB for the data.