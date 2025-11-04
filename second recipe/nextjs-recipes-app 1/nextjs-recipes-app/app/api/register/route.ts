import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import { hash } from "bcrypt";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const existing = await db.collection("users").findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const passwordHash = await hash(password, 10);
    const doc = {
      name: name || email.split("@")[0],
      email,
      password: passwordHash,
      emailVerified: null,
      image: null,
      role: "user",
    };
    const result = await db.collection("users").insertOne(doc);
    return NextResponse.json({ id: result.insertedId.toString() }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}


