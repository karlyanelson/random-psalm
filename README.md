# Random Psalm

Gets a random Psalm from the [ESV API](https://api.esv.org/) using [Netlify Functions](https://docs.netlify.com/functions/overview/)

[View Website](https://randompsalm.netlify.app/)

## Development

1. Install [Netlify CLI](https://docs.netlify.com/cli/get-started/#installation) globally so you can use [netlify-dev](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md#netlify-functions)

2. You should be [logged in on Netlify CLI](https://docs.netlify.com/cli/get-started/#authentication)

3. Your project should be linked to a `siteID` on Netlify (using `netlify init` or `netlify link`). You can confirm this has been done if you have a `.netlify` folder with a `state.json` file containing your `siteID`.

4. run `npm install` to get `node-fetch` which you'll need to fetch things inside your function

5. add your api key to your netlify environmental variables in the netlify settings ui (your site > site settings > build & deploy > environmental variables)

6. create a `functions/` folder at the root and put your `{FUNCTION NAME}.js` file there

7. add `netlify.toml` pointing to `functions/` folder

8. run `netlify dev` to have a local server and be able to access functions
   - view your site at `http://localhost:8888`
   - the functions will be accessible at `http://localhost:8888/.netlify/functions/function-name`.

## Resources

[Netlify Functions Docs](https://docs.netlify.com/functions/overview/)

[netlify-dev Docs](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md#netlify-functions)

[Basic function calling an api with javascript and node-fetch](https://github.com/netlify/netlify-dev-plugin/blob/74e206e709cd7d2113abbc1142d32232b2d17999/src/functions-templates/js/node-fetch/node-fetch.js) (this is the example you get when you run `netlify functions:create` and choose `node-fetch`)
