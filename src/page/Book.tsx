import { useEffect, useState, useRef } from "react";
import NavBar from "../componant/NavBar";
import Footer from "../componant/Footer";

function Book() {
  const [passwordVerified, setPasswordVerified] = useState(false);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasPrompted = useRef(false); // Use useRef to track if the prompt has already been shown

  useEffect(() => {
    const verifyPassword = async () => {
      if (hasPrompted.current) return; // Prevent the prompt from being shown again

      hasPrompted.current = true; // Set the flag to true after showing the prompt

      const input = prompt("Please enter your password:");

      if (!input) {
        alert("Password is required!");
        window.location.href = "/";
        return;
      }

      try {
        const response = await fetch(
          `https://webserver-6ske.onrender.com/file?pass=${input}`
        );
        if (response.status === 403) {
          alert("Incorrect password");
          window.location.href = "/";
          return;
        }

        const data = await response.json();
        setPasswordVerified(true);
        setPdfFiles(data.files);
      } catch (error) {
        console.error("Error fetching PDFs:", error);
        alert("Failed to load PDFs. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    verifyPassword();
  }, []);

  return (
    <>
      <div className="flex flex-grow">
        <NavBar page="Book" />
        <div id="pdf-container" className="m-auto pt-20 pb-30 w-[80%]">
          {loading ? (
            <p>Loading...</p>
          ) : passwordVerified ? (
            pdfFiles.map((pdfFile, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <h3>{pdfFile}</h3>
                <iframe
                  src={`https://webserver-6ske.onrender.com/pdffile?FileName=${pdfFile}`}
                  width="100%"
                  height="600px"
                  style={{ border: "1px solid black" }}
                ></iframe>
              </div>
            ))
          ) : (
            <p>Verifying password...</p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Book;
