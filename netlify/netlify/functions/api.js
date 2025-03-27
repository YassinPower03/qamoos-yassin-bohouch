// netlify/functions/api.js
try {
  const { handler } = require('../../dist/index.js');
  module.exports.handler = handler;
} catch (error) {
  console.error('Error importing handler from dist/index.js:', error);
  
  module.exports.handler = async (event, context) => {
    console.error('Failed to load app handler, using fallback');
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Server configuration error. Please contact administrator.',
        error: 'Failed to load API handler'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  };
}
