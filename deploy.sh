#!/bin/bash

if [[ "$1" =~ "-h" ]] || [ -z "$1" ]
then
	echo Usage: ./deploy.sh SSH_ADDRESS
	echo Then ssh into the server and run `pnpm develop`
	exit 1
fi

SSH_ADDRESS="$1"

if ! rsync -zav \
	--exclude='*/node_modules/*' \
	--exclude='*.js' \
	--exclude='*.js.map' \
	--del \
	IsveskiDemo_NodeJS "${SSH_ADDRESS}:~/"
then
	echo "Shipping to ${SSH_ADDRESS} failed" 
	exit 1
fi
