<h1> immense-woodland-80683 </h1>
immense-woodland-80683 is a heroku webapp that is used as a database by notuber (https://github.com/huang5587/comp120-jhuang/tree/master/notuber). immense-woodland uses a postgresql database to store data pertaining to passengers and vehicles. Notuber will access the vehicle database and display existing vehicles on its map interface. I want the reader to know that accessing the webapp on a web browser will not show anything meaningful. This webapp was created as a database server and has no client interface (yet). 

<h2> Motivations </h2>
Other than to serve the aforementioned notuber, immense-woodland was made to demonstrate familiarity with:
  <ul>
   <li> Creating and deploying with Heroku </li>
   <li> Using Node.js with Express to create a webapp </li>
  <li> Understanding CORS </li>
  <li> Creating and using a postgresql database </li>
  <li> Cementing pre-existing knowledge of HTTP requests </li>
     
  </ul>

<h2> Features & Usage </h2>
The output of the web server depends on the path used and HTTP request. I used curl to send HTTP post requests to the web app.

<h3> /rides path </h3>
Sending a HTTP post request with the appropriate passenger data will return a list of vehicles from the vehicle database. Notuber uses this path to display vehicles on its map interface. 

<h3> /vehicles path </h3> 
Sending a HTTP post request with the appropriate vehicle data will add that vehicle to the vehicle database. 

<h3> /vehicle.json and /passenger.json </h3>
Sending a HTTP get request with an existing passenger of vehicle username will return all corresponding vehicle / passenger entries from their respective database tables. 

<h2> Moving Forward </h2>
At the moment management and access of the database is achieved solely through curl. Obvious improvements would be to create an interface to add and manage passenger and vehicle entries. Furthermore, this would likely warrant the creation of a user log-in system to prevent unwanted editing of the databases. Seeing that the webapp has no client interface on its main page, it would be an idea to move notuber onto the heroku server and create a more user-friendly interface for vehicle and passenger interaction. 
