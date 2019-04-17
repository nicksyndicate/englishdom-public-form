import $ from 'jquery';
import md5 from 'blueimp-md5/js/md5';
import _ from 'lodash';

const k = s => s.split('').map(c => String.fromCharCode(c.charCodeAt() - 1)).join('');

export default function () {
  return new Promise((resolve) => {
    $.ajax({
      contentType: 'application/vnd.api+json',
      url: k('0bqj.qvcmjd0ydtsg0'),
      success: (response) => {
        resolve({
          [k('Y.DTSG.Uplfo')]: md5(
            `${_.get(response, k('ebub/buusjcvuft/ydtsg'))}${k('wXbwV2MRTCFsFxxPc59p5:Iv{LZ:HOmq')}`,
          ),
        });
      },
    });
  });
}
