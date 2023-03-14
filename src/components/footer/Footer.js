import React from "react";

import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-style">&copy; {currentYear} &nbsp; &#8211; &nbsp; Zachary Wikel</div>
    );
}

export default Footer;