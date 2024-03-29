// CONFIGURATION
// https://github.com/openai/openai-node
const { Configuration, OpenAIApi } = require('openai');

const geocoder = require('../utils/geocode');
const AppError = require('../utils/appError');
const extractStr = require('../utils/extractStr');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// GENERATE TOUR GUIDES
// https://platform.openai.com/docs/api-reference/completions/create
const textCompletion = async (req, res) => {
  /**
   1) Get coordinate from Mapquest
   2) Get completion from OpenAI
  */

  // 1) ------------------------------
  console.log(req.body);

  // const dest = req.body.destination.split(' ');
  const dest = extractStr(req.body.destination);
  console.log(dest);
  const locationReq = [req.body.start, ...dest];
  const location = [];

  try {
    locationReq.map(async (el) => {
      const result = await geocoder.geocode(el);
      const locationRes = {
        type: 'Point',
        coordinates: [result[0].longitude, result[0].latitude],
        address: result[0].formattedAddress,
      };
      location.push(locationRes);
    });
  } catch (error) {
    return new AppError('Mapquest server error', 500);
  }

  // 2) ------------------------------
  const prompt = `Give me the travel plan, which start journey from ${req.body.start}
  to ${req.body.destination} in ${req.body.duration} days.
  The plan comes with budget approximate, agency contact(mobile phone number or email address if possible),
   accommodation and include this options ${req.body.options} too.`;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      // model: 'gpt-3.5-turbo',
      prompt: prompt,
      max_tokens: 3500,
      temperature: 0,
    });

    const data = {
      choices: response.data.choices[0].text,
      usage: response.data.usage,
      location: location,
    };

    // console.log(data.choices);

    res.status(200).json({
      status: 'success',
      data: data,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(500).json({
      status: 'fail',
      error: 'Server error',
    });
  }
};

module.exports = { textCompletion };
