"use client";

import React from "react";
import Image from "next/image"; // Import Next.js Image component
import signingup from "./signingup.svg";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="container">
      <div className="image-container">
        <Image
          src={signingup} // Path relative to the `public` folder
          alt="joinus"
          layout="responsive" // Maintain aspect ratio while resizing
          width={500} // Updated width
          height={400} // Updated height
          className="image"
        />
      </div>
      <div className="form-container">
        <h1 className="heading">Sign up</h1>
        {/* Input Fields */}
        <div className="input-group">
          <label htmlFor="fullname" className="label">
            FullName
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter your full name"
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="input"
          />
        </div>
        {/* "Are you a Creator?" Section */}
        <div className="creator-section">
          <p className="creator-text">Are you a Creator?</p>
          <div className="button-group">
            <button className="button">Yes</button>
            <button className="button">No</button>
          </div>
          <button className="signup-button">Sign up</button>
        </div>
        {/* Login Section */}
        <div className="login-section">
          <p className="login-text">
            Already have an account?
            <Link href="/login">
              <span className="login-link">Login</span>
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .image-container {
          position: relative;
          left: -300px;
          width: 500px;
          height: 400px;
          margin-bottom: 20px;
          top: 100px;
        }

        .form-container {
          position: absolute;
          left: 650px;
          top: 80px;
          width: 500px;
          height: auto;
          background-color: rgb(244, 244, 249);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          border-radius: 10px;
        }

        .heading {
          font-size: 26px;
          font-weight: 700;
          margin: 10px 0 35px 0;
          color: black;
          font-family: Urbanist, sans-serif;
          text-align: center;
        }

        .input-group {
          width: 100%;
          margin-bottom: 20px;
        }

        .label {
          display: block;
          margin-bottom: 8px;
          font-size: 26px;
          font-weight: 700;
          font-family: Urbanist, sans-serif;
          color: black;
        }

        .input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 20px;
          font-size: 16px;
          font-family: Urbanist, sans-serif;
        }

        .creator-section {
          width: 100%;
          margin-bottom: 20px;
        }

        .creator-text {
          font-size: 26px;
          font-weight: 700;
          font-family: Urbanist, sans-serif;
          color: black;
          text-align: center;
          margin: 20px 0;
        }

        .button-group {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .button {
          padding: 12px 20px;
          border: 1px solid #ccc;
          border-radius: 20px;
          font-size: 16px;
          font-family: Urbanist, sans-serif;
          background-color: #f4f4f9;
          cursor: pointer;
        }

        .signup-button {
          padding: 12px 30px;
          border: 1px solid rgba(0, 60, 60, 1);
          border-radius: 20px;
          font-size: 16px;
          font-family: Urbanist, sans-serif;
          background-color: transparent;
          color: rgba(0, 60, 60, 1);
          cursor: pointer;
          margin-bottom: 20px;
        }

        .login-section {
          text-align: center;
        }

        .login-text {
          font-size: 16px;
          font-family: Urbanist, sans-serif;
          color: black;
        }

        .login-link {
          color: #0070f3;
          cursor: pointer;
          margin-left: 10px;
          font-weight: bold;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .image-container {
            position: relative;
            left: 0;
            width: 100%;
            max-width: 300px;
          }

          .form-container {
            position: relative;
            left: 0;
            top: 0;
            width: 100%;
            max-width: 300px;
            padding: 10px;
          }

          .heading {
            font-size: 22px;
          }

          .label {
            font-size: 16px;
          }

          .creator-text {
            font-size: 18px;
          }

          .input {
            font-size: 14px;
          }

          .button {
            padding: 10px 18px;
            font-size: 14px;
          }

          .signup-button {
            padding: 10px 25px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .image-container {
            width: 100%;
            max-width: 300px;
          }

          .heading {
            font-size: 20px;
          }

          .label {
            font-size: 14px;
          }

          .creator-text {
            font-size: 16px;
          }

          .input {
            font-size: 12px;
          }

          .button {
            padding: 8px 16px;
            font-size: 12px;
          }

          .signup-button {
            padding: 8px 20px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Signup;
