<p><em>Проект пока что очень сырой</em></p>
<h2>Что я хочу сделать</h2>
<p>Создать приложение, в котором присутствует: регистрация и авторизация, поддержка авторизации, возможность добавления контактов, возможность отправки сообщений этим контактам с использованием технологии WebSocket.</p>
<h2>Tech stack</h2>
<p>Backend-код написан на Go с нуля без использования шаблона, но с использованием сторонних Go-модулей. Для создания CLI-команд выбрал Go-библиотеку <a href="https://github.com/spf13/cobra">cobra-cli</a>. Для Frontend выбрал React.js + Vite. База данных у проекта — PostgreSQL, веб-сервер — Nginx.</p>
<h2>Что сделано</h2>
<h3><a href="https://github.com/alekssmv/gochat/tree/main/src/Frontend">Frontend:</a></h3>
<ol>
  <li>Отображение страниц регистрации, логина и списка контактов (Страница со списоком контактов пока что без функционала).</li>
  <li>Динамическое отображение ссылок в навигации.</li>
  <li>Динамическое отображение кнопки "logout".</li>
  <li>Сброс кэша "фронта" после нажатия на "logout".</li>
</ol>
<h3><a href="https://github.com/alekssmv/gochat/tree/main/src/Backend">Backend:</a></h3>
<ol>
  <li>Работа с бд посредством ORM <a href="https://github.com/go-gorm/gorm">gorm</a>.</li>
  <li>Работа с сессиями.</li>
</ol>
<h3><a href="https://github.com/alekssmv/gochat/tree/main/src/Cli">Cli команды:</a>.</h3>
<ol>
  <li>Запуск миграций в бд.</li>
  <li>Удаление данных из бд.</li>
</ol>
<h2>Запуск проекта</h2>
<code>Пока нельзя</code>
