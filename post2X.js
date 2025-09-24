/**
 * RFC3986準拠エンコード
 */
const encodeRFC3986 = str =>
  encodeURIComponent(str).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase());

/**
 * ランダムな nonce を生成
 */
const generateNonce = (length = 32) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

/**
 * ツイート投稿 (OAuth1.0a, v2 API)
 * @param {string} xにポストする文章
 */
function postTweetGAS(formattedPost) {
  const props = PropertiesService.getScriptProperties();
  const consumerKey = props.getProperty('TWITTER_API_KEY');
  const consumerSecret = props.getProperty('TWITTER_API_SECRET');
  const accessToken = props.getProperty('TWITTER_ACCESS_TOKEN');
  const accessTokenSecret = props.getProperty('TWITTER_ACCESS_TOKEN_SECRET');

  if (!consumerKey || !consumerSecret || !accessToken || !accessTokenSecret) {
    throw new Error('スクリプトプロパティに API Key / Secret / Access Token / Access Token Secret を設定してください');
  }

  const url = "https://api.twitter.com/2/tweets"; // POST先URL
  const method = "POST";

  // 投稿本文
  const bodyParams = { text: formattedPost };

  // OAuth 1.0a パラメータ
  const oauthParams = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: generateNonce(),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: accessToken,
    oauth_version: "1.0"
  };

  // OAuth署名作成 (bodyは含めない)
  const paramString = Object.keys(oauthParams)
    .sort()
    .map(k => `${encodeRFC3986(k)}=${encodeRFC3986(oauthParams[k])}`)
    .join("&");

  const baseString = `${method}&${encodeRFC3986(url)}&${encodeRFC3986(paramString)}`;
  const signingKey = `${encodeRFC3986(consumerSecret)}&${encodeRFC3986(accessTokenSecret)}`;

  const signature = Utilities.base64Encode(
    Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_SHA_1, baseString, signingKey)
  );

  oauthParams.oauth_signature = signature;

  // Authorization ヘッダ作成
  const authHeader = "OAuth " + Object.keys(oauthParams)
    .sort()
    .map(k => `${encodeRFC3986(k)}="${encodeRFC3986(oauthParams[k])}"`)
    .join(", ");

  // UrlFetchApp オプション
  const options = {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: authHeader },
    payload: JSON.stringify(bodyParams),
    muteHttpExceptions: true
  };

  // API 呼び出し
  const response = UrlFetchApp.fetch(url, options);
  console.log("HTTP " + response.getResponseCode());
  console.log(response.getContentText());
}
