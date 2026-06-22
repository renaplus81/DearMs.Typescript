// ---------------------------------------------------
// 必須: Character クラスを完成させる
// ---------------------------------------------------
//登場人物を作るというよりは、登場人物がそれぞれ必ず持つ特性をクラスしている
//enemyはここに作らない
class Character {
  name: string;
  hp: number;
  attackPower: number;
 
  // コンストラクタ（ここはお手本として埋めてあります）

  ///敵のコンストラクタはいらないのかな
  constructor(name: string, hp: number, attackPower: number) {
    //🐻主人公も敵もnameにしてたがコンソール出力時に同じ名前になっちゃう
    //でもnameの言葉を変えたらエラーになる
    //ここでenemyを作ったらhpとattackpowerもenemy専用で作らないといけなくなる
    this.name = name;
    this.hp = hp;
    this.attackPower = attackPower;
  }

  // 相手を攻撃するメソッド
  ///void: 戻り値を無視する
  ///voidがついてるからコンソールが出力されないというわけではない
  //でもなんでvoidがあるのかは説明できない
  //なんのためにvoidがついているんですka？？？？？？

  //target: は仮引数。
  //targetにはCharacterの方が入る、ということ
  //‼️Characterの型、というのはCharacterから作られたインスタンスらしいです。
  //attackメソどはCharacter型の相手を一人受け取りますくらいの意味。
attack(target: Character): void {
//ここまで元々書いてありました

    // TODO: target の hp を this.attackPower の分だけ減らす
    // TODO: 攻撃の結果を console.log で表示する
    //       例) 「勇者 の攻撃！ スライム に 20 ダメージ（残りHP: 30）」

    ///最初はinterfaceを使ってたけど、interfaceはデータのかたを定義するもので、
    ///functionは実際の処理(動的なアクション)を実行するものなので
    ///変えた
    ///thisつけるかつけないかわからなかったけど消したらエラーも消えた

    ///残りダメージの表示方法？？

    //一回attackDmg消してみる
    // function attackDmg( name: string, hp: number, attackPower: number){
        //もしhpの方が攻撃より数字が大きい時
        //if文なのかな
        if(target.hp > this.attackPower){
            //残りダメージの表示

            //ここのnumberは型なので変数名ではあリま
                target.hp -= this.attackPower;
            //remainingHpをリターン
            console.log(`${this.name}が${target.name}に${this.attackPower}ダメージを与えた！(残り${target.hp}HP)`);
            return this.hp;
            //this number is not assignable to type voidだって
            //returnがないとコンソールに表示されないんじゃないの？
            //returnがないとコンソールに表示されないのではなく
            //returnがないと「呼び出し元に値を渡せない」ということ（？）
            //結局どうしたら
            //→→→→

            //????
            //倒した
            } else if(target.hp = 0){
            console.log(`${target.name}を倒した！`);
            return this.hp;

            //倒された
            }else if(this.hp = 0){
            console.log(`gameover`);
            return this.hp;
            }

        this.attack(target);
 
        }
    }

    //インスタンスの存在、設計図からobj
    //インスタンスはクラスの外にかきます
    //一回め実行したら何故かenemyが10出てきた。
    //インスタンスは何個でも作れるんですよ←new!

    //引数がclass最初に決めたプロパティの順番じゃないとダメかもしれ
    const yusha = new Character('勇者',100,50);

    //このクラスの外で作ったslimeの変数をattackのメソッドの中で使うのは基本的に考えない
    //相手がスライムだけとは限らないので
    //でもtargetとして使うにはどうしたらいいの？
    //imgettingconfusedfk
    const slime = new Character('スライム',80,30);


    //オブジェクト.メソッド※[.は〜の]
    //一回実行したらundefinedになった。なぜ？→関数の呼び出しを行なっていなかったからかもしれません
    //その後、functionのattackDmgを消したら下の結果になった↓↓↓

     //勇者が[object Object]に50ダメージを与えた！(残り50HP。)と出てきた、
    //何を直したら正確に出るか？
    //今の問題点１：スライムの情報が出てない。
    //２:returnに赤波線あり→return消したらコンソール出力されなくなる
    //３:勇者の体力から攻撃力がマイナスされている


    //yusha.attackならthisはyushaになる
    //()がslimeならtargetがslimeになる
    //console.logいらない？
    console.log(yusha.attack(slime));

    console.log(slime.attack(yusha));


 
 
// ---------------------------------------------------
// 動作確認（必須ライン）
// ---------------------------------------------------
// TODO: 2体つくって attack を呼んでみましょう
//
 
 
// ---------------------------------------------------
// コア: Warrior を継承でつくる
// ---------------------------------------------------
// TODO: Character を継承した Warrior クラスをつくる（extends）
// TODO: attack をオーバーライドして、Character とは違う攻撃にする
//       例) ダメージを2倍にする、専用のログを出す など
  
// ---------------------------------------------------
// 発展（できた人向け）
// ---------------------------------------------------
// TODO: HP が 0 未満にならないように、ゲッター / セッターで管理する
// TODO: 別の職業（Mage など）を追加する
// TODO: Character[] に複数体を入れて、forEach などでまとめて攻撃させる
// TODO: どちらかの hp が 0 以下になったらバトル終了、という流れをつくる