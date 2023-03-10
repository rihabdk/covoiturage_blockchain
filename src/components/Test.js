import React, { useState } from 'react';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import carpool from "../images/ima.png"
import image from "../images/talan.jfif"
import MyPopup from './MyPopup';


function Test() {
  
  const [tableData, setTableData] = useState([
    {  email: "fedi.galfat@talan.com", Address:"0x5FbDB2315678afecb367f032d93F642f64180aa3", phone: 53890432,LO:"Offering", from: "Talan", to: "Bizerte", 
    Date: "08.03.2023",Time: "18:00:00", fee: 5 },
    {  email: "amal.sehli@talan.com", Address:"0x6GmDB1255678afecb367f032d93F642f64180ac2", phone: 5896124, LO:"Looking for",from: "manzah 7", to: "Talan", 
    Date: "25.02.2023",Time: "11:53:37", fee: 2 },
    {  email: "oussama.marraf@talan.com", Address:"0x9JkDB2315678afecb367f032d93F642f64180ab1", phone: 94561230, LO:"Offering",from: "Talan", to: "Mourouj 3 ", 
    Date: "25.02.2023",Time: "11:53:37", fee: 4 },
   
 
  ])
  // const columns = [
    
  //   { title: "Email", field: "email", type: "mail",filterPlaceholder: "filter" },
  //   { title: "Address", field: "Address", sorting: false, filtering: true, headerStyle: { color: "#fff" } },

  //   { title: "Phone Number", field: "phone",type: "number", align: "center", grouping: false },
  //   { title: "Looking for / Offering", field: "LO",type: "text", align: "center", grouping: false },
  //   { title: "From", field: "from", sorting: false, filtering: true, headerStyle: { color: "#fff" } },
  //   { title: "To", field: "to", sorting: false, filtering: true, headerStyle: { color: "#fff" } },

  //   {title: "Date", field: "Date", type: "date" ,sorting: false, filtering: true},
  //   { title: "Time", field: "Time", type: "time",filterPlaceholder:"filter" },
  //   { title: "Fees", field: "fee", type: "currency", currencySetting: { currencyCode: "TLN", minimumFractionDigits: 1 },
  //   cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
  //   {
  //     title: 'Payment',
  //     render: rowData => (
  //       <MyPopup />
  //     ),
  //   },

  // ]

  const columns = [
    
    { title: "Email", field: "email", type: "mail",filterPlaceholder: "filter" },
    { title: "Address", field: "Address", sorting: false, filtering: true, headerStyle: { color: "#fff" } },

    { title: "Phone Number", field: "phone",type: "number", align: "center", grouping: false },
    { title: "Looking for / Offering", field: "LO",type: "text", align: "center", grouping: false },
    { title: "From", field: "from", sorting: false, filtering: true, headerStyle: { color: "#fff" } },
    { title: "To", field: "to", sorting: false, filtering: true, headerStyle: { color: "#fff" } },

    {title: "Date", field: "Date", type: "date" ,sorting: false, filtering: true},
    { title: "Time", field: "Time", type: "time",filterPlaceholder:"filter" },
    { title: "Fees", field: "fee", type: "currency", currencySetting: { currencyCode: "TLN", minimumFractionDigits: 1 },
    cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
    {
      title: 'Payment',
      render: rowData => (
        <MyPopup />
      ),
    },

  ]

  

  return (
    
    <div >
       <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        
        <img src={image} alt="Nom de l'image" style={{ width: '1500px', height: '200px'}}/>

      </Nav>
    </Navbar.Collapse>
  </Navbar> 

      <MaterialTable columns={columns} data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTableData([...tableData, newRow])

            setTimeout(() => resolve(), 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)

          })
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          }
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: false, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
            disabled: rowData.age == null,
            // color:"primary"
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#0091FF",color:"#fff"}
        }}
        title="Available rides "
        icons={{ Add: () => <AddIcon /> }} />
    </div>
    
  );
}

export default Test;