import './App.css'
import props from "./assets/datos"
import RowTable from './components/Mobile-Table'

function App() {

  return (
    <div className='bg-gray-100 min-h-screen'>
      <RowTable data={props.data}/>
    </div>
  )
}

export default App
