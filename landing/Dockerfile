
### BUILD LANDING PAGE


FROM node:18-alpine AS landing_builder
ARG BASE_PATH="/"
RUN echo $BASE_PATH
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY ./landing_page ./landing_page
WORKDIR /usr/src/landing_page
RUN npm ci
RUN npm run build

### COPY GENERATED FILES FROM EACH BUILD STAGE
FROM scratch
COPY --from=landing_builder /usr/src/landing_page/out/ .

