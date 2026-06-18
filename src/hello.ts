function calculateTotal(price: number, quantity: number): number{
    return price * quantity;
}

const result: number = calculateTotal(100, 5);

function printNames(names: string[]):void{
    names.forEach(name => console.log(name));
}

printNames(["田中", "佐藤", "鈴木"]);

//interfaceで変数の型をまとめて指定できる(?)

const mixed: (string | number)[] = ["hello", 42, "world", 100];

interface User {
    name: string;
    age: number;
}

const users: User[] = [
    {name: "太郎", age: 25 },
    {name: "花子", age: 28 }
];

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
type Role = number | string; 
type EventType = 'click' | 'hover' | 'keydown';
//ユニオン型とリテラル型

let firstRole: Role;
let lastRole: Role;

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

type Drink = | 'コーンポタージュ' |'ジャスミンティー'|'ミルクティー';
type Price = 3|4|5;
const items:{
    name: Drink;
    price: Price;
}[]=[
    {name:'コーンポタージュ', price: 3},
    {name:'ジャスミンティー', price: 5},
    {name:'ミルクティー', price: 4}
];
//→→他の製品や価格の組み合わせはエラーになる
//リテラル型＝値「そのもの」を型にすること。文字が型になる。
//ユニオン型＝複数の型を｜でまとめること。
//型エイリアス＝型に名前をつけること。
//型を定義することで、何回もパイプを使わずに変数の型宣言に使うことができる（変数の再利用）