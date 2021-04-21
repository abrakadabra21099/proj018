'use strict';

// console.log('Запрос данных...');

// new Promise((resolv, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
        
//         resolv(product);
//     }, 2000);
// }).then(product => {
//     // setTimeout(() => {
//     //     product.status = 'order';
//     //     console.log(product);
//     // }, 2000);
//     // const req2 = new Promise((resolv, reject) => {
//     return new Promise((resolv, reject) => {
//             setTimeout(() => {
//             product.status = 'order';
//             // resolv(product);
//             reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;    
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('Error!');
// }).finally(() => {
//     console.log('Finally.');
// });


// const test = time => {
//     return new Promise(resolv => {
//         setTimeout(() => resolv(), time);
//     });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Ждем выполнения всех промисов
// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });

// Ждем первый выполнившийся промис
// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(name => {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// const answers = ['IvAn', 'AnnA', 'HellO'];
// const res = answers.map(item => item.toLowerCase());

// console.log(res);

// every/some

// const some = [4, 'fds', 'asdasda'];
// const some = [4, -34, 2, -45e2];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 2, -2e2];
// const res1 = arr.reduce((sum, current) => sum + current.toString());
// const res2 = arr.reduce((sum, current) => `${sum}, ${current.toString()}`);
// const res3 = arr.reduce((sum, current) => `${sum}, ${current.toString()}`, 3);
// const res4 = arr.reduce((sum, current, i) => `${sum}[${i}], ${current.toString()}`);
// const res5 = arr.reduce((sum, current, i) => `${sum}[${i}], ${current.toString()}`, 10);
// const res6 = arr.reduce((sum, current, i) => {
//     console.log(`${sum}, ${current}, ${i}`); // <= no log
//     return `${sum}[${i}], ${current.toString()}`;
// }, 10);

// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// console.log(res6);

const obj = {
    ivan: 'human',
    ann: 'human',
    dog: 'animal',
    cat: 'animal'
};

const arr = Object.entries(obj)
.filter(item => item[1] === 'human')
.map(item => item[0]);

console.log(arr);
