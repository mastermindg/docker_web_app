# docker_web_app

Testing NodeJS out with express in Docker


## Watchtower

We're using Watchtower to update the container locally with the latest tag.

Watchtower pulls down the `latest` tag.

## Deploy

```
docker-compose stop && docker-compose rm -f && docker-compose up -d
```

Open a browser and go to http://localhost/8080
