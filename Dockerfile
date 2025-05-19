# Stage 1: Build the app
FROM gradle:8.5-jdk21 AS build
WORKDIR /home/gradle/app
COPY . .
RUN gradle build -x test

# Stage 2: Run the app
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

# Копируем готовый JAR из первого этапа
COPY --from=build /home/gradle/app/build/libs/Component_haven-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]