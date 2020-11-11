const fetch = require("node-fetch");

const handler = async function (event) {
  // const API_PARAMS = event.queryStringParameters;
  const { API_TOKEN } = process.env;

  try {
    const response = await fetch(
      "https://api.esv.org/v3/passage/text/?q=John+11:35",
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
