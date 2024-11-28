🌟 MongoDB CRUD Operations with Mongoose 🌟
This project demonstrates performing CRUD (Create, Read, Update, Delete) operations on a MongoDB database using Mongoose with Node.js. 🚀

📝 Table of Contents
🎯 Overview
💻 Technologies Used
⚙️ Prerequisites
📦 Installation
📂 Project Structure
🛠️ Configuration
📋 Schema and Collection
🔄 CRUD Operations
➕ Create
🔍 Read
♻️ Update
🗑️ Delete
🚀 Usage
⚠️ Error Handling
🤝 Contributing
📜 License
🎯 Overview
This project serves as a practical guide for working with MongoDB databases. You will learn to:

🛠️ Define schemas using Mongoose.
📊 Perform CRUD operations on a collection.
🔗 Connect to MongoDB seamlessly with error handling.
💻 Technologies Used
🟢 Node.js: JavaScript runtime for server-side development.
🗃️ MongoDB: NoSQL database to store and manage data.
🔧 Mongoose: ODM library for MongoDB.
⚙️ Prerequisites
Before you begin, ensure you have the following installed:

Node.js (>= 14.x) ⚡
MongoDB (>= 4.x) 📦
Basic knowledge of JavaScript and databases. 📖
📦 Installation
Follow these steps to set up the project:

Clone this repository:
git clone <repository-url>
Navigate to the project directory:
cd <your-project-directory>
Install required dependencies:
npm install mongoose
📂 Project Structure
project-directory/
│
├── app.js                # Main script
├── README.md             # Documentation
└── package.json          # Project dependencies
🛠️ Configuration
Update the MongoDB connection string in the app.js file:

const MONGO_URI = 'mongodb://localhost:27017/VMS';
Replace VMS with your database name. 🏷️
Adjust the host and port if MongoDB is running on a different server.
📋 Schema and Collection
The schema defines the structure of documents in the test collection:

const testSchema = new Schema({
  name: String,
  age: Number,
  class: {
    type: String,
    required: true,
  }
});
💾 The schema is bound to the test collection:

const testCollection = model('test', testSchema);
🔄 CRUD Operations
➕ Create
Insert a new document:

const responseDT = await testCollection.create({
  name: "Raj",
  age: 18,
  class: "MCA"
});
🔍 Read
Find a document by _id:

const responseDT1 = await testCollection.findById("<_ID>");
Filter documents:

const responseDT2 = await testCollection.find({ name: { $in: ["Raj", "Mahesh"] } });
♻️ Update
Update one document matching a filter:

const testDT1 = await testCollection.updateOne({ name: /Kumar/ }, { name: "Mahesh", age: 27 });
Update multiple documents:

const testDT2 = await testCollection.updateMany({ name: /Kumar/ }, { name: "Mahesh", age: 27 });
🗑️ Delete
Delete a document by _id:

const deleteResult = await testCollection.deleteOne({ _id: "67481db64fe5098d5364f579" });
Delete all matching documents:

const deleteResult2 = await testCollection.deleteMany({ name: /Kumar/ });
🚀 Usage
Start the MongoDB service:
mongod
Run the script:
node app.js
Check the console for logs to verify successful CRUD operations. 📜
⚠️ Error Handling
MongoDB connection errors are caught and logged:
try {
  await mongoose.connect(MONGO_URI);
  console.log('MongoDB connected successfully.');
} catch (error) {
  console.error('MongoDB connection failed:', error.message);
  process.exit(1);
}
Validation errors are handled automatically by Mongoose when required fields are missing.
🤝 Contributing
Contributions are welcome! 🎉
If you'd like to improve this project:

Fork the repository. 🍴
Create a feature branch:
git checkout -b feature-name
Commit your changes:
git commit -m "Add new feature"
Push to the branch:
git push origin feature-name
Open a pull request. 🔄
📜 License
This project is licensed under the MIT License. 📝
Feel free to use and modify the code as needed!

💡 Tip: To make the document even more interactive, consider using GitHub Pages or embedding additional resources like screenshots or demo videos! 🎥

This version is designed to be visually appealing and engaging, leveraging emojis, structured sections, and clear formatting. While Markdown doesn’t support colors directly, this approach makes the document more lively and fun to read.
