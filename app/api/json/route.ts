import { NextResponse } from "next/server";
import { getReadLocalMd } from "@/lib/utils"


export async function GET() {
    const markdownContent = await getReadLocalMd("/config/markdown/hero.md");
    return NextResponse.json({
        markdownContent
    })
}