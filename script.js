document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('youtube-url');
    const embedButton = document.getElementById('embed-button');
    const videoFrame = document.getElementById('video-frame');

    // ボタンがクリックされた時のイベント
    embedButton.addEventListener('click', () => {
        const url = urlInput.value;
        if (url) {
            const videoId = extractVideoId(url);
            if (videoId) {
                // YouTubeの埋め込みURLをiframeのsrcに設定
                videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
            } else {
                alert('有効なYouTubeのURLを入力してください。');
            }
        }
    });

    // YouTubeのURLから動画IDを抽出する関数
    function extractVideoId(url) {
        // 正規表現を使ってさまざまな形式のURLからIDを抽出
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }
});
