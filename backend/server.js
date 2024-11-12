import express from 'express'
import { MongoClient, GridFSBucket } from 'mongodb'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import uuid4 from 'uuid4'

dotenv.config()
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
const url = "mongodb+srv://Public:Hello@cluster0.zibsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url)
const dbName = "Projects&Clients";

// app.use(express.json());
app.use(bodyParser.json())
// app.use(bodyParser.json({ limit: '50mb' }))
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

await client.connect();
const db = client.db(dbName)


// const bucket = new GridFSBucket(db, {
//   chunkSizeBytes: 1024 * 1024,  // 1MB chunks
//   bucketName: 'images'  // name of the bucket
// });
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


app.get('/formDetail', async (req, res) => {

  const collection = db.collection('Forms');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)

})

app.get('/mailDetail', async (req, res) => {

  const collection = db.collection('NewsLatters');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)

})

app.get('/projectDetail', async (req, res) => {

  const collection = db.collection('Projects');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)

})

app.get('/clientDetail', async (req, res) => {

  const collection = db.collection('Clients');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)

})



app.post('/form', async (req, res) => {
  console.log(req.body);

  const form = { ...req.body, id: uuid4() }
  const collection = db.collection('Forms');
  const insertResult = await collection.insertOne(form)

  res.json({ success: true, result: insertResult })
})

app.post('/email', async (req, res) => {
  console.log(req.body);

  const mail = { ...req.body, id: uuid4() }
  const collection = db.collection('NewsLatters');

  const insertResult = await collection.insertOne(mail)

  res.json({ success: true, result: insertResult })
})

app.post('/project',  async (req, res) => {
  console.log(req.body);

  const project = { ...req.body, id: uuid4() }
  const collection = db.collection('Projects');

  const insertResult = await collection.insertOne(project)

  res.json({ success: true, result: insertResult })
})

app.post('/client', async (req, res) => {
  console.log(req.body);

  const client = { ...req.body, id: uuid4() }
  const collection = db.collection('Clients');

  const insertResult = await collection.insertOne(client)

  res.json({ success: true, result: insertResult })
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})