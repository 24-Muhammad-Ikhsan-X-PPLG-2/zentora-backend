import { NextResponse } from "next/server";
import { getCategories } from "@/lib/mangadex";

export async function GET() {
  const res = await getCategories();
  if (res.error) {
    return NextResponse.json({
      error: true,
    });
  }
  return NextResponse.json(res.response);
}
