import { Link } from "react-router-dom";
import { useState } from "react";
import "./portfolio.css";
import { dataOfProjects } from "../../api";

export default function Portfolio() {
  const [data, setData] = useState(dataOfProjects);
  const [active, setActive] = useState(1);

  function isActive(id) {
    setActive(id);
  }

  function filteredData(category) {
    const newDataArr = dataOfProjects.filter((project) =>
      project.catagory.includes(category)
    );
    setData(newDataArr);
  }

  const projects = data.map((project) => {
    return (
      <div key={project.id} className="site-info">
        <div className="img-holder">
          <img src={project.image} alt={project.title} />
          <div className="card">
            <h2 className="title">{project.title}</h2>
            <p className="subtitle">Technologies Used:</p>
            <p className="subtitle">{project.tech}</p>
            <div className="flex icons">
              <span className="flex box">
                <Link
                  to={project.link}
                  target="_blank"
                  className="icon-link"
                ></Link>
                <Link
                  to={project.github}
                  target="_blank"
                  className="icon-github"
                ></Link>
              </span>
              <Link className="flex more" to={project.link} target="_blank">
                More <span className="icon-forward"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            isActive(1);
            filteredData("all");
          }}
          className={active === 1 && "activeLink"}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            isActive(2);
            filteredData("react");
          }}
          className={active === 2 && "activeLink"}
        >
          React.js
        </button>
        <button
          onClick={() => {
            isActive(3);
            filteredData("HCJ");
          }}
          className={active === 3 && "activeLink"}
        >
          HTML & CSS & JS
        </button>
        <button
          onClick={() => {
            isActive(4);
            filteredData("bootstrap");
          }}
          className={active === 4 && "activeLink"}
        >
          Bootstrap
        </button>
        <button
          onClick={() => {
            isActive(5);
            filteredData("figma");
          }}
          className={active === 5 && "activeLink"}
        >
          Figma
        </button>
      </section>
      <section className="right-section flex">{projects}</section>
    </main>
  );
}
// <div className="site-info">
//   <Link to=".">
//     <div className="img-holder">
//       <img src="./Vanlife.png" alt="Vanlife-Pic" />
//       <div className="card">
//         <h2 className="title">AAAA</h2>
//         <p className="subtitle">AAA</p>
//         <div className="flex icons">
//           <span className="flex box">
//             <Link to="" className="icon-link"></Link>
//             <Link to="" className="icon-github"></Link>
//           </span>
//           <Link className="flex" to="">
//             More <span className="icon-forward"></span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </Link>
// </div>;
