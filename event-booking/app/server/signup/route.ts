import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


export async function POST(req:NextRequest) {
    console.log("hello world")

    try{

        const data = await req.json()
        const username = data.username
        const password = data.password
        const name = data.name
        const pgClient = new PrismaClient()
        const newUser = await pgClient.user.create({
            data : {
                username,
                password,
                name
            }
        })
    }catch(e){
        return NextResponse.json({
            "message" : "server down"
        })
    }
    return NextResponse.json({
        "message" : "You are signed up"
    })
    
    

}