// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin@cluster0.yfkraop.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("client ", client);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    console.log("meetupsCollection ", meetupsCollection);
    console.log("pre resulta ");
    const result = await meetupsCollection.insertOne(data);

    console.log("result ", result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
