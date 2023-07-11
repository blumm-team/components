import {ITableProps} from "../interfaces/Interfaces"
import * as ReactIcons from "react-icons/bs";
import {FC} from "react"
import useWindowsSize from "../hooks/useWindowsSize"


export default function RowTable(data : ITableProps){
    const size = useWindowsSize()
    return(
    
    <div>
        {size.width > 600 
        ? 
        <div className="flex flex-col bg-azul-4 bg-opacity-20 font-roboto text-sm pt-3 pb-3 min-h-screen items-center m-auto h-full">
            <div className="bg-black w-11/12 rounded border-azul-4 border-2">
            {data.data.map(({date, tag, title, id, amount, icons, description}) => {
                return(
                <div key={id} 
                className={id===1 
                ? 
                "flex flex-row bg-white w-full p-2 justify-end border-azul-4 border-solid rounded-t-sm border-y-[0.5px]" 
                : 
                id===data.data.length 
                ?
                "flex flex-row bg-white w-full p-2 justify-end border-azul-4 border-solid rounded-b-sm border-y-[0.5px]"
                :
                "flex flex-row bg-white w-full p-2 justify-end border-azul-4 border-solid border-y-[0.5px]"
                }>
                    <div className="w-full flex flex-row gap-4">
                        <div className="w-1/5 text-gris-1">{date.toString()}</div>
                        <div className="w-1/5">
                            <div className="text-gris-1">${amount}</div>
                            <div className="text-gris-2">{title}</div>
                        </div>
                        <div className="w-3/5">
                            <div className="text-gris-1">{description}</div>
                            <div className="flex flex-row">{tag?.map((e, index) => {return <div key={index} className=" border-gris-4 text-gris-1 border-[1px] rounded-md px-1 w-max">{e}</div>})}</div>
                        </div>
                    </div>
                <div className="flex h-full w-1/12 justify-end ">
                    {icons?.map(({icon, label}, index) => {
                        const Component : FC = ReactIcons[icon as keyof {}]
                        return( 
                        <div key={index} className="flex flex-row text-gris-3 items-end">{label}<Component/></div>
                        )})}
                </div>
                </div>)})}
                </div>
        </div> 
        : 
        <div className="flex flex-col bg-azul-4 bg-opacity-20 font-roboto rounded-md md:text-lg pt-3 pb-3 min-h-screen h-full m-auto border-azul-4 border-solid items-center"> 
            <div className="w-11/12 rounded border-azul-4 border-2">
            {data.data.map(({date, tag, title, id, amount, icons}) => {
                return(
                <div key={id} className="flex flex-row w-full bg-gray-50 p-2 items-center border-azul-4 border-solid border-y-[1px]">
                <div className="w-11/12">
                    <div className="text-gris-2 text-sm">{title}</div>
                    <div className="flex flex-row gap-1">
                     {tag?.map((e, index) => {return <div key={index} className="border-gris-4 text-sm text-gris-1 border-[1px] rounded-md px-1 w-max">{e}</div>})}
                    </div>
                    <div className="text-gris-1 text-xs">{date.toString()}</div>
                </div>
                <div className="flex flex-col h-full w-full items-end justify-end">
                    <div className="text-gris-1 text-sm">${amount}</div>
                    <div className="flex flex-row">
                    {icons?.map(({icon, label}, index) => {
                        const Component : FC = ReactIcons[icon as keyof {}]
                        return( 
                        <div key={index} className="flex flex-row text-xs text-gris-3 h-full items-center">{label}<Component/></div>
                        )})}
                    </div>
                 </div>
            </div>)})}
            </div>
        </div>} 
        </div>
    )
}