# Especificar la versión de Node.js y la imagen base
FROM node:20-alpine3.18 AS dev

# Establecer el directorio de trabajo en el contenedor
WORKDIR /lsv-api

# Copiar los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
# RUN npm ci --only=production && npm ci
RUN npm i

# Instalar NestJS CLI globalmente
RUN npm install -g @nestjs/cli

# Copiar el resto del código fuente al contenedor
COPY . .

# Exponer los puertos necesarios
EXPOSE 3000
EXPOSE 9229

# Comando por defecto para ejecutar la aplicación en modo depuración
CMD ["npm", "run", "start:debug"]
