export default (rawDataJSON) => {
  let kTable = {};

  rawDataJSON.forEach(item => {
    let param = item.p;
    let value = item.v;
    let coef = item.c;

    /*
      country - co
      dayofweek_req - dr
      from_page_hash - fh
      from_page_pretty - fp
      gmt - gm
      hour_req - hr
      Medium - cm
      month_req - mr
      Source - cs
    * */

    switch (param) {
      case 'fh':
        param = 'hash';
        break;
      case 'cs':
        param = 'source';
        break;
      case 'hr':
        param = 'hour';
        break;
      case 'gm':
        param = 'gmt';
        break;
      case 'fp':
        param = 'fromPage';
        break;
      case 'co':
        param = 'country';
        break;
      case 'dr':
        param = 'dayOfWeek';
        break;
      case 'cm':
        param = 'medium';
        break;
      case 'mr':
        param = 'month';
        break;
      default:
        param = item.parameter;
    }

    if (!kTable[param]) kTable[param] = {};

    // add slashes
    if (param === 'fromPage') {
      if (value !== '/' && value.indexOf('#') !== 0) {
        if (value.indexOf('/l/') === 0) {
          value = `${value}/`;
        } else {
          value = `/${value}/`;
        }
      }
    }

    // not add hashs
    if (!(param === 'fromPage' && value.indexOf('#') === 0)) {
      if (coef === 0) {
        kTable[param][value] = coef;
      } else {
        kTable[param][value] = parseFloat(coef.replace(',', '.'));
      }
    }
  });

  return kTable;
};
