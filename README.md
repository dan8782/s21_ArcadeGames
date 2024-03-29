# Проект "Arcade Games"

## Обзор Проекта

Привет! В рамках этого проекта мы создали веб-приложение, включающее три игры: Сапер, 2048 и Пятнашки. Также в проекте реализована система аутентификации, регистрации пользователей и страница статистики для отслеживания производительности в играх.

## Структура Проекта

Приложение включает в себя следующие страницы:

1. **Страница Аутентификации (localhost:3000/signIn):**
   - Позволяет пользователям войти в систему.

2. **Страница Регистрации (localhost:3000/signUp):**
   - Позволяет пользователям создать новый аккаунт.

3. **Страница Сапера (localhost:3000/minesweeper):**
   - Отображает игру в Сапер с уровнями сложности: Легкий, Средний и Сложный.
   - Пользователи могут устанавливать флаги на потенциальные места бомб.
   - Условие победы: правильно пометить все места с бомбами.
   - Условие поражения: открыть ячейку с бомбой.

4. **Страница 2048 (localhost:3000/2048):**
   - Отображает игровое поле 4x4 для игры в 2048.
   - Пользователи могут свайпать или использовать стрелки для объединения одинаковых блоков.
   - Игра заканчивается, когда поле полностью заполнено, и счет - это сумма всех значений блоков.

5. **Страница Пятнашек (localhost:3000/tagGame):**
   - Отображает игровое поле 4x4 для игры в Пятнашки.
   - Пользователи могут перемещать блоки с номерами, устраивая их по возрастанию.
   - Отслеживает количество ходов и рекорды.

6. **Страница Статистики (localhost:3000/myStats):**
   - Показывает статистику для каждой игры:
      - Сапер: Количество сыгранных, выигранных и проигранных игр для каждого уровня сложности.
      - 2048: Количество сыгранных игр, лучший результат и среднее количество ходов за игру.
      - Пятнашки: Количество сыгранных игр, лучший результат и среднее количество ходов.

## Модели для Базы Данных

Модели базы данных выбирались с использованием Prisma для сохранения и получения состояния игр, аутентификации пользователей и статистики игр.

## Стиль и Использованные Библиотеки

В разработке использовалась библиотека стилей Material-UI. Для маршрутизации использовался React Router DOM. 

## Командный Проект

Этот проект был командным, и мы успешно объединили усилия для создания разнообразных игр и функциональных страниц.
