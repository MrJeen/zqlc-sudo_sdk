import { createHmac } from 'crypto';
import axios from 'axios';
import configuration from '../config/base.config';
import _ from 'lodash';

export async function sendMessage(msg: string) {
  const config = configuration();
  const secret = _.get(config, 'dingtalk.secret');
  const webhook = _.get(config, 'dingtalk.webhook');
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

  try {
    return await axios({
      url,
      method: 'post',
      data: content,
    });
  } catch (e) {}
}

function buildSign(timestamp: number, secret: string) {
  const stringToSign = timestamp + '\n' + secret;
  const hash = createHmac('sha256', secret)
    .update(stringToSign)
    .digest('base64');
  return encodeURI(hash);
}
