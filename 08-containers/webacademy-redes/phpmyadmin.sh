docker run -d --name phpmyadmin-server -p 8000:80 --network rede-ubuntu -e PMA_HOST=mysql-volume-docker -e PMA_PORT=3308 -e PMA_USER=root -e PMA_PASSWORD=pass2023 phpmyadmin
