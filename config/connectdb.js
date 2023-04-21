const mongoose= require("mongoose")
const connect =async()=>{
    try {
        await mongoose.connect(process.env.db)
        console.log("databases connected")
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = connect;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.db;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connect() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// module.exports = connect;
