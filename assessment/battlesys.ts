// ---------------------------------------------------
// 必須: Character クラスを完成させる
// ---------------------------------------------------
class Character {
  name: string;
  hp: number;
  attackPower: number;
 
  // コンストラクタ（ここはお手本として埋めてあります）
  constructor(name: string, hp: number, attackPower: number) {
    this.name = name;
    this.hp = hp;
    this.attackPower = attackPower;

  }
 
  // 相手を攻撃するメソッド

  ///void: 戻り値を無視する
  attack(target: Character): void {
    // TODO: target の hp を this.attackPower の分だけ減らす
    // TODO: 攻撃の結果を console.log で表示する
    //       例) 「勇者 の攻撃！ スライム に 20 ダメージ（残りHP: 30）」

    ///攻撃ダメージをhpからマイナス
    ///最初はinterfaceを使ってたけど、interfaceはデータのかたを定義するもので、
    ///functionは実際の処理(動的なアクション)を実行するものなので
    ///変えた
    ///thisつけるかつけないかわからなかったけど消したらエラーも消えた

    ///残りダメージの表示方法むずい
    function attackDmg(hp: number, attackPower: number, name: string){
        //もしhpの方が攻撃より数字が大きい時(>=だと同じ時0になっちゃう)
        if(hp > attackPower){
            // hp -= attackPower; ←これいらない？

            //残りダメージの表示
            //ここのnumberは型なので変数名ではあリャエセn
            let remHp: number = hp -= attackPower;
            //remainingHpをリターン
        console.log(`${name}が${attackPower}ダメージを与えた！(残り${remHp}HP。)`);
        } else {
        console.log(`${name}を倒した！`);
        }
        return attackDmg;
    }
    //なかなかこのコンソールが出力されてくれない
    //returnの位置がわかんない。
    console.log(attackDmg(10, 5, '勇者'));
}
}

 
 
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