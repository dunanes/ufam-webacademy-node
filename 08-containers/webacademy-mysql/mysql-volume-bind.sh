# Cuidado com o caminho do volume, é absoluto, tem que mudar de acordo com a necessidade
docker run -d --name mysql-volume-bind -p 3307:3306 -e MYSQL_ROOT_PASSWORD=pass2023 -v /home/dan/ufam-webacademy-node/08-containers/webacademy-mysql/data:/var/lib/mysql mysql
