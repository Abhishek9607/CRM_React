import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

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
        clientName: ''
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
                    clientName: row.clientName

                });
                document.getElementById('user_details_modal').showModal();
            }}
            columns={columns}
            data={userList}
        />
        }
        {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button> */}
                <dialog id="user_details_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">User Details</h3>
                    <p className="py-4">Name:  <span className='text-yellow-500'>{userDisplay.name}</span></p>
                    <p className="py-4">Email: <span className='text-yellow-500'>{userDisplay.email}</span></p>
                    <p className="py-4">Type:  <span className='text-yellow-500'>{userDisplay.userType}</span></p>
                    <p className="py-4">Status:  <span className='text-yellow-500'>{userDisplay.userStatus}</span></p>
                    <p className="py-4">Client Name: <span className='text-yellow-500'>{userDisplay.clientName}</span></p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                </dialog>
        </div>
    </HomeLayout>
  );
}

export default ListAllUsers;