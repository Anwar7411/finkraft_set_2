import React,{useState, useRef, useEffect, useMemo} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
import './User.css'

const UserGrid = () => {
  const [rowData, setRowData] = useState(); 
  const [columnDefs, setColumnDefs] = useState([
    {field: 'make',filter: 'agTextColumnFilter' },
    {field: 'model',filter: 'agTextColumnFilter' },
    {field: 'price',filter:true}
  ]);
  const[openbox,setOpenBox]=useState(false);
  const [arr,setArr]=useState([])

  const gridRef = useRef();

  const defaultColDef = useMemo( ()=> ({
    sortable: true,
    filter:true,
    
  }));
  useEffect(() => {
  let obj=JSON.parse(localStorage.getItem("user"))
    fetch(`https://www.ag-grid.com/example-assets/row-data.json`)
    .then(result => result.json())
    .then(rowData => {
    let arr1=rowData?.filter((el)=>{
       return el.make==obj.make && el.model==obj.model && el
    })
   setRowData(arr1);
   setArr(rowData);
   setOpenBox(false);
    })
  }, [openbox]);

  const handlevalue=()=>{
    if(rowData[0]==arr[0]){
     setOpenBox(true)
    }else{
    setRowData(arr)
    }
  }
  
  return (
    <div>
    <div className='buttondiv'>
      <button onClick={handlevalue}>Get all Values</button>
    </div>
    <div className="ag-theme-alpine"  id="table">

      <AgGridReact
           ref={gridRef} 

           rowData={rowData} 

           columnDefs={columnDefs} 

           defaultColDef={defaultColDef} 

           animateRows={true} 
           pagination={true}
           paginationAutoPageSize={true}

           />
    </div>
    </div>
  )
}

export default UserGrid