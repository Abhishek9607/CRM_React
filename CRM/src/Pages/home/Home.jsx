import { BsFillPencilFill } from "react-icons/bs";

import Card from '../../components/card';
import HomeLayouts from "../../layouts/HomeLayouts";

const Home = () => {
  return (
    <HomeLayouts>
      <div className="flex flex-row gap-2">
      <Card>
        <BsFillPencilFill className='inline mr-2' />
       </Card>
       <Card status={30} background="bg-yellow-300" borderColor="border-green-300" fontColor="text-black" dividerColor="bg-black">
        <BsFillPencilFill className='inline mr-2' />
       </Card>
      </div>

    </HomeLayouts>
  );
};

export default Home;