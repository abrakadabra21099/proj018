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


const test = time => {
    return new Promise(resolv => {
        setTimeout(() => resolv(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Ждем выполнения всех промисов
// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });

// Ждем первый выполнившийся промис
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('all');
});

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))