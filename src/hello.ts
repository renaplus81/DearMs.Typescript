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

let adultAge: 18; //18をnumberに変えれば実行できる
adultAge = 20; //コンパイルエラーとなる

