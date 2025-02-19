import "./loader.css";

const Loader = () => {
  return (
    <div data-testid="loader" className="w-full loader flex items-center justify-center h-full">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
