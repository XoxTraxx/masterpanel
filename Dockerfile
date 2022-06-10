FROM node:15.13-alpine
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install 
ENV GENERATE_SOURCEMAP false
RUN npm run build
CMD ["npm","start"]