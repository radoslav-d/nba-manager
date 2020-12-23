#!/bin/bash

npm install

ng build --prod

cf deploy
