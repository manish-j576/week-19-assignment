interface ButtonProps {
    text : string,
    onClick : any
}
export default function Button({text , onClick} : ButtonProps){
    return <div className="w-full flex justify-center ">
        <button onClick={onClick} className="p-2 bg-blue-300 rounded-lg w-[40%]">{text}</button>
    </div>
}