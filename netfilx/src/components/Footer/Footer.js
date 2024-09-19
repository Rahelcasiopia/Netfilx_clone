import React from 'react'
import "./footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="footer-outerBox">
      <div className="footerBox">
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        <div className="footer-data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookise preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="service-code">
          <p>service code</p>
        </div>
        <div className="copy-write">
          &copy; 1997-2024 Netfilx,Inc.
        </div>
      </div>
    </div>
  );
}

export default Footer
