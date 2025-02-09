
const mongoose = require('mongoose');
//require('dotenv').config({ path: 'variables.env' });
const DBconnect = async () => {

try {

await mongoose.connect('mongodb://127.0.0.1:27017/estrellas', {
useNewUrlParser: true,
useUnifiedTopology: true,
//useFindAndModify: false
})
console.log('BD Conectada');

} catch (error) {
console.log(error);
process.exit(1); // Detenemos la app
}

}

module.exports = DBconnect