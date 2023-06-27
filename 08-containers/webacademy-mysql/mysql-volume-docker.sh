docker run -d --name mysql-volume-docker -p 3308:3306 -e MYSQL_ROOT_PASSWORD=pass2023 -v vol-mysql-server:/var/lib/mysql mysql
