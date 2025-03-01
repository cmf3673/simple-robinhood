#!/bin/bash

curl http://localhost:3001/api/stocks -X DELETE -I

curl http://localhost:3001/api/stocks \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"ticker":"AAPL", "prices":[100]}'

curl http://localhost:3001/api/stocks \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"ticker":"MSFT", "prices":[200]}'

curl http://localhost:3001/api/stocks \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"ticker":"GOOG", "prices":[300]}'

curl http://localhost:3001/api/stocks \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"ticker":"FB", "prices":[400]}'

curl http://localhost:3001/api/stocks \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"ticker":"AMZN", "prices":[500]}'
