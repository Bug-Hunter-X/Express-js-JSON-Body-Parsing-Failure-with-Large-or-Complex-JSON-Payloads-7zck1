const express = require('express');
const app = express();
// Increased body-limit to handle large JSON payloads
app.use(express.json({ limit: '50mb' }));
app.post('/users', (req, res) => {
  console.log(req.body);
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));