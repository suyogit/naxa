import React, { useEffect, useState } from "react";
import Rightcontent from "./Rightcontent";
import Leftcontent from "./Leftcontent";

const Software = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://admin.naxa.com.np/api/services");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        // console.log(data);
        const sortedData = data.sort((a, b) => a.service_order - b.service_order);
        setServices(sortedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1></h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <div className="bg-customback ">
            {service.service_order % 2 !== 0 ? ( 
                <Rightcontent
                  description1={service.description1}
                  description2={service.description2}
                  icon={service.icon}
                  photo={service.photo}
                  title={service.title}
                />
              ) : (
                <Leftcontent
                  description1={service.description1}
                  description2={service.description2}
                  icon={service.icon}
                  photo={service.photo}
                  title={service.title}
                />
              )}
             
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Software;
