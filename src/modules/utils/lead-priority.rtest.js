import { getK, getPeriod, gmtConverter, pageConverter } from './lead-priority';

describe('compare-string test', () => {
  it('1', () => {
    expect(
      getK(
        {
          month: 4,
          hour: 7,
          dayOfWeek: 4,
          gmt: '+3',
          country: 'UA',
          source: 'skillfactory',
          medium: 'partners',
          fromPage: '/promo/',
        },
      ),
    ).toEqual(0.990560553);
  });

  it('2', () => {
    expect(
      getK(
        {
          month: 4,
          hour: 4,
          dayOfWeek: 4,
          gmt: '+7',
          country: 'RU',
          source: 'admitad.com',
          medium: 'spa',
          fromPage: '/l/english_a/',
        },
      ),
    ).toEqual(0.566267241);
  });

  it('3', () => {
    expect(
      getK(
        {
          month: 4,
          hour: 6,
          dayOfWeek: 4,
          gmt: '+6',
          country: 'KZ',
          source: 'youtube',
          medium: 'social',
          fromPage: '/l/youtube_main/',
        },
      ),
    ).toEqual(0.082761012);
  });

  it('4', () => {
    expect(
      getK(
        {
          source: 'abasdaa',
          medium: 'asdavascvas',
          fromPage: 'basda',
        },
      ),
    ).toEqual(0);
  });

  it('5', () => {
    expect(getPeriod(0)).toEqual('0-10');
    expect(getPeriod(0.231)).toEqual('20-30');
    expect(getPeriod(0.731)).toEqual('70-80');
    expect(getPeriod(0.999)).toEqual('90-100');
    expect(getPeriod(1)).toEqual('90-100');
  });

  it('6', () => {
    expect(pageConverter('/')).toEqual('/');
    expect(pageConverter('/prices/')).toEqual('/prices/');
    expect(pageConverter('/l/english_a/')).toEqual('/l/english_a/');
    expect(pageConverter('/l/english_a/sadasaa')).toEqual('/l/english_a/');
    expect(pageConverter('/blog/kogda-pravilo-shall-will-rabotaet-naoborot/')).toEqual('/blog/');
    expect(pageConverter('/skills/glossary/wordset/top-100-dlya-nachinayushhix/')).toEqual('/skills/');
  });

  it('7', () => {
    expect(gmtConverter(-210)).toEqual('+3:30');
    expect(gmtConverter(0)).toEqual('0');
    expect(gmtConverter(-660)).toEqual('+11');
    expect(gmtConverter(150)).toEqual('-2:30');
    expect(gmtConverter(120)).toEqual('-2');
  });
});
