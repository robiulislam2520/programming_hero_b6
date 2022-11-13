import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <section className="sm-p-4 bg-[#323848] py-12">
      <div className="container mx-auto">
        <footer className="footer text-white">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-1/3" />
            </Link>
            <p>Doctor Industries Ltd.</p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a href="/brand" className="link link-hover">Branding</a>
            <a href="/design" className="link link-hover">Design</a>
            <a href="/marketing" className="link link-hover">Marketing</a>
            <a href="/ads" className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a href="/about" className="link link-hover">About us</a>
            <a href="/contact" className="link link-hover">Contact</a>
            <a href="/jobs" className="link link-hover">Jobs</a>
            <a href="/press" className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a href="/" className="link link-hover">Terms of use</a>
            <a href="/" className="link link-hover">Privacy policy</a>
            <a href="/" className="link link-hover">Cookie policy</a>
          </div>
        </footer>
        <div className="items-center grid-flow-col text-white text-center mt-16">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
