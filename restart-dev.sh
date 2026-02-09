#!/bin/bash

# Kill any process using port 8080
echo "Stopping any existing dev servers on port 8080..."
lsof -ti:8080 | xargs kill -9 2>/dev/null || true

# Wait a moment for the port to be freed
sleep 1

# Start the dev server
echo "Starting Vite dev server..."
npm run dev
