# Define a imagem base
FROM node:14-alpine

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos necessários para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código para o container
COPY . .

# Compila o TypeScript
RUN npm run build

# Define as variáveis de ambiente necessárias
ENV MONGO_URI mongodb://db:27017/nome-do-banco-de-dados
ENV PORT 3000

# Expõe a porta da aplicação
EXPOSE $PORT

# Inicia a aplicação
CMD ["npm", "start"]
