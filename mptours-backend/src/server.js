import 'dotenv/config';
import app from './app.js';

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`MP Tours backend running on http://localhost:${PORT}`);
});
