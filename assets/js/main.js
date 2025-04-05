async function fetchContent() {
    try {
        // const response = await fetch('http://localhost:3000/api/data'); // Node.jsサーバーのエンドポイントを指定
        const response = await fetch('https://portfolio-site-blue-one.vercel.app/'); // vercelのサーバーのエンドポイントを指定

        if (!response.ok) {
            throw new Error('データの取得に失敗しました');
        }

        const data = await response.json();
        console.log(data); // レスポンス全体を確認

        // 背景画像を設定
        const heroSection = document.querySelector('.hero');
        if (data.image && data.image.url) {
            heroSection.style.backgroundImage = `url(${data.image.url})`;
        } else {
            console.error('画像URLが見つかりません');
        }
    } catch (error) {
        console.error('エラー:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchContent);