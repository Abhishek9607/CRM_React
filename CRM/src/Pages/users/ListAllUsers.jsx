import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import UserDetailsModals from '../../components/UserDetailsModals';
import axiosInstance from '../../config/axiosInstance';
import HomeLayout from '../../layouts/HomeLayouts';

function ListAllUsers() {

    const columns = [
        {
            name: 'User id',
            selector: row => row._id,
            reorder:true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            reorder:true,
        },
        
        {
         name: 'Name',
         selector: row => row.name,
         reorder:true,
        },
        {
           name: 'Status',
           selector: row => row.userStatus,
           sortable: true,
           right: true,
           reorder:true,
        },
        {
            name: 'Type',
            selector: row => row.userType,
            reorder:true,
        },
     ];

    const [userList, setUserList] = useState([]);
    const [userDisplay, setUserDisplay] = useState({
        name: '',
        email: '',
        userType: '',
        userStatus: '',
        clientName: '',
        id: ''
    }); 

async function loadUsers() {
    const response = await axiosInstance.get("/users", {
        headers: {
            'x-access-token': localStorage.getItem('token')
        }
    });
    setUserList(response?.data?.result);
}

useEffect(() => {
    loadUsers();
}, []);
     

  return (
    <HomeLayout>
        <div className='min-h-[90vh] flex flex-col items-center justify-center  border-solid-white'>
            <h1 className='text-center font-bold text-5xl mb-4 text-yellow-500  border-red-300'>User List</h1>
        {userList && 
        <DataTable
            onRowClicked={(row) =>   {
                setUserDisplay({
                    name: row.name,
                    email: row.email,
                    userType: row.userType,
                    userStatus: row.userStatus,
                    clientName: row.clientName,
                    id: row._id

                });
                document.getElementById('user_details_modal').showModal();
            }}
            columns={columns}
            data={userList}
        />
        }
        {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button> */}
                < UserDetailsModals key={userDisplay.email} user={userDisplay} resetTable={loadUsers}/>
        </div>
    </HomeLayout>
  );
}

export default ListAllUsers;