const showMonth = (err, arr) => {
    if(arr.length>0) {
      arr.map(x => console.log(x))
    } else {
      throw err
    }
  }
  
const getMonth = (callback) => {
   setTimeout(() => {
     let error = false
     let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei','juni','juli','agustus','september','oktober','november','desember']
     if (!error) {
       callback(null, month)
     } else {
       callback(new Error('Sorry Data Not Found'), [])
      }
   }, 4000)
 }
  
  getMonth(showMonth)