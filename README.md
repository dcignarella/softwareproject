# softwareproject

things to download:
1. sails.js
2. node.js
3. mongoDB

placing files:
the sails project should be placed inside the current user directory. for me its: 

C:\Users\Damian Cignarella\softwarePorject>

the database should be placed directly in the C: directory: 

C:\dataFinal\db>

running the project:
once installed 2 command windows needed, one for sails.js project and the other for mongoDB.
in one window, cd from the "program files" directory to the "bin" directory and create a "data" directory with a "db" folder inside of it. run "mongod --dbpath /data/db" to run it in that window to point it to that directory and start it up, or "mongod.exe" if the path has been set already.

C:\Program Files\MongoDB\Server\3.4\bin>mongod --dbpath /dataFinal/db

in the other, cd into the project file and type "sails lift" into it, when prompted, press 1 and it will start up but only if mongoDB is running. type http://localhost:1337 to get to the home page.

C:\Users\Damian Cignarella\softwarePorject>sails lift
