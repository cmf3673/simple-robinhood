#!/bin/bash

echo "mongoDB should be started"

bash start-rh-server.sh

bash start-SimDAQ.sh

bash start-frontend.sh
