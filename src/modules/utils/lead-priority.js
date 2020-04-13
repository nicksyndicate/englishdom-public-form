// interface LeadPriority {
//   source: string,
//   medium: string,
//   fromPage: string,
// }

import rawDataJSON from './rawdata.json';
import parseData from './parse-data';

const kTable = parseData(rawDataJSON);

export const getK = (
  kObject,
  analyticsCb,
// : LeadPriority
) => {
  let kObj = {};

  const {
    country,
    dayOfWeek,
    fromPage,
    gmt,
    hour,
    medium,
    month,
    source,
    hash,
  } = kObject;

  const getKFromTable = (key, param) => (
    param
      ? kTable[key][param]
        ? kTable[key][param]
        : kTable[key]['none'] || 0
      : kTable[key]['(not_set)'] || 0
  );

  try {
    kObj = {
      kCountry: getKFromTable('country', country),
      kDayOfWeek: getKFromTable('dayOfWeek', dayOfWeek),
      kFromPage: getKFromTable('fromPage', fromPage),
      kGmt: getKFromTable('gmt', gmt),
      kHour: getKFromTable('hour', hour),
      kMedium: getKFromTable('medium', medium),
      kMonth: getKFromTable('month', month),
      kSource: getKFromTable('source', source),
      kHash: getKFromTable('hash', hash),
    };
  } catch (e) {
    console.error(e);
  }

  if (analyticsCb) analyticsCb(kObj);

  const kSum = kObj.kCountry
    + kObj.kDayOfWeek
    + kObj.kFromPage
    + kObj.kGmt
    + kObj.kHour
    + kObj.kMedium
    + kObj.kMonth
    + kObj.kSource
    + kObj.kHash;

  let k;

  if (kSum !== 0) {
    // main formula
    const kRaw = (1 + Math.exp(-(kSum)));

    // round to 9 decimal
    k = Math.round(1 / kRaw * (10 ** 9)) / (10 ** 9);
  } else {
    k = 0;
  }

  return k;
};

export const getPeriod = (
  num,
  // num: number
) => {
  // finding high and low period
  let priorityL = 0;
  let priorityH = 1;
  let period = '';

  if (num === 0) {
    period = '0-10';
  } else if (num === 1) {
    period = '90-100';
  } else {
    priorityL = Math.floor(num * 10);
    priorityH = Math.ceil(num * 10);

    period = `${priorityL}0-${priorityH}0`;
  }

  return period;
};

export const pageConverter = (url) => {
  const urlArray = url.split('/');
  let result;

  if (urlArray[1] === 'l') {
    result = ['', urlArray[1], urlArray[2], ''].join('/');
  } else if (urlArray[1] === '') {
    result = ['', ''].join('/');
  } else {
    result = ['', urlArray[1], ''].join('/');
  }

  return result;
};

export const gmtConverter = (timeGMTOffset) => {
  const time = timeGMTOffset / 60;
  const h = parseInt(time, 10);
  const m = timeGMTOffset % 60;

  if (h === 0 && m === 0) return '0';
  if (m === 0) {
    return `${Math.sign(time) === -1 ? '+' : '-'}${Math.abs(h)}`;
  }

  return `${Math.sign(time) === -1 ? '+' : '-'}${Math.abs(h)}:${Math.abs(m)}`;
};
