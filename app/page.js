import { presidential } from "@/app/data/evote";
import Profile from "./components/profile/Profile";
import Press from "./components/frame/Press";

const Home = () => {
  const profile = presidential.map((e) => {
    return <Profile key={e.id} {...e} />;
  });

  return (
    <div className="">
      <Press/>
    </div>
  );
};

export default Home;
