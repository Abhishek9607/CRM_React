import{ ArcElement, Chart as ChartJS, Legend,Title,Tooltip }  from "chart.js";
import { Pie } from "react-chartjs-2";
import { BsFillPencilFill } from "react-icons/bs";
import { MdCancel,MdOutlineDoneAll, MdPending } from 'react-icons/md';
import { TbProgressBolt } from 'react-icons/tb';

import Card from '../../components/card';
import useTickets from "../../hooks/useTickets";
import HomeLayouts from "../../layouts/HomeLayouts";

ChartJS.register(ArcElement, Legend, Title, Tooltip);

const Home = () => { 

  
  const [ticketsState] = useTickets();
  const pieChartData = {
    labels: Object.keys(ticketsState.ticketDistribution),
    fontColor: "white",
    datasets: [
      {
        label: "Game data",
        data: Object.values(ticketsState.ticketDistribution),
        backgroundColor: ["yellow", "red", "green", "blue", "purple"],
        borderColor: ["yellow", "red", "green", "blue", "purple"],
        borderWidth: 1,
      }
    ] 
  };
  
  return (
    <HomeLayouts>
     {ticketsState && (
       <div className="mt-10 flex flex-row justify-center items-center gap-5 flex-wrap">
       <Card 
          titleText="open"
          status={ticketsState.ticketDistribution.open / ticketsState.downloadedTickets.length}
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
          status={ticketsState.ticketDistribution.inProgress / ticketsState.downloadedTickets.length}
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
            status={ticketsState.ticketDistribution.resolved / ticketsState.downloadedTickets.length} 
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
            status={ticketsState.ticketDistribution.onHold / ticketsState.downloadedTickets.length} 
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
           status={ticketsState.ticketDistribution.cancelled / ticketsState.downloadedTickets.length}
           quantity={ticketsState.ticketDistribution.cancelled}
           background="bg-yellow-300" 
           borderColor="border-green-300" 
           fontColor="text-black"
           dividerColor="bg-black"
         >
         <MdCancel className='inline mr-2' />
        </Card>
       </div>
     )}
     <div className="mt-10 flex justify-center items-center gap-10">
      <div className="w-80 h-80">
        <Pie data={pieChartData} />
      </div>
     </div>

    </HomeLayouts>
  );
};

export default Home;