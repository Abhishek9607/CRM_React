function CreateTicket() {
  return (
    <div to={"/create/ticket"}  className="min-h-[90vh] flex items-center justify-center">
        <form action="">
           
        <div className="border-separate border border-sky-300 mb-11 mt-4 w-80 h-96  justify-center flex rounded-md">
            <div className="form-control">
            <h1 className=" mt-6 text text-3xl p-4 text-red-300 text-center font-bold  rounded-md ">Raise a Ticket</h1>
                <label className="label">
                   <span className="label-text">Your Email</span>
              </label>
             <label className="input-group" >
               <span>Email</span>
              <input type="textarea" placeholder="Enter title" className="input input-bordered text-center" />
             </label>
             <label className="mt-5">Description</label>
             <textarea className="input input-bordered p-2 text-center w-full resize-none " placeholder="enter description"  rows="8"></textarea>

             <button className="btn-success py-2 px-4 rounded-md mt-4 hover:bg-green-500 transition-all ease-in-out duration-300 hover:text-yellow-300">Submit</button>
           </div>
          
           
        </div>

        </form>
        </div>
   
  );
}

export default CreateTicket;