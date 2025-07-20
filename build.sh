#!/bin/bash

# Create the main output directory
mkdir -p public/AI

# Copy main website assets
cp index.html public/
cp style.css public/
cp swiper.js public/
cp -r images public/

# Install dependencies and build the AI application
npm install --prefix AI
npm run build --prefix AI

# Copy the built AI application's dist folder into the main output directory
cp -r AI/dist public/AI/

echo "Build complete. Output in 'public' directory."
