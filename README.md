# Englishdom public form

- скопировать файл ./public/bundles/js/form-logic.min.js к себе в папку
- скопировать файл ./public/bundles/css/intlTelInput.css к себе в папку


- классы, которые начинаются с 'js-' необходимо оставить в форме
- теги можно дополнять своими классами
- после успешной отправки формы к классам 'js-ed-form' и 'js-success-send-ed-form' будет добавлен класс 'is-success'
- после неуспешной отправки формы к соответствующим классам 'js-error-*' будет добавлен класс 'is-error'

- в форме обязательно должен быть email
- остальные поля опциональны - если их нет и параметр registration: true в вызове модуля, форма отработает только на электронный адрес и регистрацию
- для подачи заявки нужны все три поля

```
#html

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

<link rel="stylesheet" href="intlTelInput.css"></script>
<script src="./public/bundles/js/form-logic.min.js"></script>
<script>
  logic({
    internal: true, // false
    registration: true, // false
    phone: true, //false
    firstName: true, // false
    source: 'landing_b', // oprional
    successSendText: 'optional text' //oprional
  });
</script>

<!-- или в js файле -->

import logic from 'from-logic.js';

logic({
  internal: true, // false
  registration: true, // false
  phone: true, //false
  firstName: true, // false
  source: 'landing_b', // optional
  successSendText: 'optional text' //optional
});

```

!

- при подключении формы на сайтах партнёров статистика не собирается
