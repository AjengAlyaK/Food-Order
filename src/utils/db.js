const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect('mongodb://mongo:H5d23ha+F-DggGaB-feCHAgAH-gBFfFf@viaduct.proxy.rlwy.net:52719', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// menambah 1 data
// const user1 = new User({
//     name: 'Aje',
//     nohp: '085314',
//     password: 'ajengal',
//     email: 'ajenga990@gmail.com'
// });

// Simpan ke collection 
// user1.save().then((contact) => console.log(contact));