# Englishdom public form

```
#js 

logic({
  internal: true, // false
  registration: true, // false
  phone: true, //false
  firstName: true, // false
  source: 'landing_b', // oprional
  successSendText: 'optional text' //oprional
});
```



- классы, которые начинаются с 'js-' необходимо оставить в форме
- теги можно дополнять своими классами
- после успешной отправки формы к классам 'js-ed-form' и 'js-success-send-ed-form' будет добавлен класс 'is-success'
- после неуспешной отправки формы к соответствующим классам 'js-error-*' будет добавлен класс 'is-error'



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


<script src="form-page.js"></script>
<link rel="stylesheet" href="intlTelInput.css"></script>

```
