# Englishdom public form
-------

#### Demo

[https://englishdom.com](https://englishdom.com)

##### Example using

```html
<!-- Add main form file -->
<script src="./public/bundles/js/form-logic.min.js"></script>
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
<form action="" method="POST" novalidate="" class="js-ed-form" key="app">
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
  key: "app",
  applicationOnly: true,
  internal: true,
  registration: false,
  phone: true,
  segment: 'kids',
  firstName: true,
  source: 'skype',
  from: 'some text',
  redirectToEd: false,
  partnerTags: '?utm_source=smth&utm_medium=smth',
  successSendText: 'optional text',
  initFormCb: [ cb ],
  loadCb: { start: cb, end: cb },
  successRegSendCb: [ cb ],
  errorRegSendCb: cb
});

function cb() {}

form.uninit(); // метод для сброса формы и удаления слушателей на кнопках
```

```js
var form = require('form-logic.js');

form.init({  // метод для инициализации формы
  key: "app",
  segment: 'kids',
  internal: true,
  internalCls: 'some-class-name',
  registration: false,
  phone: true,
  firstName: true,
  source: 'skype',
  from: 'some text',
  redirectToEd: false,
  partnerTags: '?utm_source=smth&utm_medium=smth',
  successSendText: 'optional text',
  initFormCb: [ cb ],
  loadCb: { start: cb, end: cb },
  successRegSendCb: [ cb ],
  errorRegSendCb: cb
});

function cb() {}

form.uninit(); // метод для сброса формы и удаления слушателей на кнопках
```

Option | Type | Default | Description
------ | ---- | ------- | -----------
key[DEPRECATED] | string | undefined | вносится в html и в config вызова формы, для идентификации формы и её параметров
preReadRegFormCb | function | undefined | используется только для отправки заявки без проверки на ошибки регистрации
internal | boolean | false | определяет расположение формы на https://englishdom.com или на сторонних ресурсах
internalCls | string | js-ed-form | собирает все формы на странице и навешивает события. Должен быть одинаковым для всех форм на странице
registration | boolean | false | определяет тип формы - регистрационная или нет
phone | boolean | false | определяет необходимость передачи номера телефона
firstName | boolean | false | определяет необходимость передачи имени пользователя
segment | string | individual | определяет сегмент студента, подавшего заявку (kids / b2b)
from | string | undefined | параметр необходим при отправке заявки на занятия с преподавателем
source | string | '' | определяет ресурс, с которого поступает заявка
redirectToEd | boolean | false | определяет необходимость редиректа на http://englishdom.com/home/user/login после успешной отправки формы
successSendText | string | '' | определяет текст после успешной отправки формы
partnerTags | string | '' | utm метки, которые будут добавлены к api url (пример: "?utm_source=smth&utm_medium=smth")
initFormCb | array | undefined | callbacks array, которые вызываются в момента старта формы
loadCb | object | undefined | callbacks, которые вызываются на старте и окончании вызова api ({ start: func, end: func })
successRegSendCb | array | undefined | callbacks array, которые вызываются после успешной отправки формы регистрации
successAppSendCb | array | undefined | callbacks array, которые вызываются после успешной отправки формы подачи заявки
errorRegSendCb | function | undefined | callback, который вызывается при ошибке регистрации на сайте englishdom
AMOCRMTagFormAttribute | string | undefined | название атрибута, если указан то из этого атрибута возьмется строка и отправиться в АМО где вставиться как тег к сделке

ClassName | Tag/Default ClassName | Default | Description
------ | ---- | ------- | -----------
is-success | .js-ed-form | '' | будет добавлен после успешной отправки формы
is-success | .js-success-send-ed-form | '' |  будет добавлен после успешной отправки формы
is-error | .js-* && .js-error-* | '' | будет добавлен после неуспешной отправки формы (* - error name like 'email')

### Form html examples

You can set 'data-country' attribute in body tag and phone input will set correct country flag.
Default value is 'RU'. 
Example: 

```html
<body data-country='GB'></body>
```
