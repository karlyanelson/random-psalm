// exports.handler = async function (event, context, callback) {
//   const API_PARAMS = event.queryStringParameters;

//   const { API_TOKEN, API_URL } = process.env;

//   const URL = `${API_URL}?${API_PARAMS}&key=${API_TOKEN}`;

//   // console.log("event", event);
//   // console.log("API_TOKEN", API_TOKEN);
//   // console.log("API_URL", API_URL);
//   console.log("API_PARAMS", API_PARAMS);

//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       msg: "hello world",
//     }),
//   };
// };

const fetch = require("node-fetch");

const handler = async function (event) {
  const API_PARAMS = event.queryStringParameters.q;
  const { API_TOKEN } = process.env;

  try {
    const response = await fetch(
      `https://api.esv.org/v3/passage/text/?q=${API_PARAMS}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${API_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data }),
    };
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
