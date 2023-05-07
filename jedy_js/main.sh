#!/bin/bash
 
first=10
second=3
 
echo $(( first + second ))   # addition
echo $(( $first + $second )) # this is also valid
 
echo $(( first - second ))   # subtraction
echo $(( $first - $second )) # this is also valid