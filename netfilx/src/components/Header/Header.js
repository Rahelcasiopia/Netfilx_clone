import React from "react";
import "./header.css";
import NetfilxLogo from "../../assets/images/NetfilxLogo.png"; 
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";

const Header = () => {
  return (
    <div className="header-OuterBox">
      <div className="headerBox">
        <div className="headerBox-left">
          <ul>
            <li>
              <img src={NetfilxLogo} alt="Netfilx Logo" width="100" />
            </li>
            <li>Home</li>
            <li>Tv show</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My list</li>
            <li>Browser By language</li>
          </ul>

          <div className="headerBox-right">
            <ul>
              <li>
                <SearchSharpIcon />
              </li>
              <li>
                <NotificationsNoneSharpIcon />
              </li>
              <li>
                <AccountBoxSharpIcon />
              </li>
              <li>
                <ArrowDropDownSharpIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
