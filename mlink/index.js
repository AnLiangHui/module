var modifiedResponse = $response.body;
var responseJson = JSON.parse(modifiedResponse);

responseJson.data.vipType = "free";
responseJson.data.level = 3;
responseJson.data.expireTime = 1703578727384;
responseJson.data.role = "anonymous";

modifiedResponse = JSON.stringify(responseJson);
$done({ body: modifiedResponse });
