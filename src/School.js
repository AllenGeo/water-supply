import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const School = () => {
  const [Schools, setSchools] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/schools")
    .then((res) => res.json())
    .then((schools) => {
      setSchools(schools)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  return (  
    <div className="section-center">
      {Schools && Schools.map((school) => (    
          <div className="block" key={school.school_id}>
            <article className="menu-item">
              {console.log(school.img_url)}
              <img src={school.img_url} alt={school.school_name} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{school.school_name}</h4><br/>
                  <h3 className="price">{school.district}</h3>
                  <Link to={`/School/${school.school_id}`}><button className="butn1">View</button></Link>
                </header>
                <p className="item-text">{school.state}</p>
              </div>
            </article>
          </div>
      ))}
    </div>

  );
}
 
export default School;

// {
//   school_id: '1',
//   school_name: 'TIPS',
//   district: "Erode",
//   state: "Tamil Nadu",
//   imgSrc: tips,
// },
// {
//   school_id: "2",
//   school_name: "BVB",
//   district: "Erode",
//   state: "Tamil Nadu",
//   imgSrc: BVB,
// },
// {
//   school_id: "3",
//   school_name: "Bhavans",
//   district: "Ernakulam",
//   state: "Kerala",
//   imgSrc: Bhavans,
// },
// {
//   school_id: "4",
//   school_name: "CGS",
//   district: "Trichy",
//   state: "Tamil Nadu",
//   imgSrc: CGS,
// },