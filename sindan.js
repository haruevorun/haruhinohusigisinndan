(function(){
        'use strict';
         const userNameInput = document.getElementById('user-name');
         const assessmentButton = document.getElementById('assessment');
         const resultDivided = document.getElementById('result-area');
         const tweetDivided = document.getElementById('tweet-area');

      /**
     * 指定した要素の子どもを全て削除する
     * @param {HTMLElement} element HTMLの要素
        */
     function removeAllChildren(element) {
            while (element.firstChild) { // 子どもの要素があるかぎり削除
                element.removeChild(element.firstChild);
            }
           }

         assessmentButton.onclick = () => {
        const userName = userNameInput.value;
        if(userName === 'はるはる')
        { alert('ワシの名前を使う無礼者はどこのどいつじゃ！')
        return; }
        if(userName === 'ハルヒ')
        { alert('それは私よ')
        return; }
        if(userName === 'すずみやはるひ')
        { alert('それは私よ')
        return; }
        if(userName === '涼宮ハルヒ')
        { alert('それは私よ')
        return; }
        if (userName.length === 0)
　　　　　{ alert('名前を入れなさい！');
        return; }
　　　　　
         // 診断結果表示エリアの作成
        removeAllChildren(resultDivided);
        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);

        // TODO ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D&text='
   　　 + encodeURIComponent(result);
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.innerText = 'Tweet #%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D';
    tweetDivided.appendChild(anchor);

    twttr.widgets.load();
    };

    const answers = [
 '{userName}、あんたは宇宙人よ！ウルト◯マンかしら？',
 '{userName}、あんたは超能力者よ！とある魔◯の禁◯目◯',
 '{userName}、あんたは魔法使いよ！◯リー◯ッターよ！ハリ◯ーポッ◯ー！',
 '{userName}、あんたはしがない人間よ、、、、',
 '{userName}、あんたはアニメシリーズに一話程度しか登場しないモブよ。',
 '{userName}、あんたは人間の姿をしたミュータントよ！そうね、◯ルクよハ◯ク！',
 '{userName}、あんたは魔法少女よ！ま◯マギよ！◯どマギ！',
 '{userName}、あんたは何もないけど、後ろに某殺人ノートの死神がいるわ！',
 '{userName}、あんたはサイボーグね！腕からミサイルを飛ばせるのかしら？',
 '{userName}、あんたはアンチス◯イラルのスパイかしら？大グレ◯団が黙っていないわよ',
 '{userName}、あんた喰人ね！月◯に好かれそうね！覚悟しといた方がいいわよ',
 '何してるのよキョン。あんたはしがない人間でしょ'

    ];
       
   /**
    * 名前の文字列を渡すと診断結果を返す関数
    * @param {string} userName ユーザーの名前
    * @return {string} 診断結果
    */
    function assessment(userName) {
        // 全文字のコード番号を取得してそれを足し合わせる
        let sumOfcharCode = 0;
        for (let i = 0; i < userName.length; i++) {
            sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
        }

        // 文字のコード番号の合計を回答の数で割って添字の数値を求める
        const index = sumOfcharCode % answers.length;
        let result = answers[index];

        result = result.replace(/{userName}/g, userName);
        return result;
    }

})();

