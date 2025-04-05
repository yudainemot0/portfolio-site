import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; // CORSをインポート

const app = express();
const PORT = 3000;

// CORSを有効化
app.use(cors({
    origin: 'http://127.0.0.1:5500' // 許可するオリジンを指定
}));

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

app.get('/api/data', async (req, res) => {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'X-API-KEY': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error('データの取得に失敗しました');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('エラー:', error);
        res.status(500).json({ error: 'データの取得に失敗しました' });
    }
});

app.listen(PORT, () => {
    console.log(`サーバーが http://localhost:${PORT} で起動しました`);
});