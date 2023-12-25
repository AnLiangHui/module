var modifiedResponse = $response.body;
var responseJson = JSON.parse(modifiedResponse);

responseJson.data.vipType = "svip";
responseJson.data.level = 3;
responseJson.data.freeTime = 3369600000;

modifiedResponse = JSON.stringify(responseJson);
$done({ body: modifiedResponse });
