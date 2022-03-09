import React from "react";
import Button from "@mui/material/Button";

import { withRouter } from "react-router";
import styled from "styled-components";

const Navi = styled.div`
  display: flex;
  margin-top: 10px;
`;
const NavButton = styled(Button)({
  borderRadius: "5px",
  '&:hover': {
    backgroundColor: '#3b5998',
  },
});

const RightMenu = (props) => {
  return (
    <Navi>
      {/* <NavButton sx={{ mr: 1 }} href="/about" color="inherit">
        소개
      </NavButton> */}
      <NavButton sx={{ mr: 1 }} href="/webmeeting" color="inherit">
        화상회의
      </NavButton>
      {/* <NavButton sx={{ mr: 1 }} href="/board" color="inherit">
        게시판
      </NavButton> */}
    </Navi>
  );
};

export default withRouter(RightMenu);
