#!/bin/bash

curl http://localhost:5000/api/posts -X DELETE -I

curl http://localhost:5000/api/posts \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"ticker":"AAPL", "price":100}'

curl http://localhost:5000/api/posts \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"ticker":"MSFT", "price":200}'

curl http://localhost:5000/api/posts \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"ticker":"GOOG", "price":300}'

curl http://localhost:5000/api/posts \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"ticker":"FB", "price":400}'

curl http://localhost:5000/api/posts \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"ticker":"AMZN", "price":500}'
