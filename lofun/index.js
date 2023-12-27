var modifiedResponse = $response.body;
var responseJson = JSON.parse(modifiedResponse);

responseJson.data.timeRemaining = 600;

modifiedResponse = JSON.stringify(responseJson);
$done({ body: modifiedResponse });
