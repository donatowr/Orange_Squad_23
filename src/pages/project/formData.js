import { NextRequest, NextResponse } from "next/server";

export async function POST(NextRequest) {
  const data = await FormData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false });
  }

const bytes = await file.arrayBuffer();
const buffer = Buffer.from(bytes);

const path = join('/', 'tmp', file.name);
await File(path, buffer);
console.log(`open ${path} para ver o aaquivo`);

return NextResponse.json({ success: true});

}
