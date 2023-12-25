var modifiedResponse = $response.body;
var responseJson = JSON.parse(modifiedResponse);

responseJson.data.vipType = "svip";
responseJson.data.level = 3;

modifiedResponse = JSON.stringify(responseJson);
$done({ body: modifiedResponse });
