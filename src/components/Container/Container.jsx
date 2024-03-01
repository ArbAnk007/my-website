import "../../styles/Container.css"

function Container({children}) {
  return (
    <div className="w-full sm:px-10 px-8">{children}</div>
  );
}

export default Container;