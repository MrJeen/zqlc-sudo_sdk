import { createHmac } from 'crypto';
import axios from 'axios';
import configuration from '../config/base.config';
import _ from 'lodash';

const config = configuration();

export async function sendMessage(msg: string) {
  const secret = _.get(config, 'secret');
  const webhook = _.get(config, 'webhook');
  const timestamp = new Date().getTime();
  const sign = buildSign(timestamp, secret);
  const url = webhook + '&' + 'timestamp=' + timestamp + '&' + 'sign=' + sign;
  const content = {
    msgtype: 'text',
    text: {
      // 限制 20000 bytes以内，这里仅截取 1000 bytes
      content: Buffer.from(msg).subarray(0, 1000).toString(),
    },
  };

  return axios
    .post(url, content)
    .then((res) => {
      if (res.data.errcode) {
        throw Error(res.data.errmsg);
      }
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
}

function buildSign(timestamp: number, secret: string) {
  const stringToSign = timestamp + '\n' + secret;
  const hash = createHmac('sha256', secret)
    .update(stringToSign)
    .digest('base64');
  return encodeURI(hash);
}
