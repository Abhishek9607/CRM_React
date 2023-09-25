import{ ArcElement, Chart as ChartJS, Legend,Title,Tooltip }  from "chart.js";
import { Bar,Line, Pie } from "react-chartjs-2";
import { BsFillPencilFill } from "react-icons/bs";
import { MdCancel,MdOutlineDoneAll, MdPending } from 'react-icons/md';
import { TbProgressBolt } from 'react-icons/tb';

import Card from '../../components/card';
import useCharts from "../../hooks/useCharts";
import useTickets from "../../hooks/useTickets";
import HomeLayouts from "../../layouts/HomeLayouts";

ChartJS.register(ArcElement, Legend, Title, Tooltip);


const Home = () => { 
  const [pieChartData, lineChartData,barChartData] = useCharts();
  
  const [ticketsState] = useTickets();


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

     <div className="mt-10 mb-10 flex justify-center   items-center gap-10">
                <div className="w-[50rem] bg-[wheat]">
                    <Line data={lineChartData}/>
                </div>
            </div>

     <div  className="mt-10 mb-10 flex justify-center items-center gap-10">
      <div className="w-[50rem] bg-[wheat]">
      <Bar data={barChartData}/>
      </div>
     </div>

    </HomeLayouts>
  );
};

export default Home;