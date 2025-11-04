import { NextResponse } from "next/server";

export function GET() {
  const has = (k: string) => Boolean(process.env[k] && process.env[k]!.length);
  return NextResponse.json({
    cwd: process.cwd(),
    envFileDetected: has("NEXTAUTH_URL") || has("MONGODB_URI") || has("GOOGLE_CLIENT_ID"),
    NEXTAUTH_URL: has("NEXTAUTH_URL"),
    NEXTAUTH_SECRET: has("NEXTAUTH_SECRET"),
    GOOGLE_CLIENT_ID: has("GOOGLE_CLIENT_ID"),
    GOOGLE_CLIENT_SECRET: has("GOOGLE_CLIENT_SECRET"),
    MONGODB_URI: has("MONGODB_URI"),
    ADMIN_EMAIL: has("ADMIN_EMAIL"),
  });
}


