const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })

            if(cek){
                resolve(cek)
                console.log(cek)
            }else{
                reject(new Error('Ini bukan hari kerja'))
            }
        })
    })
}

// cekHariKerja('senin').then(sukses => { //untuk menhandle jika input parameter bernilai true
//     return sukses
// }).catch(error => { //untuk menghandle jika input parameter bernilai false dan mengembalikan error
//     console.log(error.message);
// })


const cekHari = async ()=> {
    try{
        const sukses = await cekHariKerja('senin');
        return sukses;
    }catch(error){
        console.log(error.message);
    }
}

cekHari();