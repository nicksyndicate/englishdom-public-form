import $ from 'jquery';
// import 'input-tel';

function init(el) {
  const $input = $(el).find('.js-ed-form-tel-number');

  return setIntlTel($input);
}

function setIntlTel(el) {
  el.intlTelInput({
    defaultCountry: 'RU',
    autoPlaceholder: true,
    autoHideDialCode: true,
    nationalMode: false,
    preferredCountries: ['RU', 'UA', 'KZ', 'BY', 'AZ'],

    customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
      let place;


      const placeMap = [
        ['ru', '+7 XXX XXX-XX-XX'],
        ['ua', '+380 XX XXX XXX'],
        ['kz', '+7 XXX XXX XXXX'],
        ['by', '+375 XX XXX-XX-XX'],
        ['az', '+994 XX XXX XX XX'],
      ];

      placeMap.forEach((item) => {
        if (item[0] === selectedCountryData.iso2) {
          place = item[1];
        }
      });

      return place || selectedCountryPlaceholder;
    },
  });

  el.intlTelInput('loadUtils', '/vendor/intl-tel-input/lib/libphonenumber/build/utils.js');

  const attr = document.body.getAttribute('data-country');
  const country = attr || 'RU';

  try {
    el.intlTelInput('selectCountry', country);
  } catch (e) {
    el.intlTelInput('selectCountry', 'RU');
  }

  return el;
}

export default init;
