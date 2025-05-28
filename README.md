# Component Haven

## Описание проекта
Component Haven - это проект, разработанный с использованием Spring Boot и Gradle.

## Структура проекта

```
.
├── src/                    # Исходный код проекта
│   ├── main/              # Основной код приложения
│   │   ├── java/         # Java исходный код
│   │   │   └── com/example/component_haven/
│   │   │       ├── controllers/    # REST контроллеры
│   │   │       ├── service/        # Бизнес-логика
│   │   │       ├── repository/     # Репозитории для работы с БД
│   │   │       ├── entity/         # Сущности базы данных
│   │   │       ├── dto/            # Data Transfer Objects
│   │   │       ├── config/         # Конфигурационные классы
│   │   │       └── ComponentHavenApplication.java  # Точка входа
│   │   └── resources/    # Ресурсы приложения
│   └── test/              # Тесты
├── build/                 # Директория сборки
├── gradle/                # Файлы конфигурации Gradle
├── .gradle/              # Кэш Gradle
├── .git/                 # Директория Git
├── .idea/                # Настройки IDE IntelliJ IDEA
├── .vs/                  # Настройки Visual Studio
├── build.gradle          # Конфигурация сборки Gradle
├── settings.gradle       # Настройки проекта Gradle
├── gradlew               # Gradle Wrapper для Unix-систем
├── gradlew.bat           # Gradle Wrapper для Windows
├── Dockerfile            # Конфигурация Docker
├── compose.yml           # Конфигурация Docker Compose
└── .gitignore           # Игнорируемые Git файлы
```

## Структура исходного кода

### Основные компоненты

- **controllers/** - REST API контроллеры, обрабатывающие HTTP запросы
- **service/** - Слой бизнес-логики, реализующий основную функциональность приложения
- **repository/** - Интерфейсы для работы с базой данных
- **entity/** - JPA сущности, представляющие таблицы в базе данных
- **dto/** - Объекты передачи данных между слоями приложения
- **config/** - Конфигурационные классы Spring Boot
- **ComponentHavenApplication.java** - Главный класс приложения

### Ресурсы
В директории `resources/` находятся:
- Конфигурационные файлы (application.properties/yml)
- Статические ресурсы
- Шаблоны

## Требования
- Java (версия указана в build.gradle)
- Gradle
- Docker (опционально)

## Сборка и запуск

### Локальная сборка
```bash
./gradlew build
```

### Запуск через Docker
```bash
docker-compose up
```
