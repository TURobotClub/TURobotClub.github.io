import Footer from "../componant/Footer";
import NavBar from "../componant/NavBar";
function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      <NavBar page="Home" />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-gray-300 w-full lg:w-[80%] h-96 lg:h-[30rem] rounded-lg mb-8 overflow-hidden shadow-lg">
          <img
            src="img/banner.jpg"
            alt="TU Robot Club Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 text-yellow-600">
            TU Robot club
          </h2>
          <p className="text-lg font-bold mb-2 text-gray-700">
            Hello and welcome!{" "}
            <a
              className="underline text-yellow-600"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "The audition period hasn’t started yet. Please check back later."
                );
              }}
            >
              Auditions
            </a>{" "}
            have now closed. Please wait until the next semester.
          </p>
          <p className="text-center text-gray-600">
            Welcome! We're thrilled to have you here. This website is currently
            under construction. Stay tuned for updates and new features on this
            site. ท่านสามารถรอติดตามข่าวสารใหม่ๆ ได้ที่เว็บไซต์นี้.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default Home;
