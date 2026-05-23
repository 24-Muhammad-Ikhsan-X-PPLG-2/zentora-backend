import { getChapter } from "@/lib/mangadex";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ chapter_id: string }>;
  },
) {
  const { chapter_id } = await params;
  const res = await getChapter(chapter_id);
  if (res.error) {
    return NextResponse.json({
      error: true,
      response: null,
    });
  }
  return NextResponse.json(res.response);
}
