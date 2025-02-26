function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 left-0 w-full bg-yellow-500 p-4 flex justify-between items-center text-white shadow-inner">
        <div>
          <p className="font-bold mb-2">contact</p>
          <a
            href="https://www.instagram.com/tu_robotclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="flex items-center space-x-2 transform transition hover:scale-110 duration-300"
          >
            <i className="fab fa-instagram inline-block text-2xl text-white"></i>
            <p className="inline-block"> TU_Robotclub</p>
          </a>
        </div>
        <div>
          <p className="p-4">
            For more information, <br className="md:hidden" /> please visit
            <a
              href="https://register.clubs.triamudom.ac.th/instructions"
              className="inline-block transform transition hover:scale-110 duration-300"
            >
              TUCMC
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
