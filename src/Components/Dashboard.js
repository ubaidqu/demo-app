import React from "react";
import "../App.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import BookIcon from "@mui/icons-material/Book";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

function Dashboard() {
   
  return (
    <div className="dash_container my-1">
      <Sidebar>
        <Menu>
          <SubMenu
            icon={<SpaceDashboardIcon style={{ opacity: "0.8" }} />}
            style={{ margin: 7,borderRadius:"20px", border: "1px  #ffffff" }}
            label="Dashboard"
          >
            <ul className="bullet-list">
              <MenuItem  className="submenu-item">Default</MenuItem>

              <MenuItem className="submenu-item">CRM</MenuItem>

              <MenuItem className="submenu-item">Purple</MenuItem>

              <MenuItem className="submenu-item">Purple Dark</MenuItem>

              <MenuItem className="submenu-item">Sale</MenuItem>

              <MenuItem className="submenu-item">HR</MenuItem>

              <MenuItem className="submenu-item">Analytics</MenuItem>

              <MenuItem className="submenu-item">Modern</MenuItem>

              <MenuItem className="submenu-item">E-commerce</MenuItem>
            </ul>
          </SubMenu>

          <MenuItem className="submenu-item" style={{borderRadius:"20px"}}>
            <BookIcon style={{ margin: 10, opacity: "0.8" }} />
            Widgets
          </MenuItem>

          <MenuItem className="submenu-item"style={{borderRadius:"20px"}}>
            <ViewInArIcon style={{ margin: 10, opacity: "0.8" }} />
            RTL
          </MenuItem>
        </Menu>
        <Menu>
           <h6
            style={{
              margin: 22,
              fontSize: "14px",
              fontWeight: "570",
              opacity: "0.8",
              borderRadius:"20px"
            }}
          >
            UI Elements
          </h6>
          <SubMenu
            icon={<ViewQuiltIcon style={{ opacity: "0.8" }} />}
            label="UI Elements"
            style={{ marginTop: "20px",borderRadius:"20px" }}
          >
            <ul className="bullet-list">
              <MenuItem className="submenu-item">Accordions</MenuItem>

              <MenuItem className="submenu-item">Buttons</MenuItem>

              <MenuItem className="submenu-item">Badges</MenuItem>

              <MenuItem className="submenu-item">Breadcrumbs</MenuItem>

              <MenuItem className="submenu-item">Dropdowns</MenuItem>

              <MenuItem className="submenu-item">Modals</MenuItem>

              <MenuItem className="submenu-item">Progress bar</MenuItem>

              <MenuItem className="submenu-item">Pagination</MenuItem>

              <MenuItem className="submenu-item">Tabs</MenuItem>

              <MenuItem className="submenu-item">Typography</MenuItem>

              <MenuItem className="submenu-item">Tooltips</MenuItem>
            </ul>
          </SubMenu>
          <SubMenu
            icon={<ExpandCircleDownIcon style={{ opacity: "0.8" }} />}
            label="Advanced UI"
            style={{borderRadius:"20px"}}
          >
            <ul className="bullet-list">
              <MenuItem className="submenu-item">Dragula</MenuItem>

              <MenuItem className="submenu-item">Clipboard</MenuItem>

              <MenuItem className="submenu-item">Context menu</MenuItem>

              <MenuItem className="submenu-item">Sliders</MenuItem>

              <MenuItem className="submenu-item">Carousel</MenuItem>

              <MenuItem className="submenu-item">Colcade</MenuItem>

              <MenuItem className="submenu-item">Loaders</MenuItem>
            </ul>
          </SubMenu>
        </Menu>
        <Menu>
           <h6
            style={{
              margin: 22,
              fontSize: "14px",
              fontWeight: "570",
              opacity: "0.8",
            }}
          >
            FORMS AND DATAS
           </h6>
          <SubMenu
            icon={<WysiwygIcon style={{ opacity: "0.8" }} />}
            label="Forms and Elements"
            style={{ marginTop: "20px",borderRadius:"20px" }}
          >
            <ul className="bullet-list">
              <MenuItem className="submenu-item">Basic Elements</MenuItem>

              <MenuItem className="submenu-item">Advanced Elements</MenuItem>

              <MenuItem className="submenu-item">Validation</MenuItem>

              <MenuItem className="submenu-item">Wizard</MenuItem>
            </ul>
          </SubMenu>
          <SubMenu
            icon={<DataObjectIcon style={{ opacity: "0.8" }} />}
            label="Editors"  style={{borderRadius:"20px" }}
          >
            <ul className="bullet-list">
              <MenuItem className="submenu-item">Text editors</MenuItem>

              <MenuItem className="submenu-item">Code editors</MenuItem>

              <MenuItem className="submenu-item">Context menu</MenuItem>

              <MenuItem className="submenu-item">Sliders</MenuItem>

              <MenuItem className="submenu-item">Carousel</MenuItem>

              <MenuItem className="submenu-item">Colcade</MenuItem>

              <MenuItem className="submenu-item">Loaders</MenuItem>
            </ul>
          </SubMenu>
          <SubMenu
            icon={<ShowChartIcon style={{ opacity: "0.8" }} />}
            label="Charts" style={{borderRadius:"20px" }}
          >
            <ul className="bullet-list">
              <MenuItem className="submenu-item">ChartJs</MenuItem>

              <MenuItem className="submenu-item">Morris</MenuItem>

              <MenuItem className="submenu-item">Flot</MenuItem>

              <MenuItem className="submenu-item">Google charts</MenuItem>

              <MenuItem className="submenu-item">Sparkline js</MenuItem>

              <MenuItem className="submenu-item">C3 charts</MenuItem>

              <MenuItem className="submenu-item">Chartists</MenuItem>

              <MenuItem className="submenu-item">JustGage</MenuItem>
            </ul>
          </SubMenu>
          <SubMenu
            icon={<TableChartIcon style={{ opacity: "0.8" }} />}
            label="Tables" style={{borderRadius:"20px" }}
          >
            <ul className="bullet-list">
              <MenuItem className="submenu-item">Basic table</MenuItem>

              <MenuItem className="submenu-item">Data table</MenuItem>

              <MenuItem className="submenu-item">Js-grid</MenuItem>

              <MenuItem className="submenu-item">Sortable table</MenuItem>
            </ul>
          </SubMenu>

          <MenuItem className="submenu-item"style={{borderRadius:"20px" }}>
            
            <ReportProblemIcon
              style={{
                marginRight: 15,
                marginTop: -7,
                marginLeft: 7,
                opacity: "0.8",
              }}
            />
            Popups
          </MenuItem>

          <MenuItem className="submenu-item"style={{borderRadius:"20px" }}>
            <NotificationsNoneOutlinedIcon
              style={{
                marginRight: 15,
                marginTop: -7,
                marginLeft: 7,
                opacity: "0.8",
              }}
            />
            Notifications
          </MenuItem>
          <SubMenu icon={<LayersOutlinedIcon />} label="Icons"style={{borderRadius:"20px" }}>
            <ul className="bullet-list">
              <MenuItem className="submenu-item">Flag icons</MenuItem>

              <MenuItem className="submenu-item">Mdi icons</MenuItem>

              <MenuItem className="submenu-item">Font Awesome</MenuItem>

              <MenuItem className="submenu-item">Simple line icons</MenuItem>

              <MenuItem className="submenu-item">Themify icons</MenuItem>
            </ul>
          </SubMenu>
          <SubMenu
            icon={<LocationOnOutlinedIcon style={{ opacity: "0.8" }} />}
            label="Maps" style={{borderRadius:"20px" }}
          >
            <ul className="bullet-list">
              <MenuItem className="submenu-item">Mapael</MenuItem>

              <MenuItem className="submenu-item">Vector Map</MenuItem>

              <MenuItem className="submenu-item">Google Map</MenuItem>
            </ul>
          </SubMenu>
        </Menu>
        <Menu >
           <h6
            style={{
              margin: 22,
              fontSize: "14px",
              fontWeight: "570",
              opacity: "0.8",
            }}
          >
            Pages
           </h6>
          <SubMenu
            icon={<AccountCircleOutlinedIcon style={{ opacity: "0.8" }} />}
            label="User Pages"
            style={{ marginTop: "20px",borderRadius:"20px"}}
          >
            <ul className="bullet-list">
              <MenuItem className="submenu-item">Login</MenuItem>

              <MenuItem className="submenu-item">Login 2</MenuItem>

              <MenuItem className="submenu-item">Register</MenuItem>

              <MenuItem className="submenu-item">Register 2</MenuItem>

              <MenuItem className="submenu-item">Lockscreen</MenuItem>
            </ul>
          </SubMenu>
          <SubMenu
            icon={<StopCircleOutlinedIcon style={{ opacity: "0.8", }} />}
            label="Error Pages"style={{borderRadius:"20px" }}
          >
            <ul className="bullet-list">
              <MenuItem className="submenu-item">404</MenuItem>

              <MenuItem className="submenu-item">500</MenuItem>
            </ul>
          </SubMenu>
          <div className="page_container">
            <SubMenu
              icon={<MenuBookOutlinedIcon style={{ opacity: "0.8" }} />}
              label="General Pages"style={{borderRadius:"20px" }}
            >
              <ul className="bullet-list">
                <MenuItem className="submenu-item">Blank Page</MenuItem>

                <MenuItem className="submenu-item">Profile</MenuItem>

                <MenuItem className="submenu-item">FAQ</MenuItem>

                <MenuItem className="submenu-item">FAQ 2</MenuItem>

                <MenuItem className="submenu-item">News grid</MenuItem>

                <MenuItem className="submenu-item">Timeline</MenuItem>

                <MenuItem className="submenu-item">Search Results</MenuItem>

                <MenuItem className="submenu-item">Portfolio</MenuItem>
              </ul>
            </SubMenu>
            <SubMenu
              icon={
                <ProductionQuantityLimitsOutlinedIcon
                  style={{ opacity: "0.8" }}
                />
              }
              label="E-commerce"style={{borderRadius:"20px" }}
            >
              <ul className="bullet-list">
                <MenuItem className="submenu-item">Invoice</MenuItem>

                <MenuItem className="submenu-item">Pricing Table</MenuItem>

                <MenuItem className="submenu-item">Orders</MenuItem>
              </ul>
            </SubMenu>
          </div>
        </Menu>
        <Menu>
           <h6
            style={{
              margin: 22,
              fontSize: "14px",
              fontWeight: "570",
              opacity: "0.8",
            }}
          >
            Apps
           </h6>

          <MenuItem className="submenu-item" style={{borderRadius:"20px" }}>
            <EmailOutlinedIcon
              style={{
                marginRight: 15,
                marginTop: -7,
                marginLeft: 5,
                opacity: "0.8",
              }}
            />
            E-mail
          </MenuItem>

          <MenuItem className="submenu-item" style={{borderRadius:"20px" }}>
            <InsertInvitationOutlinedIcon
              style={{
                marginRight: 17,
                marginTop: -7,
                marginLeft: 3,
                opacity: "0.8",
              }}
            />
            Calendar
          </MenuItem>

          <MenuItem className="submenu-item" style={{borderRadius:"20px" }}>
            <FormatListBulletedOutlinedIcon
              style={{
                marginRight: 17,
                marginTop: -7,
                marginLeft: 3,
                opacity: "0.8",
              }}
            />
            Todo List
          </MenuItem>

          <MenuItem className="submenu-item" style={{borderRadius:"20px" }}>
            <ImageOutlinedIcon
              style={{
                marginRight: 17,
                marginTop: -7,
                marginLeft: 3,
                opacity: "0.8",
              }}
            />
            Gallery
          </MenuItem>
        </Menu>
        <Menu style={{borderRadius:"20px" }}>
           <h6
            style={{
              margin: 22,
              fontSize: "14px",
              fontWeight: "570",
              opacity: "0.8",
            }}
          >
            HELP
           </h6>

          <MenuItem className="submenu-item" style={{borderRadius:"20px" }}>
            <DescriptionOutlinedIcon
              style={{
                marginRight: 17,
                marginTop: -7,
                marginLeft: 3,
                opacity: "0.8",
              }}
            />
            Documentation
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Dashboard;
