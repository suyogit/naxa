import React, { useEffect, useState } from "react";

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
        console.log(data)
        setServices(data);
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
    {/* <h1>Software Services</h1>
    <ul>
      {services.map((service) => (
        <li key={service.id}> 
          {service.title} 
        </li>
      ))}
    </ul> */}
  </div>
  )
};

export default Software;
