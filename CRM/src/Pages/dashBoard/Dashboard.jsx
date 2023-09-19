import { AiOutlineDownload } from "react-icons/ai";
import { usePDF } from "react-to-pdf";

import useTickets from '../../hooks/useTickets';
import HomeLayout from '../../layouts/HomeLayouts';


const Dashboard = () => {
  const [ticketState] =  useTickets();
  const {toPDF, targetRef} = usePDF({filename: 'page.pdf'});
 

  return (
     <HomeLayout>
      <div className='min-h-[90vh] flex flex-col items-center justify-center gap-2'>
        <div className='bg-yellow-300 w-full text-black text-center text-3xl font-bold py-4 hover:bg-yellow-600 transition-all ease-in-out duration-300'>
          Tickets Records <AiOutlineDownload className="cursor-pointer inline hover:text-white" onClick={() => toPDF()}/>
        </div>

        {/* <div className=' text-black text-center text-3xl font-bold py-4'>
          <button className='btn-primary font-bold text-2xl w-full px-4 py-2 rounded-md text-white'>
             Export to PDF
          </button>
        </div>
         Table */}
        <div className='flex flex-col w-full' ref={targetRef}>
          {/* Title row */}
          <div className='flex justify-between items-center gap-3 bg-purple-600 px-2 py-2 grid-cols-7'>
              <div className='table-title basis-[8%] justify-start'>
                 Ticket Id
              </div>
              <div className='table-title basis-[12%] '>
                 Title
              </div>
              <div className='table-title basis-[20%]'>
                 Description
              </div>
              <div className='table-title basis-[20%]'>
                 Reporter
              </div>
              <div className='table-title basis-[5%]'>
                 Priority
              </div>
              <div className='table-title basic-[22%]'>
                 Assignee
              </div>
              <div className='table-title basis-[13%] justify-end mr-4'>
                 Status
              </div>
          </div>
          {ticketState && ticketState.ticketList.map(ticket => {
            return (
              <div key={ticket._id} className='flex justify-between items-center gap-3 bg-purple-600 px-2 py-2 grid-cols-7'>
              <div className='table-title basis-[8%] justify-start'>
                 {ticket._id.substring(0,5)+".."}
              </div>
              <div className='table-title basis-[12%]'>
                 {ticket.title}
              </div>
              <div className='table-title basis-[20%]'>
                 {ticket.description}
              </div>
              <div className='table-title basis-[20%]'>
                 {ticket.assignee}
              </div>
              <div className='table-title basis-[5%]'>
                 {ticket.ticketPriority}
              </div>
              <div className='table-title basis-[22%]'>
                 {ticket.assignedTo}
              </div>
              <div className='table-title basis-[13%] justify-end mr-4'>
                 {ticket.status}
              </div>
          </div>
            );
          })}
        </div>
      </div>
      
     </HomeLayout>
  );
};

export default Dashboard;