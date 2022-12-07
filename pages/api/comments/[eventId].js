import {
  ConnectToDb,
  getAllDataFromDb,
  InsertoDb,
} from "../../../components/helpers/db_utils";
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const eventId = req.query.eventId;
  let db;
  let client = ConnectToDb();
  try {
    db = await client.then((cl) => cl.db("EventDB"));
  } catch {
    res.status(500).json({ message: "connect to database fail" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });

      return;
    }
    const NewComment = {
      eventId: eventId,
      time: new Date(),
      email: email,
      name: name,
      text: text,
    };

    try {
      const result = await InsertoDb(db, "comments", { comment: NewComment });
      console.log(result);
      (await client).close;
      res.status(201).json({ message: "Add comment", comment: NewComment });
    } catch {
      res.status(500).json({ message: "Insert to database fail" });
      return;
    }
  }
  if (req.method === "GET") {
    const mongoData = await getAllDataFromDb(db, "comments", {
      "comment.eventId": eventId,
    });
    (await client).close;
    res.status(201).json({ comments: mongoData });
  }
};
export default handler;
