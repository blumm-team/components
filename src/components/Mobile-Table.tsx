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
        <div className="flex flex-col text-xs md:text-base pt-3 pb-3 min-h-screen items-center m-auto h-full">
            {data.data.map(({date, tag, title, id, amount, icons, description}) => {
                return(
                <div key={id} className="flex flex-row bg-gray-50 w-[95%] p-2 justify-end border-gray-300 border-solid border-y-[1px]">
                    <div className="w-11/12 flex flex-row gap-4">
                        <div className="w-1/5">{date.toString()}</div>
                        <div className="w-1/5">
                            <div>${amount}</div>
                            <div className="text-gray-400">{title}</div>
                        </div>
                        <div className="w-3/5">
                            <div className="text-gray-400">{description}</div>
                            <div className="flex flex-row">{tag?.map((e, index) => {return <div key={index} className=" border-gray-300 border-[1px] rounded-md px-1 w-max">{e}</div>})}</div>
                        </div>
                    </div>
                <div className="flex h-full w-1/12 justify-end ">
                    {icons?.map(({icon, label}, index) => {
                        const Component : FC = ReactIcons[icon as keyof {}]
                        return( 
                        <div key={index} className="flex flex-row text-gray-400  items-end">{label}<Component/></div>
                        )})}
                </div>
                </div>)})}
        </div> 
        : 
        <div className="flex flex-col text-xs md:text-lg pt-3 pb-3 min-h-screen m-auto items-center"> 
            {data.data.map(({date, tag, title, id, amount, icons}) => {
                return(
                <div key={id} className="flex flex-row bg-gray-50 w-4/5 p-2 items-center border-gray-300 border-solid border-y-[1px]">
                <div className="w-10/12">
                    <div>{title}</div>
                    <div className="flex flex-row gap-1">
                     {tag?.map((e, index) => {return <div key={index} className="border-gray-300 border-[1px] rounded-md px-1 w-max">{e}</div>})}
                    </div>
                    <div className="text-gray-400">{date.toString()}</div>
                </div>
                <div className="flex flex-col h-full w-full items-end justify-end">
                    <div >${amount}</div>
                    <div className="flex flex-row">
                    {icons?.map(({icon, label}, index) => {
                        const Component : FC = ReactIcons[icon as keyof {}]
                        return( 
                        <div key={index} className="flex flex-row text-gray-400 h-full items-center">{label}<Component/></div>
                        )})}
                    </div>
                 </div>
            </div>)})}
            
        </div>} 
        </div>
    )
}