import Intro from "./Intro";
import Rightcontent from "./Rightcontent";
import Software from "./Software";

const Services = () => {
  return (
    <>
      <Intro />
      <Software />
      <div className="bg-customback">
      <Rightcontent/>
      </div>


    </>
  );
};

export default Services;
