/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { AiOutlineDownload } from "react-icons/ai";
import { usePDF } from "react-to-pdf";

import TicketDetailsModal from '../../components/TicketDetailsModal';
import useTickets from '../../hooks/useTickets';
import HomeLayout from '../../layouts/HomeLayouts';

// eslint-disable-next-line react/prop-types
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
// const conditionalRowStyles = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;


const Dashboard = () => {
  const [ticketState] =  useTickets();

  const {toPDF, targetRef} = usePDF({filename: 'page.pdf'});
  const [selectedTicket, setSelectedTicket] = useState({});

  const columns = [
   {
       name: 'Ticket id',
       selector: row => row._id,
   },
   {
       name: 'Title',
       selector: row => row.title,
   },
   {
      name: 'Description',
      selector: row => row.description,
   },
   {
    name: 'Reporter',
    selector: row => row.assignedTo,
   },
   {
    name: 'Priority',
    selector: row => row.ticketPriority,
   },
   {
    name: 'Assignee',
    selector: row => row.assignee,
   }, 
   {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      right: true,

     
   },
];

const customStyles = {
   rows: {
       style: {
           minHeight: '72px',
           fontSize: '20px' // override the row height
       },
   },
   headCells: {
       style: {
           paddingLeft: '8px', // override the cell padding for head cells
           paddingRight: '8px',
       },
   },
   cells: {
       style: {
           paddingLeft: '8px', // override the cell padding for data cells
           paddingRight: '8px',
       },
   },
};


  return (
     <HomeLayout>
      <div className='min-h-[90vh] flex flex-col items-center justify-center gap-2'>
        <div className='bg-yellow-300 w-full text-black text-center text-3xl font-bold py-4 hover:bg-yellow-600 transition-all ease-in-out duration-300'>
          Tickets Records <AiOutlineDownload className="cursor-pointer inline hover:text-white" onClick={() => toPDF()}/>
        </div>

        {/* Table */}
     
        <div ref={targetRef}>
        {ticketState && 
        <DataTable
        onRowClicked={(row) => {
            setSelectedTicket(row);
            document.getElementById('ticket_modal').showModal();
        }}
            columns={columns}
            data={ticketState.ticketList}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            customStyles={customStyles} 
            pagination
       />
       }
        <TicketDetailsModal ticket={selectedTicket} key={selectedTicket._id}/>
        </div>
      </div>
      
     </HomeLayout>
  );
};

export default Dashboard;