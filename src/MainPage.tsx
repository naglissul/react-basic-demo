import { useParams } from "react-router-dom";

//Form
const MainPage: React.FC = () => {
  const { num } = useParams();

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
      PASSED NUM: {num}
    </div>
  );
};

export default MainPage;
