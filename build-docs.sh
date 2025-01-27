#!/bin/bash -e
rm -rf ./build
mkdir build

# Build sphinx docs.
cd docs
make clean
make html
cd ..

# Build landing page
cd landing
npm ci --frozen-lockfile
npm run build
cd ..

# Combine into one buld directory.
cp -R ./docs/_build/html/. ./build/
cp -R ./landing/out/. ./build/
