<h1> immense-woodland-80683 </h1>
immense-woodland-80683 is a heroku webapp that is used as a database by notuber (https://github.com/huang5587/comp120-jhuang/tree/master/notuber). immense-woodland uses a postgresql database to store data pertaining to passengers and vehicles. Notuber will access the vehicle database and display existing vehicles on its map interface. 

<h2> Motivations </h2>
Other than to serve the aforementioned notuber, immense-woodland was made to demonstrate familiarity with:
  <ul>
   <li> Creating and deploying with Heroku </li>
   <li> Using Node.js with Express to create a webapp </li>
  <li> Understanding CORS </li>
  <li> Creating and using postgresql database </li>
  <li> Cementing pre-existing knowledge of HTTP requests </li>
     
  </ul>

<h2> Features & Usage </h2>
The output of the web server depends on the path used and HTTP request. 

<h3> /rides path </h3>
Sending a HTTP post request with the appropriate passenger data will return a list of vehicles in the vehicle database. 

<h3> /vehicles path </h3> 
Sending a HTTP post request with the appropriate vehicle data will add that vehicle to the vehicle database. 

