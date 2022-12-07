import { ConnectToDb, InsertoDb } from "../../components/helpers/db_utils";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invaild email address" });
      return;
    }

    let client = ConnectToDb();
    let db = await client.then((cl) => cl.db("EventDB"));

    await InsertoDb(db, "emails", { email: userEmail });
    (await client).close;
    res.status(201).json({ message: "Sign up!" });
  }
};
export default handler;
