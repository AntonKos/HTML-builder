const { readdir  } = require('fs/promises');
const path = require('path');
const {stat} = require('fs');

readdir(path.join(__dirname, 'secret-folder'), {withFileTypes:true})
.then((files) => {
  for (const file of files) {
    if (file.isFile()){
        stat((path.join(__dirname, 'secret-folder', file.name)), (error, stats)=>{
          console.log(
            file.name.split('.').shift()+' -', 
            path.extname(file.name).replace(/[.]/g, '')+' -',
            stats.size
        )
      })
    }
  }
});
    
   
 
