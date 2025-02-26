import { useState } from "react";
import { Icon } from "@iconify/react";
import NavBar from "../componant/NavBar";
import Footer from "../componant/Footer";

// Define the type for the expanded state keys
type Section = "activity" | "soccer" | "drawing";

const OpenHouse2025 = () => {
  const [expanded, setExpanded] = useState<Record<Section, boolean>>({
    activity: false,
    soccer: false,
    drawing: false,
  });

  const handleExpand = (section: Section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const openGithub = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      {/* Header Placeholder */}
      <NavBar page="OpenHouse" />

      {/* Main Content */}
      <div
        className="flex items-center justify-center"
        style={{ marginTop: "5rem" }}
      >
        <div className="rounded-box flex items-center justify-center title-box">
          <h1 style={{ fontSize: "xx-large" }} className="text-white">
            Open House 2024
          </h1>
        </div>
      </div>

      <main className="flex-grow flex flex-col sm:flex-row items-center justify-center p-4">
        {/* Activity Section */}
        <div
          id="activity"
          className={`flex flex-col rounded-box ${
            expanded.activity ? "expanded" : "collapsed"
          }`}
        >
          <div
            className="text-white rounded-box flex items-center justify-center title-box"
            onClick={() => handleExpand("activity")}
          >
            <p className="text-white">Activities</p>
            <Icon
              icon="mdi-menu-down"
              className={expanded.activity ? "hidden" : "hidden-when-expand"}
            />
            <Icon
              icon="mdi-menu-up"
              className={expanded.activity ? "hidden-when-expand" : "hidden"}
            />
          </div>
          <div
            className={`mx-2 space-y-6 ${expanded.activity ? "hidden" : ""}`}
          >
            <div className="h-1"></div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800">Drawing Robot</h3>
              <p className="text-gray-600">ร่วมออกแบบรูปภาพให้หุ่นยนต์</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800">Soccer Robot</h3>
              <p className="text-gray-600">เข้าร่วมเล่นเกม</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800">Board</h3>
              <p className="text-gray-600">
                สามารถศึกษาการทำงานของ sensor ต่างๆ และรายละเอียดของชมรม
              </p>
            </div>
            <div className="h-1"></div>
          </div>
        </div>

        {/* Soccer Robot Section */}
        <div style={{ width: "1rem", height: "1rem" }}></div>
        <div
          id="soccer"
          className={`flex flex-col rounded-box ${
            expanded.soccer ? "expanded" : "collapsed"
          }`}
        >
          <div
            className="text-white rounded-box flex items-center justify-center title-box"
            onClick={() => handleExpand("soccer")}
          >
            <p>Soccer Robot</p>
            <Icon
              icon="mdi-menu-down"
              className={expanded.soccer ? "hidden" : "hidden-when-expand"}
            />
            <Icon
              icon="mdi-menu-up"
              className={expanded.soccer ? "hidden-when-expand" : "hidden"}
            />
          </div>
          <div
            className={`mx-2 flex items-center justify-center ${
              expanded.soccer ? "hidden" : ""
            }`}
          >
            <div className="relative bg-gray-300 w-full lg:w-[80%] aspect-square rounded-lg mb-4 overflow-hidden shadow-lg my-2 mx-auto">
              <img
                src="img/soccer-robot.jpg"
                alt="Image of soccer robot"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            Soccer robot operated with an RC controller
            <div
              id="soccer-github"
              className="mt-5 flex items-center justify-center github"
              onClick={() =>
                openGithub("https://github.com/TURobotClub/soccer_robot")
              }
            >
              Github
            </div>
          </div>
        </div>

        {/* Drawing Robot Section */}
        <div style={{ width: "1rem", height: "1rem" }}></div>
        <div
          id="drawing"
          className={`flex flex-col rounded-box ${
            expanded.drawing ? "expanded" : "collapsed"
          }`}
        >
          <div
            className="text-white rounded-box flex items-center justify-center title-box"
            onClick={() => handleExpand("drawing")}
          >
            <p>Drawing Robot</p>
            <Icon
              icon="mdi-menu-down"
              className={expanded.drawing ? "hidden" : "hidden-when-expand"}
            />
            <Icon
              icon="mdi-menu-up"
              className={expanded.drawing ? "hidden-when-expand" : "hidden"}
            />
          </div>
          <div
            className={`mx-2 flex items-center justify-center ${
              expanded.drawing ? "hidden" : ""
            }`}
          >
            <div className="relative bg-gray-300 w-full lg:w-[80%] aspect-square rounded-lg mb-4 overflow-hidden shadow-lg my-2 mx-auto">
              <img
                src="img/drawing-robot.jpg"
                alt="Image of drawing robot"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            Drawing robot operated using G-code files
            <div
              id="drawing-github"
              className="mt-5 flex items-center justify-center github"
              onClick={() =>
                openGithub("https://github.com/TURobotClub/drawing_robot")
              }
            >
              Github
            </div>
          </div>
        </div>
      </main>

      {/* Footer Placeholder */}
      <Footer />
    </div>
  );
};

export default OpenHouse2025;
