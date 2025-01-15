"use client";
import { useRef } from "react";
import Button from "../components/Button";
import Inpubox from "../components/Inputbox";

export default function(){
   const usernameRef = useRef(null)
   const passwordRef = useRef(null)

   function onClick(){
    console.log(usernameRef.current?.value)
    console.log(passwordRef.current?.value)
    
   }

    return <div className="bg-gray-700 flex w-screen h-screen justify-center items-center">
        <div className="bg-slate-200 pb-4 rounded-lg">
        <Inpubox inputref={usernameRef} type="text" placeholder="Enter email"></Inpubox>
        <Inpubox inputref={passwordRef} type="password" placeholder="Password"></Inpubox>
        <Button onClick = {onClick} text="Signup"></Button>
        </div>
    </div>
}