import { NextResponse } from "next/server";
import { readJSONdocs } from "@/lib/utils"


export async function GET() {
    const jsondata = await readJSONdocs("./public");
    return NextResponse.json({
        jsondata
    })
}