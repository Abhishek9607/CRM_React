import { useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { MdCancel,MdOutlineDoneAll, MdPending } from 'react-icons/md';
import { TbProgressBolt } from 'react-icons/tb';
import { useDispatch, useSelector } from "react-redux";

import Card from '../../components/card';
import HomeLayouts from "../../layouts/HomeLayouts";
import { getAllTicketsforTheUser } from "../../Redux/Slices/TicketSlice";

const Home = () => { 

  const authState = useSelector((state) => state.auth);
  const ticketsState = useSelector((state) => state.tickets);

  const dispatch = useDispatch();

  async function loadTickets() {
    const response = await dispatch(getAllTicketsforTheUser());
    console.log(response);
  }

  useEffect(() => {
    loadTickets();
  }, [authState.token]);
  
  return (
    <HomeLayouts>
      <div className="mt-10 flex flex-row justify-center items-center gap-5 flex-wrap">
      <Card 
         titleText="open"
         status={ticketsState.ticketDistribution.open / ticketsState.ticketList.length}
         quantity={ticketsState.ticketDistribution.open}
         background="bg-yellow-300"
         borderColor="border-green-300"
         fontColor="text-black"
         dividerColor="bg-black"
      >
        <BsFillPencilFill className='inline mr-2' />
       </Card>

       <Card 
         titleText="inProgress"
         status={ticketsState.ticketDistribution.inProgress / ticketsState.ticketList.length}
         quantity={ticketsState.ticketDistribution.inProgress}
         background="bg-yellow-300" 
         borderColor="border-green-300"
         fontColor="text-black" 
         dividerColor="bg-black"
       >
        <TbProgressBolt className='inline mr-2' />
       </Card>
       <Card 
           titleText="resolved"
           status={ticketsState.ticketDistribution.resolved / ticketsState.ticketList.length} 
           quantity={ticketsState.ticketDistribution.resolved}
           background="bg-yellow-300" 
           borderColor="border-green-300" 
           fontColor="text-black" 
           dividerColor="bg-black"
          >
        <MdOutlineDoneAll className='inline mr-2' />
       </Card>

       <Card 
           titleText="onHold"
           status={ticketsState.ticketDistribution.onHold / ticketsState.ticketList.length} 
           quantity={ticketsState.ticketDistribution.onHold}
           background="bg-yellow-300" 
           borderColor="border-green-300" 
           fontColor="text-black" 
           dividerColor="bg-black"
          >
        <MdPending className='inline mr-2' />
       </Card>

       <Card 
          titleText="cancelled"
          status={ticketsState.ticketDistribution.cancelled / ticketsState.ticketList.length}
          quantity={ticketsState.ticketDistribution.cancelled}
          background="bg-yellow-300" 
          borderColor="border-green-300" 
          fontColor="text-black"
          dividerColor="bg-black"
        >
        <MdCancel className='inline mr-2' />
       </Card>
      </div>

    </HomeLayouts>
  );
};

export default Home;