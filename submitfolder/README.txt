install i axios , npm start need to start the react app

Note: github/users api always show maximum limit exceeded aften 2-3 reloads which is 
causing problem thats why i have use "https://api.slingacademy.com/v1/sample-data/users?offset=1&limit=30"
this api but it has no name searching end point thats why is used a different approch where it will
search the profile acording to the search bar input and matched it with (firstname,lastname,e-mail and other 
different parameters).


in this there are two components 

1.fetchimage: fetch images from the api
2.fetchsearch: fetch images according to the input value in the search bar

it uses debounce of 2 mili second
