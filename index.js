// const tunggu = new Promise(function(resolve, reject){
//     reject('Gagal!');
//     resolve('hello!');
// })

// tunggu.then(word => {
//     console.log(word.split(''));
// }).catch(err => {
//     console.log(err.concat(' proses gagal!'));
// })

// setTimeout(() => {
//     console.log('hello!');
// }, 4000 );

// console.log('Hai');

// const tunggu = (cb) => {
//     setTimeout(() => {
//         console.log('hello');
//         cb();
//     }, 2000)
// }

// tunggu(() => {
//     console.log('Hai');
// });

// const tunggu = (sapa)=> {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log('Hello!');
//             resolve(sapa)
//         }, 2000)
     
//     })
// }

// tunggu('Hai!').then(word => {
//     console.log(word);
// });

// const getDataTunggu = async ()=> {
//     const sapa = await tunggu('Hai')
//     console.log(sapa);

// }

// getDataTunggu()

// async function getData (){
//     const sapa = await tunggu('Setelah Menunggu');
//     console.log(sapa);
// }

// getData();

// const tunggu1 = (sapa)=> {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log('Tunggu 1');
//             resolve(sapa)
//         }, 2000)
     
//     })
// }

// const tunggu2 = (sapa)=> {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log('Tunggu 2');
//             resolve(sapa)
//         }, 2000)
     
//     })
// }

// const tunggu3 = (sapa)=> {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log('Tunggu 3');
//             resolve(sapa)
//         }, 2000)
     
//     })
// }

// tunggu1('tunggu 1 selesai').then(word => {
//     console.log(word);
//     tunggu2('tunggu 2 selesai').then(word2 => {
//         console.log(word2);
//         tunggu3('tunggu 3 selesai').then(word3 => {
//             console.log(word3);
//         })
//     })
// })

// const selesaikan = async()=>{
//     const selesai1 = await tunggu1('tunggu 1 selesai');
//     console.log(selesai1);
//     const selesai2 = await tunggu1('tunggu 2 selesai');
//     console.log(selesai2);
//     const selesai3 = await tunggu1('tunggu 3 selesai');
//     console.log(selesai3);

// }

// selesaikan();

const janjian = (penuhi)=>{
    const callback = (resolve, reject)=>{
        if(penuhi === true){
            resolve('Anda memenuhi janji');
        } else {
            reject('Anda tidak memenuhi janji');
        }
    }
    return new Promise(callback);
}

janjian(false).then(keterangan => {
    console.log(keterangan);
}).catch(pesanGagal => {
    console.log(pesanGagal);
})

// const finishing = async ()=>{
//   try{
//     const selesai = await janjian(false);
//     console.log(selesai);
//   }catch(pesanGagal){
//     console.log(pesanGagal)
//   }
// }

// finishing();

