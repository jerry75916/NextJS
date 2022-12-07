import { MongoClient } from "mongodb";
export const getClient = () => {};

export const ConnectToDb = async (database) => {
  const connectString = process.env.mongoDbString;
  const client = new MongoClient(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const connect = await client.connect();
  return connect;
};

export const InsertoDb = async (conn, collection, doc) => {
  const result = await conn.collection(collection).insertOne(doc);
  return result;
};

export const getAllDataFromDb = async (db, collection, findObj) => {
  const mongoData = await db
    .collection(collection)
    .find(findObj)
    .sort({ time: -1 })
    .toArray();
  return mongoData;
};
