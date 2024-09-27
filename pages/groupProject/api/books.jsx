// pages/groupProject/api/books.js
import fs from 'fs';
import path from 'path';

const jsonFilePath = path.join(process.cwd(), 'pages/groupProject/api/books.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the JSON file:', err);
        return res.status(500).json({ error: 'Error reading the JSON file' });
      }

      try {
        const books = JSON.parse(data);
        res.status(200).json(books);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        res.status(500).json({ error: 'Error parsing JSON' });
      }
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}