import { useNavigate } from "react-router-dom";

export function WrongAccess() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>홈으로</button>
    </div>
  );
}
