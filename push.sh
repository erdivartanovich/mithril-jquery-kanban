#!/bin/bash
FILES=$(find * -type f -name '*')
for f in $FILES
do
    echo "Processing $f file..."

    git add $f 
    git commit -m "adding $f"  
    # git push origin master
done
