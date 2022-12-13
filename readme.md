# NodeJS application services with docker

1. ✅ API service
2. ✅ AUTH service
3. ✅ FRONTEND service
4. ✅ Running frontend
    - development environment
    ``` shell
        docker-compose -f docker-compose.yml -f docker-compose.developmentyml up --build
    ```
    - production environment
    ``` shell
        docker-compose up --build
    ```
5. ✅ NGINX service
6. ✅ Proxying API requests    
7. ✅ Frontend proxy 