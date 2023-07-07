export interface IActionSection {
    label: number | string;
    icon: string;
    }
export interface ITableData {
    id: number;
    title: string;
    description?: string
    tag?: React.ReactNode[];
    date: Date | string;
    amount: number | string;
    icons?: IActionSection[]
    }
export interface ITableProps {
    data: ITableData[]
    }