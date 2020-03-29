# Docker React

#### Enter root
    cd project;
    
#### Install dependencies (on host)
    docker run \
    --rm \
    --volume "$PWD/app":/app \
    --workdir /app \
    --user "$(id -u):$(id -g)" \
    node:12.16.1-alpine yarn
    
#### Add this Alias
###### + no need to install node on host
###### + avoids node version conflicts
    dyarn () { docker run \
    --rm \
    --volume "$PWD/app":/app \
    --workdir /app \
    --user "$(id -u):$(id -g)" \
    node:12.16.1-alpine yarn "$@" }

#### Alias Examples
    # install root dependencies
    cd root; dyarn;
    
    # install global dependency
    cd root; dyarn add dotenv-defaults 
   
   
#### Start containers
    docker-compose up
