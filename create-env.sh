#!/bin/bash
env=$1
if [ "$env" == "dev" ]
then
  cp ./.env.dev ./.env
else 
  cp ./.env.prod ./.env
fi