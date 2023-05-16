import OSS from 'ali-oss';

export function getOssOmBase64Client({
  region,
  accessKeyId,
  accessKeySecret,
  bucket,
  timeout,
}: {
  region?: string;
  accessKeyId?: string;
  accessKeySecret?: string;
  bucket?: string;
  timeout?: string | number | undefined;
}): OSS {
  return new OSS({
    // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
    region: region ?? process.env.OSS_REGION,
    // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
    accessKeyId: accessKeyId ?? process.env.OSS_ACCESS_KEY,
    accessKeySecret: accessKeySecret ?? process.env.OSS_ACCESS_SECRET,
    bucket: bucket ?? process.env.OSS_BUCKET,
    timeout: timeout ?? process.env.OSS_TIMEOUT,
  });
}
