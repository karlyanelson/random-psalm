exports.handler = async function (event, context, callback) {
  const API_PARAMS = event.queryStringParameters;

  const { API_TOKEN, API_URL } = process.env;

  const URL = `${API_URL}?${API_PARAMS}&key=${API_TOKEN}`;

  // console.log("event", event);
  // console.log("API_TOKEN", API_TOKEN);
  // console.log("API_URL", API_URL);
  console.log("API_PARAMS", API_PARAMS);

  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "hello world",
    }),
  };
};
