//program 1

let angka = new Promise((resolve, reject) => {
    let jumlah = 1 + 3
    if (jumlah === 2){
        resolve('sukses')
    } else {
        reject('gagal')
    }
})

angka.then((pesan) => {
    console.log('Ini adalah pesan ' + pesan)
}).catch((pesan) => {
    console.log('Ini adalah pesan ' + pesan)
})

// program 2

function timer(count, time){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if (count%10 === 0){
                console.log(count, 'response');
                resolve(count);
            } else {
                console.log(count, 'response');
                reject(count);
            }
        }, time)
    });
}

Promise.race([timer(30, 1000), timer(20, 1000), timer(30, 1000)]).then(function(result){
    console.log("race result " + result);
}).catch(function(error){
    console.log("race result" + error);
})