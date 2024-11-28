import { mongoose } from 'mongoose'
const { Schema, model } = mongoose;

// Replace with your MongoDB connection string
const MONGO_URI = 'mongodb://localhost:27017/VMS';

try {
  await mongoose.connect(MONGO_URI);
  console.log('MongoDB connected successfully.');
} catch (error) {
  console.error('MongoDB connection failed:', error.message);
  process.exit(1); // Exit process with failure
}

/* Create Schema */
const testSchema = new Schema({
  name: String,
  age: Number,
  class: {
    type: String,
    required: true,
  }
});

/* bind with test collection */
const testCollection = model('test', testSchema);

/* Insert Data into test collection ... */
const responseDT = await testCollection.create(
  name:"Raj",
  age:18,
  class:"MCA"
);


/*find data via _ID  */
const responseDT1 = await testCollection.findById(<_ID>);

/* Apply filter/where clause */
const responseDT2 = await testCollection.all(name,["Raj","Mahesh"]);
const responseDT3 = await testCollection.find({age:{$gt:18,$lt:25}})  

/* update data base on filter */
const testDT1 = await testCollection.updateOne({ name: /Kumar/ }, { name: "Mahesh" ,age:27});    /*Change only one data*/
console.log(testDT1);
const testDT2 = await testCollection.updateMany({ name: /Kumar/ }, { name: "Mahesh" ,age:27});   /*Change all data matched string with "Kumar" */
console.log(testDT2);


/* delete data */
const deleteResult = await testCollection.deleteOne({          /* VIA ID */
  _id:"67481db64fe5098d5364f579"
});

const deleteResult2 = await testCollection.deleteMany({          /* DELETE ALL DATA MATACH WITH STRING "KUMAR" */
  name:\Kumar\
});


