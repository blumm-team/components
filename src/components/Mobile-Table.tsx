import {ITableProps} from "../interfaces/Interfaces"
import * as ReactIcons from "react-icons/bs";
import {FC} from "react"


export default function RowTable(data : ITableProps){
    return(
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
            
        </div>
    )
}