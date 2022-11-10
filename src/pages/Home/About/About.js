import React from "react";
import img1 from "../../../Assets/About/img1.jpg";
import img2 from "../../../Assets/About/img2.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            src={img1}
            alt=""
            className="w-4/5 h-full rounded-lg shadow-2xl"
          />
          <img
            src={img2}
            alt=""
            className="absolute right-5 top-1/2 w-60 border-8 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className="text-2xl font-bold text-orange-600">About Us</p>
          <h1 className="my-5 text-5xl font-bold">
            We are qualified <br />
            & experience <br />
            in Photoshoot
          </h1>
          <p className="py-6">
            Photography is the result of combining several technical
            discoveries, relating to seeing an image and capturing the image.
            The discovery of the camera obscura ("dark chamber" in Latin) that
            provides an image of a scene dates back to ancient China.{" "}
          </p>
          <p className="py-6">
            Photography is the result of combining several technical
            discoveries, relating to seeing an image and capturing the image.
            The discovery of the camera obscura{" "}
          </p>
          <button className="btn bg-green-700">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
