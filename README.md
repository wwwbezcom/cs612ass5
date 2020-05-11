# cs612ass5

This is a node.js running in a docker container. port 8080 exposed in docker and 8081 listened in node server

To run it:

1. In docker, pull node;
2. Clone this repository and go to its dir
3. use 
      docker build -t <random name> .
      command to build an image using the Dockerfile
5. use
      docker run -p 8080:8081 -d <same name as above>
      command to run it in distached mode
6. open visit.html in browser
7. use it

