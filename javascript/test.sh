#!/bin/bash


counter=1

# while [ $counter -le 10 ]
# do
#   echo $counter
#   ((counter++))
# done

# echo All done
# PS3='Select name in names:'

# names='King Vic Man Quit'
# select name in $names
# do
#   if [ $name == 'Quit' ]
#     then
#       break
#   fi
#   echo hello $name
# done



CLUSTER=rentals
NWORKERS=2

machines="$CLUSTER-m"
for w in `seq 0 $(( $NWORKERS - 1 ))`;
do
   machines="$machines $CLUSTER-w-$w"
   ((counter++))
done

echo $machines
echo $counter
