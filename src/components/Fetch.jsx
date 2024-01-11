import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Fetch = ({cat}) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = () => {
      axios
        .get(
            cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=c84f9b172a2748e99f1a684041686bad`:
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=c84f9b172a2748e99f1a684041686bad"
        )
        .then((res) => setdata(res.data.articles))
        .catch((err) => err);
    };
    fetchdata();
  }, [cat]);

  return (
    <>
      <div className="container my-4">
      <center> <h4><u>TOP HEADLINES</u></h4></center> 
        <div className="container d-flex justify-content-center align-items-center flex-column my-3 " style={{minHeight:'100vh'}}>
          {data
            ? data.map((ele) => {
                return (
                  <>
                    <div className="container my-3 p-3 " style={{ width: "600px",boxShadow:'2px 2px 10px silver, 2px 10px 8px silver',borderRadius:'8px' }}>
                      <h5 className="my-2" key={ele.id}>{ele.title}</h5>
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          src={ele.urlToImage}
                          alt="image not found"
                          className="img-fluid"
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <p className="my-1">{ele.content}</p>
                      <Link to={ele.url} target="blank">
                        View more
                      </Link>
                    </div>
                  </>
                );
              })
            : "Loading..."}
        </div>
      </div>
    </>
  );
};

export default Fetch;
