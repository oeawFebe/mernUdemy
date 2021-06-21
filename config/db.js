const mongoose=require('mongoose');
const config=require('config');
const db=config.get('mongoURI');

//give us promise
// mongoose.connect(db);

const connectDB=async ()=>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('MongoDb Connected...')
    } catch(err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports=connectDB;