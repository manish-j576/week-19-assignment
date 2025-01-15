interface InputProps{
    placeholder : string
    varient? : "primary" | "secondary"
    type: "text" | "password"
    inputref : any
}

// let styles = {
//     "primary" : 
        // "secondary" :"h-8 w-60 p-3 "
// }

export default function Inpubox({placeholder , type , inputref} : InputProps){
    return <div className="w-60 p-3 h-14">

    <input ref={inputref}  className="w-full h-full rounded pl-2"  type={type} placeholder={placeholder} />
    </div>
    
}