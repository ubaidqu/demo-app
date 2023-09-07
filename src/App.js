import "./App.css";
import { useState, useEffect } from "react";
import Dashboard from "./Components/Dashboard";
import TocIcon from "@mui/icons-material/Toc";
import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import CategoryList from "./Components/CategoryList";
import Datepick from "./Components/Datepick";
import SearchIcon from '@mui/icons-material/Search';
import Searchbar from "./Components/Searchbar";
import Notification from "./Components/Notification";
import Bell from "./Components/Bell";
import Profile from "./Components/Profile";
import Alert from "./Components/Alert";
import NavLink from "./Components/NavLink";
import NestedGrid from "./Components/NestedGrid";
import PerformanceCard from "./Components/PerformanceCard";
import Status from "./Components/Status";
import Market from "./Components/Market";
import PicCard from "./Components/PicCard";
// const customTextStyle = {
//   fontFamily:'Manrope" sans-serif', // Replace with your font family
//   fontSize: '20px',              // Adjust font size as needed
//   color: "black",      // Replace with your desired color
//   fontWeight: 'bold',            // You can adjust font weight too
// }
function CustomText() {
  return (
    <div
      variant="body1"
      style={{
        marginLeft: "100px",
        top: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex" }}>
        <Typography
          style={{
            fontSize: "30px",
            color: "#8d8d8d",
            fontFamily: "Manrope, sans-serif",
            fontWeight: "300",
            marginTop: "-5px",
          }}
        >
          {" "}
          Good Morning,
        </Typography>
        <Typography
          style={{
            fontSize: "28px",
            color: "#000000",
            fontFamily: "Manrope, sans-serif",
            fontWeight: "600",
            marginLeft: "10px",
            marginTop: "-1px",
          }}
        >
          John Doe
        </Typography>
      </div>
      <div>
        <Typography
          style={{
            fontSize: "16px",
            color: "#8d8d8d",
            fontFamily: " Manrope, sans-serif",
            fontWeight: "400",
            marginTop: "3px",
          }}
        >
          Your performance summary this week
        </Typography>
      </div>
    </div>
  );
}
function App() {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const dashboardContainer = document.querySelector(".dash");
    if (dashboardContainer) {
      dashboardContainer.style.width = open ? "15rem" : "5rem";
    }
  }, [open]);

  const sideContainerVariants = {
    open: {
      width: "15rem",
      transition: {
        delay: 0.2,
      },
    },
    closed: {
      width: "3rem",
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarContainerVariants = {
    open: {},
    closed: {
      width: "3rem",
      transition: {},
    },
  };

  const textVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };
  const dashVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0.0,
      transition: {
        delay: 0.1,
      },
    },
  };
  const transparentAppBarStyle = {
    backgroundColor: "transparent", // Set the background color to transparent
    boxShadow: "none", // Remove the box shadow

    
  };
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearchClick = () => {
    setIsSearchClicked(!isSearchClicked);
  };

  return (
    <>
    <Alert/>
      {/* <Navbar/> */}
      {/* <Appbar/> */}
      <AppBar position="static" style={transparentAppBarStyle}>
        {/* <Toolbar>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button>
        ... other buttons or components ...
      </Toolbar> */}

        <div className="container">
          <motion.div
            whileTap={{
              scale: 1,
            }}
            className="menu_icons"
          >
            <motion.div
              whileTap={{
                rotate: 180,
                backgroundColor: "#f4f5f7",
                backdropFilter: "blur(3.5px)",
                WebkitBackdropFilter: "blur(3.5px)",

                transition: {
                  duration: 0.2,
                },
              }}
              whileHover={{
                cursor: "pointer",
              }}
              onClick={handleToggle}
              className="toc-icon-container"
            >
              <TocIcon
                style={{ fontSize: "30px", opacity: "0.8", marginTop: "5px" }}
              />
            </motion.div>
            <motion.h6
              initial={open ? "open" : "closed"}
              animate={open ? "open" : "closed"}
              variants={textVariants}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: "bold",
              }}
              className="star"
            >
              Star
            </motion.h6>
            <motion.h6
              initial={open ? "open" : "closed"}
              animate={open ? "open" : "closed"}
              variants={textVariants}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: "bold",
              }}
              className="admin"
            >
              Admin
            </motion.h6>
        
            <CustomText />
     
            
             {isSearchClicked?(
                 <div style={{ marginLeft: "100px" }}>
           
                 <CategoryList />
               </div>
             ):(
              <div style={{ marginLeft: "250px" }}>
           
              <CategoryList />
            </div>
             )} 
              {/* <Profile/> */}
          <Datepick/>
           
        
       
          <div 
      
        style={{display:'flex'}} > 
        <button
      style={{border:'none',background:'transparent',opacity:'0.6',}} onClick={handleSearchClick}><SearchIcon/></button>
        {isSearchClicked && <Searchbar />}
      </div>
      <Notification/>  
      <Bell/>
     
          </motion.div>
          <div className="profile_container"><Profile  /></div>
        </div>
      </AppBar>
      <div className="App">
        <motion.div
          initial={open ? "open" : "closed"}
          animate={open ? "open" : "closed"}
          variants={sideContainerVariants}
          className="sidebar_container"
        >
          <motion.div
            initial={open ? "open" : "closed"}
            animate={open ? "open" : "closed"}
            variants={sidebarContainerVariants}
            className="sidebar"
          >
            <motion.div
              initial={open ? "open" : "closed"}
              animate={open ? "open" : "closed"}
              variants={dashVariants}
              className="dash"
            >
              <Dashboard />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="body_container"> 
        <NavLink/>
           <NestedGrid/>
           <div style={{display:'flex'}}>  <PerformanceCard/>
         <Status/></div>
         <Market/>
         <PicCard/>
       
        </div>
      </div>
    </>
  );
}

export default App;
