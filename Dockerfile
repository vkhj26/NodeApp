FROM node:18-alpine

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json primero
COPY package.json .

# No tienes dependencias, asÃ­ que no nos hace falta npm install
# Pero lo dejamos preparado por si lo aÃ±adimos luego
RUN npm install --omit=dev || true

# Copiamos el resto de archivos
COPY . .

# Exponemos el puerto que usa nuestra app
EXPOSE 3000

# Comando de arranque
CMD ["npm", "start"]