FROM nginx:1.12-alpine
COPY build .
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
