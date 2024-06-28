interface MainPageProps {
  num1: number;
  num2: number;
  children: React.ReactNode;
}

//Form
const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <h1>This is form</h1>
      <p>A lot of info....</p>
      {props.children}
      <button>Submit</button>
    </div>
  );
};

export default MainPage;
