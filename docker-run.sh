git pull
docker build -t smart-city-curitiba-2025 .
docker stop smart-city-curitiba-2025
docker rm smart-city-curitiba-2025
docker run -d -p 3000:3000 --name smart-city-curitiba-2025 --network nginx-proxy-manager_nginx-proxy smart-city-curitiba-2025
