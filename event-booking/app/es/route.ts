import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    console.log("hello world")
    const data =await req.json()
    console.log(data)

    return NextResponse.json({
        "message" : "hello"
    })
}