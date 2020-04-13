import parseData from './parse-data';

describe('compare-string test', () => {
  it('1', () => {
    expect(
      parseData(
        [
          {
            "parameter": "cs",
            "value": "zen",
            "Coef": "-0,5186300655"
          },
          {
            "parameter": "mr",
            "value": 3,
            "Coef": "-0,490097097"
          },
          {
            "parameter": "cm",
            "value": "cpc_c12",
            "Coef": "-2,200051172"
          },
          {
            "parameter": "gm",
            "value": "+5:30",
            "Coef": "-1,276465661"
          },
          {
            "parameter": "hr",
            "value": 12,
            "Coef": "0,3458202117"
          },
          {
            "parameter": "fp",
            "value": "skills",
            "Coef": "-0,531287984"
          },
          {
            "parameter": "fp",
            "value": "/l/po-serialam",
            "Coef": "-0,5526287909"
          },
          {
            "parameter": "fp",
            "value": "#",
            "Coef": "0,4575624298"
          },
          {
            "parameter": "fp",
            "value": "#application-main-page-1",
            "Coef": "0,4575624298"
          },
          {
            "parameter": "co",
            "value": "RU",
            "Coef": "1,474141849"
          },
          {
            "parameter": "dr",
            "value": 3,
            "Coef": "0,03014489297"
          },
          {
            "parameter": "fh",
            "value": 3,
            "Coef": "0,03014489297"
          },
        ],
      ),
    ).toEqual({
      source: {
        zen: -0.5186300655,
      },
      month: {
        3: -0.490097097,
      },
      medium: {
        cpc_c12: -2.200051172,
      },
      gmt: {
        '+5:30': -1.276465661,
      },
      hour: {
        12: 0.3458202117,
      },
      fromPage: {
        '/l/po-serialam/': -0.5526287909,
        '/skills/': -0.531287984,
      },
      country: {
        RU: 1.474141849,
      },
      dayOfWeek: {
        3: 0.03014489297,
      },
      hash: {
        3: 0.03014489297,
      },
    });
  });
});
