#!/usr/bin/env sh

set -e

host="$1"
port="$2"
cmd="$3"
# echo '1111111111111111111111111111111111111111111111111111111111111111111111'
# echo 'Inspectinggggggggggggggggggggggggggggggg' $host $port
# echo '1111111111111111111111111111111111111111111111111111111111111111111111'

# until $(telnet $host $port); do
until $(telnet $host $port); do
	>&2 echo "Service not Available yet - trying"
	sleep 5
done

>&2 echo "Service is working! Yippie!"

sleep 1

exec $cmd