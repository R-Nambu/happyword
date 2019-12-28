let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');

let when = document.getElementById('when');
let where = document.getElementById('where');
let what = document.getElementById('what');
let saywhat = document.getElementById('saywhat');

function happytime(){
    let timing = ['今すぐ', '3日以内', '1週間以内', '1ヶ月以内', '今年のうち'];
        let randomNum1 = Math.random();
        let randomeTime = Math.floor(randomNum1 * timing.length);
        when.textContent = timing[randomeTime];
}

function happyplace(){
    let place = ['実家', 'エジプト', 'セブ島', 'イタリア',　'ケニア', 'スイス', '東京'];
        let randomNum2 = Math.random();
        let randomePlace = Math.floor(randomNum2 * place.length);
        where.textContent = place[randomePlace];
        // console.log(randomePlace);

        function happything(){
            let thing1 = ['リビングでくつろぎ', '冷蔵庫を開け', '家族の誰かの手を取り', 'お茶を飲み', 'お風呂に入り'];
            let thing2 = ['ピラミッドに上り', 'ラクダに乗り', 'ナイル川をクルーズし', '砂漠に沈む夕日を見'];
            let thing3 = ['シンベイザメと泳ぎ', 'Topsの丘に立ち', 'マンゴーを食べ', 'プログラミングし', '英語を勉強し', 'ゴキブリと格闘し'];
            let thing4 = ['ピッツァを食べ', 'ワインを飲み', 'イタリア男にナンパされ', 'アマルフィ海岸をドライブし', 'ジェラートを食べ'];
            let thing5 = ['サファリドライブをし', '広大な星空を眺め', 'バーベキューをし', 'カバの泣き声を聞き', 'マサイ族と一緒にジャンプし'];
            let thing6 = ['アルプス山脈を眺め', 'ヨーデルを聴き', 'チーズフォンデュを食べ', 'ハイキングし'];
            let thing7 = ['満員電車に揺られながら', 'コンビニ弁当を温めながら', '人混みを掻き分け', '四角い空を仰ぎながら'];
                let randomNum3 = Math.random();
                let randomeThing1 = Math.floor(randomNum3 * thing1.length);
                let randomeThing2 = Math.floor(randomNum3 * thing2.length);
                let randomeThing3 = Math.floor(randomNum3 * thing3.length);
                let randomeThing4 = Math.floor(randomNum3 * thing4.length);
                let randomeThing5 = Math.floor(randomNum3 * thing5.length);
                let randomeThing6 = Math.floor(randomNum3 * thing6.length);
                let randomeThing7 = Math.floor(randomNum3 * thing7.length);
        
                if(randomePlace == 0){
                    what.textContent = thing1[randomeThing1];
                } else if(randomePlace == 1) {
                    what.textContent = thing2[randomeThing2];
                } else if(randomePlace == 2) {
                    what.textContent = thing3[randomeThing3];
                } else if(randomePlace == 3) {
                    what.textContent = thing4[randomeThing4];
                } else if(randomePlace == 4) {
                    what.textContent = thing5[randomeThing5];
                } else if(randomePlace == 5) {
                    what.textContent = thing6[randomeThing6];
                } else if(randomePlace == 6) {
                    what.textContent = thing7[randomeThing7];
                }
        }

        btn3.addEventListener('click', happything);
        
}

// function happything(){
//     let thing1 = ['リビングでくつろぎ', '冷蔵庫を開け'];
//     let thing2 = ['ピラミッドに上り', 'ラクダに乗り', 'ナイル川をクルーズし', '砂漠に沈む夕日を見'];
//     let thing3 = ['波の音を聞き'];
//     let thing4 = ['あああ'];
//     let thing5 = ['サファリドライブをし'];
//         let randomNum3 = Math.random();
//         let randomeThing1 = Math.floor(randomNum3 * thing1.length);
//         let randomeThing2 = Math.floor(randomNum3 * thing2.length);
//         let randomeThing3 = Math.floor(randomNum3 * thing3.length);
//         let randomeThing4 = Math.floor(randomNum3 * thing4.length);
//         let randomeThing5 = Math.floor(randomNum3 * thing5.length);

//         if(randomePlace == 0){
//             what.textContent = thing1[randomeThing1];
//         } else if(randomePlace == 1) {
//             what.textContent = thing2[randomeThing2];
//         } else if(randomePlace == 2) {
//             what.textContent = thing3[randomeThing3];
//         } else if(randomePlace == 3) {
//             what.textContent = thing4[randomeThing4];
//         } else if(randomePlace == 4) {
//             what.textContent = thing5[randomeThing5];
//         }
// }

function happyword(){
    let word = ['ありがとう', '今日もいい1日だった', '世界は美しい', 'ここから頑張ろう', '心に余裕', 'こんな問題、簡単だ', '笑顔、笑顔', 'まだまだ大丈夫', 'こんな悩みはちっぽけだ'];
        let randomNum4 = Math.random();
        let randomeWord = Math.floor(randomNum4 * word.length);
        saywhat.textContent = word[randomeWord];
}

btn1.addEventListener('click', happytime);
btn2.addEventListener('click', happyplace);
btn4.addEventListener('click', happyword);