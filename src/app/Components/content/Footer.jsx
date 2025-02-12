import ContainerIconFooter from "../ui/containerIconFooter";

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(225,225,225,0.2)] p-4 text-xs text-white">
      <div className="container mx-auto flex flex-col justify-between space-y-1">
        <p className="flex-1 text-base font-medium shadow-sm">Anflix.com</p>
        <div className="flex items-center justify-between shadow-sm">
          <div className="flex space-x-2">
            <p className="text-gray-400 shadow-sm">Terms & Privacy</p>
            <p className="text-gray-400 shadow-sm">Contacts</p>
          </div>
          <ContainerIconFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
