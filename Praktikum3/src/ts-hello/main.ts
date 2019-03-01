
// // // // // // // // tslint:disable-next-line:no-shadowed-variable
// // // // // // // function log(message) {
// // // // // // //     console.log(message);
// // // // // // // }

// // // // // // // let message = 'Hello World';

// // // // // // // log(message);

// // // // // // function doSomething() {
// // // // // //     for (let i = 0; i < 5; i++) {
// // // // // //         console.log(i);
// // // // // //     }
// // // // // //     console.log('Finally: ' + i);
// // // // // // }
// // // // // // doSomething();
// // // // // let count = 5;
// // // // // count = 'a';

// // // // let pesan; // tipe data default yaitu any
// // // // pesan='abc';
// // // // let percobaan=(<string>pesan).endsWith('c');
// // // // let alternative=(pesan as string).endsWith('c'); //cara kedua
// // // let log = function pesan(){
// // //     console.log(pesan);
// // // }

// // // // code diatas bisa disingkat menggunakan function arrow
// // // let doLog=(pesan)=>{
// // //     console.log(pesan);
// // // }

// // // // atau seperti berikut
// // // let doLog1=(pesan)=>console.log(pesan);
// // interface Point{
// //     x:number;
// //     y:number;
// // }

// // drawPoint=(point:Point)=>{
// //     //....
// // }

// // drawPoint({
// //     x:1,
// //     y:3,
// // })
// class Pointku{
//     a:number;
//     b:number;

//     draw(){
//         //....
//     }

//     getDistance(another:Pointku){
//         //....
//     }
// }

class Pointku1{
    a:number;
    b:number;

    draw(){
        console.log('X' + this.a + ',Y'+this.b);
    }

    getDistance(another:Pointku1){
        //....
    }
}

let coins:Pointku1
coins.draw();

// let objekcoins= new Pointku1;
// objekcoins.a=1;
// objekcoins.b=3;
// objekcoins.draw();