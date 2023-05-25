const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect(
   "mongodb://localhost:27017/scholargo",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ).then(res=>{
    console.log("mongodb connected")
  })
  .catch(err=>{
    console.log("error which connecting with database")
  });
}
module.exports = connect;







// console.log( process.env.MONGODB_URI)
// const connectionString = 'mongodb+srv://pankajkumar17814:laptop@cluster0.lwp4wtq.mongodb.net/';
// const connect = () => {
//   mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err))
// }