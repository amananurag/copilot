Used docker conatiner for ssl
docker pull alpine/openssl
docker run -it -v path-on-host:/path-on-container alpine/openssl
openssl >>
genpkey -algorithm RSA -out /data/private-key.pem
req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /path-on-container/private-key.pem -out /path-on-container/certificate.pem
troubleshooting

- docker ps conatiner_id
- docker exec -it container_id bin/sh
- docker inspect container_id
