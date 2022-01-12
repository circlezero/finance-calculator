import { Container } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

// 이 페이지는 승재님이 작업해주겠지?
const MainPage: FC = () => {
  return (
    <Container>
      <div>Main page</div>
      <ul>
        <li>
          <Link to='/1'>희망회로 계산기</Link>
        </li>
        <li>
          <Link to='/2'>DSR, DTI, LTV가 뭐고 어떻게 계산되나요?</Link>
        </li>
      </ul>
    </Container>
  );
};

export default MainPage;
