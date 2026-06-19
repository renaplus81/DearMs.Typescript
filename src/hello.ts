// function calculateTotal(price: number, quantity: number): number{
//     return price * quantity;
// }

// const result: number = calculateTotal(100, 5);

// function printNames(names: string[]):void{
//     names.forEach(name => console.log(name));
// }

// printNames(["田中", "佐藤", "鈴木"]);

// //interfaceで変数の型をまとめて指定できる(?)

// const mixed: (string | number)[] = ["hello", 42, "world", 100];

// interface User {
//     name: string;
//     age: number;
// }

// const users: User[] = [
//     {name: "太郎", age: 25 },
//     {name: "花子", age: 28 }
// ];

//リテラル型：プリミティブ型の特定の値だけを代入可能にする型を表現できる
// const age = 18;
// //18という値の型になる（18以外は入らないですよの型）

// let adultAge: 18; //18をnumberに変えれば実行できる
// adultAge = 20; //コンパイルエラーとなる
// age = adultAge; ←number型に代入可能(なんなの？)


//ユニオン型:独自で作成できる型。|←これをパイプという。
//(ここでもorという意味っぽい)
//パイプを使って複数の方を許可する。
//数値型と文字列型を結合
// let id: number | string;　みたいな感じです。

//エイリアス (type, Roleという名前の型を作っている)
// type Role = number | string; 
// type EventType = 'click' | 'hover' | 'keydown';
// //ユニオン型とリテラル型

// let firstRole: Role;
// let lastRole: Role;

//エイリアスのユニオン型っていうのもある

//オブジェクトに不当なプロパティやプロパティの不足があるとエラーになる
// type Person = {
//     name: string;
//     age: number;
// };

// const tom: Person = {
//     name: 'Tom',
//     age: 20,
// };

// const bob: Person = {
//     name: 'Bob',
//     age: 30,
//     gender: 'female', //person型にはないプロパティなのでダメです
// };

// const bob = {
//     name: 'Bob',
//     age: 30,
//     gender: 'female'.
// };

// const bobAsPerson: Person = bob;

//オプショナルプロパティ、なくてもあってもいい奴には？をつける。

// type Drink = | 'コーンポタージュ' |'ジャスミンティー'|'ミルクティー';
// type Price = 3|4|5;
// const items:{
//     name: Drink;
//     price: Price;
// }[]=[
//     {name:'コーンポタージュ', price: 3},
//     {name:'ジャスミンティー', price: 5},
//     {name:'ミルクティー', price: 4}
// ];
//→→他の製品や価格の組み合わせはエラーになる
//リテラル型＝値「そのもの」を型にすること。文字が型になる。
//ユニオン型＝複数の型を｜でまとめること。
//型エイリアス＝型に名前をつけること。
//型を定義することで、何回もパイプを使わずに変数の型宣言に使うことができる（変数の再利用）


//読み取り専用プロパティ
//読み取り専用プロパティは値の変更は許可されない

//Array型
//↓は、number | stringという推測をしてくれる
// const nums = [1,2,3,4,5, 'six'];

//tuple型、javascriptには存在しないデータを表現できる型。
// type RGB = [red: number, green: number, blue: number];
//↑ラベル付きtuple🌷

//インターセクション型
//ユニオン型のように複数の型を組み合わせて新しい型を作成するため
//何が違うかというと、｜ではなく&であるということ。
// type Engine = {
//     engineType: string;
//     volume: number;
// };

// type Wheels = {
//     wheelCount: number;
// };

// type Car = Engine & Wheels;

// const myCar: Car = {
//     engineType = 'V8',
//     volume = 3000,
//     wheelCount = 4,
// };


//any型（ほぼ使わないべき）
//何でも入ってしまう
// let value1: any = 1;
// value1 = 'noTypeCheck';
// value1.nocheck(); //実行してからじゃないとエラーがわからない。
// let value2 = [1,2,3];
// let value3 = value1 + value2;
//型チェックがされないためエラーになる（？）

//unknown型
//anyと同じく、どんな型の値でも代入できる
//どんな型が来るかわからないよ、と教えてくれる
//別のデータをデータを取る時に、型がない場合もあるかもしれないという（？）
// let value1: unknown = 1;
// let value2: number = value1;


// let value3: unknown = 10;
// if(typeof value3 === 'number'){
//     console.log(value3 + 1);
// }


//関数

// //関数型↓↓↓↓
// //:以降は変数の型。
// let myFunction: (arg1:number, arg2:number)=> boolean;

// myFunction = function(arg1, arg2){
//     return arg1 > arg2;
// };

// console.log(myFunction(2,1));

// //アロー関数のとき
// myFunction = (arg1, arg2) => {
//     return arg1 > arg2;
// };
// console.log(myFunction(2,1));


// //これが関数型らしい
// const addNumbers: (a: number, b: number) => number = (a, b) => a + b;
// //const addNumbers　→ 定数
// //=> numberまでがアロー関数の型定義
// //=> numberに数値型を返す
// //addにはnumberを２つ受け取ってnumberを返す関数しか入れられない
// const addNumbers2: (a: number, b: number) => string = (a, b) => `${a} + ${b}`;
// //戻り値がstringとなったら、文字列にしなくてはいけない(`${a} + ${b}`)
// console.log(addNumbers(10,5));


//関数型とエイリアス
// type Calc = (a: number, b: number) => number;
// const plusCalc: Calc = (a, b) => a + b;
// const minusCalc: Calc = (a, b) => a - b;
// const timesCalc: Calc = (a, b) => a * b;
// const devideCalc: Calc = (a, b) => a / b;
// console.log(devideCalc(10,5));


// //インデックスシグネチャー　index signature
// interface FruitStock {
//     [i: string]: number;
// }
// //iは何個キーが追加されるかわからない（iではなくでもなんのアルファベットでもいい）
// //文字列のキーに対してnumberが入る

// const fruit: FruitStock = {};
// fruit.apple = 3;
// fruit.orange = 5;
// fruit.banana = 'many'; //数字ではないのでエラー




//クラス:めちゃくちゃ出てきます
//クラスからできたものはインスタンスという
// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
// //インスタンス
// const tom = new Person('Tom', 30);


// //オプショナルプロパティと読み取り専用プロパティ
// class Person{
//     readonly name: string;
//     age: number;
//     hobbies?: string[];

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     greet(greeting: string): void {
//         console.log(`Hello ${greeting}.`);
//     }
// }

// let tom: Person;
// tom = new Person('Tom', 30);
// tom.hobbies = ['running'];
// console.log(tom.hobbies);
// tom.greet(tom.name);
// //まじでわかんない



//クラスの継承:extends


//アクセサ(setter, getter)

// class Circle {
//     private _radius: number;

//     constructor(radius: number){
//         this._radius = radius;
//     }
// //ゲッター
//     get radius(): number {
//         console.log('半径を取得');
//         return this._radius;
//     }

// //セッター
//     set radius(value: number){
//         if(value <= 0){
//             throw new Error('不正な値です');
//         }
//         console.log('半径を設定');
//         this._radius = value; //これ何？
//     }
// }



// //staticプロパティ
// class Circle {
//     static PI: number = 3.14;
//     radius: number;
    
//     constructor(radius: number){
//         this.radius = radius;
//     }

//     getArea():number{
//         return Circle.PI * this.radius * this.radius;
//     }
// }
// console.log(Circle.PT);

// const circleA = new Circle(5);
// console.log(circleA.getArea());

// const circleB = new Circle(10);
// console.log(circleB.getArea());


// //抽象クラスと抽象メソッド
// abstract class Animal {
//     abstract makeSound(): void;

//     move() : void{ //テキストには()なかったので注意
//         console.log('The animal is moving.');
//     }
// }