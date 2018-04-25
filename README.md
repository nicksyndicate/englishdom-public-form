# Englishdom public form
-------

#### Demo

[https://englishdom.com](https://englishdom.com)

##### Example using

```html
<!-- Add main form file -->
<script src="form-logic.min.js"></script>
<!-- Add tintl-tel-input styles -->
<link rel="stylesheet" href="intlTelInput.css"/>
```

#### Package Managers

```
# NPM
npm install englishdom-form
```

### Form html examples

Registration form:

```html
<form action="" method="POST" novalidate="" class="js-ed-form">
  <div>
    <div>
      <label for="form-name" class="">
        <input id="form-name" type="text" name="first_name" class="js-first_name" placeholder="Имя*" maxlength="25" />
        <p class="js-error-first_name"></p>
      </label>
    </div>
    <div class="">
      <label for="form-email" class="">
        <input id="form-email" type="email" name="email" class="js-email" placeholder="Email*" />
        <p class="js-error-email"></p>
      </label>
    </div>
    <div class="">
      <label for="form-phone" class="">
        <input id="form-phone" name="phone" type="tel" class="js-ed-form-tel-number js-phone" autocomplete="off" />
        <p class="js-error-phone"></p>
      </label>
    </div>
  </div>
  <button type="submit" class="js-ed-form-button">начать бесплатно</button>
</form>
<div>
<div class="js-success-send-ed-form"></div>
```

Application form:

```html
<form action="" method="POST" novalidate="" class="js-ed-form">
  <div>
    <div>
      <label for="form-name" class="">
        <input id="form-name" type="text" name="first_name" class="js-first_name" placeholder="Имя*" maxlength="25" />
        <p class="js-error-first_name"></p>
      </label>
    </div>
  </div>
  <button type="submit" class="js-ed-form-button">начать бесплатно</button>
</form>
<div>
<div class="js-success-send-ed-form"></div>
```

```js
import form from 'form-logic';

form.init({ // метод для инициализации формы
  internal: true,
  registration: false,
  phone: true,
  firstName: true,
  source: 'skype',
  redirectToEd: false,
  successSendText: 'optional text',
  successRegSendCb: [ cb ]
});

function cb() {}

form.uninit(); // метод для сброса формы и удаления слушателей на кнопках
```

```js
var form = require('form-logic.js');

form.init({  // метод для инициализации формы
  internal: true,
  registration: false,
  phone: true,
  firstName: true,
  source: 'skype',
  redirectToEd: false,
  successSendText: 'optional text',
  successRegSendCb: [ cb ]
});

function cb() {}

form.uninit(); // метод для сброса формы и удаления слушателей на кнопках
```

Option | Type | Default | Description
------ | ---- | ------- | -----------
internal | boolean | false | определяет расположение формы на https://englishdom.com или на сторонних ресурсах
registration | boolean | false | определяет тип формы - регистрационная или нет
phone | boolean | false | определяет необходимость передачи номера телефона
firstName | boolean | false | определяет необходимость передачи имени пользователя
source | string | '' | определяет ресурс, с которого поступает заявка
redirectToEd | boolean | false | определяет необходимость редиректа на http://englishdom.com/home/user/login после успешной отправки формы
successSendText | string | '' | определяет текст после успешной отправки формы
successRegSendCb | array | undefined | callbacks array, которые вызываются после успешной отправки формы регистрации
successAppSendCb | function | undefined | callback после успешной отправки формы подачи заявки

ClassName | Tag/Default ClassName | Default | Description
------ | ---- | ------- | -----------
is-success | .js-ed-form | '' | будет добавлен после успешной отправки формы
is-success | .js-success-send-ed-form | '' |  будет добавлен после успешной отправки формы
is-error | .js-ed-form && .js-error-* | '' | будет добавлен после неуспешной отправки формы
