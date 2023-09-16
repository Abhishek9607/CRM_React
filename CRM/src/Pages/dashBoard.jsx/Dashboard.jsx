import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeLayout from '../../layouts/HomeLayouts';
import {getAllTicketsforTheUser} from '../../Redux/Slices/TicketSlice';

const Dashboard = () => {
  const ticketState = useSelector((state) =>state.tickets);
  const dispatch = useDispatch();

  async function loadTickets() {
    const response = await dispatch(getAllTicketsforTheUser());
    console.log(response);
  }
  useEffect(() => {
    if(ticketState.ticketList.length ==  0) {
      loadTickets();
    }
  }, []);

  return (
     <HomeLayout>
      
     </HomeLayout>
  );
};

export default Dashboard;