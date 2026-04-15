import axios from 'axios';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' });
    }

    // Validate origin
    if (!url.includes('newsapi.org')) {
      return res.status(400).json({ error: 'Invalid API URL' });
    }

    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Proxy Error:', error.message);
    res.status(error.response?.status || 500).json({
      error: 'Failed to fetch news data',
      details: error.response?.data || error.message
    });
  }
}
