const got = require('got');

const getContents = async () => {
  console.log('start fetching');
  try {
    const { body } = await got(
      'https://top-api.lokibai.vercel.app/?target=xinquji&range=1',
      {
        responseType: 'json',
      }
    );
    console.log('response', body);
    const contents = body.list
      .map(({ title, desc, url }, i) => {
        return `${i + 1}. [**${title}**](${url}) ${desc}`;
      })
      .join('\n\r');

    console.log('contents', contents);
    return contents;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

module.exports = getContents;

getContents(new Date());
