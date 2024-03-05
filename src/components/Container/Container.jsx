import "../../styles/Container.css"

function Container({children}) {
  return (
    <div className="w-full sm:px-10 md:px-8 px-6">{children}</div>
  );
}

export default Container;