import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// News API proxy endpoint
app.get('/api/news', async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' });
    }

    // Validate that the URL is from newsapi.org
    if (!url.includes('newsapi.org')) {
      return res.status(400).json({ error: 'Invalid API URL' });
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('News API Error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: 'Failed to fetch news data',
      details: error.response?.data || error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`News proxy server running on port ${PORT}`);
});