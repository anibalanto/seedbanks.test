#/bin/bash

curl -i -X POST -H "Content-Type:application/json" -d '{  "uVarietyID" : "1",  "name" : "Tomate Perita" }' http://localhost:8080/variety
curl -i -X POST -H "Content-Type:application/json" -d '{  "uVarietyID" : "2",  "name" : "Tomate Redondo" }' http://localhost:8080/variety
curl -i -X POST -H "Content-Type:application/json" -d '{  "uVarietyID" : "3",  "name" : "Tomate Amarillo" }' http://localhost:8080/variety

