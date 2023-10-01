import HomeLayouts from '../../layouts/HomeLayouts';
function CreateTicket() {
  return (
   <HomeLayouts>
         <div className="min-h-[90vh] flex justify-center items-center mt-11">
      <form className="min-w-[40rem] border p-20 border-sky-400 rounded-md hover:bg-sky-900 transition-all ease-in-out duration-300">

            <h1 className="text-3xl font-semibold text-white  text-center">
                  Create new ticket
            </h1>
            <div className="form-control w-full my-4">
                <label className="label">
                   <span className="label-text text-white text-lg">What is title of the issue?</span>
                   </label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full bg-white text-black" />
              </div>
              <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text text-white text-lg">Please describe your issue?</span>
                        </label>
                        <textarea 
                         placeholder="Type here" 
                         className=" p-2 resize-none rounded-md input-primary w-full bg-white text-black"
                         rows= "8"
                         > </textarea>
                    </div>
                    <button className="w-full px-4 py-2 bg-green-500 text-lg font-semibold text-white rounded-md hover:bg-green-600 transition-all ease-in-out duration-300">submit</button>
      </form>
    </div>
   </HomeLayouts>
  );
}

export default CreateTicket;