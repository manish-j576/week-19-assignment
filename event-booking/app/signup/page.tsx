"use client";
import { useRef } from "react";
import Button from "../components/Button";
import Inpubox from "../components/Inputbox";
import axios from "axios";


export default function(){
   const usernameRef = useRef(null)
   const passwordRef = useRef(null)
   const nameref = useRef(null)


   async function onClick(){
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    const name = nameref.current?.value

    const res = await axios.post("http://localhost:3000/server/signup",{
        username,
        password,
        name
    })
    console.log(res)
   }
    return <div className="bg-gray-700 flex w-screen h-screen justify-center items-center">
        <div className="bg-slate-200 pb-4 rounded-lg">
        <Inpubox inputref={usernameRef} type="text" placeholder="Enter email"></Inpubox>
        <Inpubox inputref={passwordRef} type="password" placeholder="Password"></Inpubox>
        <Inpubox inputref={nameref} type='text'placeholder="Name"></Inpubox>
        <Button onClick = {onClick} text="Signup"></Button>
        </div>
    </div>
}