#/bin/bash

curl -i -X POST -H "Content-Type:application/json" -d '{ "uVarietyID" : "ADFA3885",  "name" : "Tomate Perita" }' http://localhost:8080/variety
curl -i -X POST -H "Content-Type:application/json" -d '{ "uVarietyID" : "BCFA3775",  "name" : "Tomate Redondo" }' http://localhost:8080/variety
curl -i -X POST -H "Content-Type:application/json" -d '{ "uVarietyID" : "CBFA3665",  "name" : "Tomate Amarillo" }' http://localhost:8080/variety
curl -i -X POST -H "Content-Type:application/json" -d '{ "uVarietyID" : "DAFA3555",  "name" : "berenjena" }' http://localhost:8080/variety
curl -i -X POST -H "Content-Type:application/json" -d '{ "variety" : "http://localhost:8080/variety/DAFA3555", "farmer" : "http://localhost:8080/farmer/FFAAEE44" }' http://localhost:8080/harvest
curl -i -X POST -H "Content-Type:application/json" -d '{ "mother" : "http://localhost:8080/harvest/1" , "variety" : "http://localhost:8080/harvest/1/variety" , "farmer" : "http://localhost:8080/farmer/FFAAEE44"}' http://localhost:8080/harvest


curl -i -X POST -H "Content-Type:application/json" -d '{ "mother" : "http://localhost:8080/harvest/1" , "variety" : "http://localhost:8080/variety/DAFA3555", "farmer" : "http://localhost:8080/farmer/FFAAEE44" }' http://localhost:8080/harvest


curl -i -X PATCH -H "Content-Type:application/json" -d '{ "shared" : "true" }' http://localhost:8080/harvest/AABBCCEE
curl -i -X POST -H "Content-Type:application/json" -d '{ "uFarmerID" : "FFAAEE44" }' http://localhost:8080/farmer
curl -i -X POST -H "Content-Type:application/json" -d '{ "farmerReceptor" : "http://localhost:8080/farmer/FFAAEE44" , "harvest" : "http://localhost:8080/harvest/AABBCCEE" }' http://localhost:8080/interchange
curl -i -X PATCH -H "Content-Type:application/json" -d ' { "score" : "5" }' http://localhost:8080/interchange/1
curl -X DELETE http://localhost:8080/variety/BCFA3775


curl http://localhost:8080/harvest/search/findBySharedAndVariety?shared=1&variety="http://localhost:8080/variety/DAFA3555"
