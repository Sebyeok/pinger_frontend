import { useNavigate } from "react-router-dom";

export function WrongAccess() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <button className="ts-20-semibold" onClick={() => navigate("/")}>
        홈으로
      </button>
    </div>
  );
}
