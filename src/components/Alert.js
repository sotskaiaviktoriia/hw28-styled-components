import styled from "styled-components";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";

const StyledAlert = styled.div`
  width: 1440px;
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  position: relative;

  color: ${(props) =>
    props.color === "primary"
      ? "#fff"
      : props.color === "error"
      ? "#fff"
      : props.color === "warning"
      ? "#1513A0"
      : ""};
  background: ${(props) =>
    props.color === "primary"
      ? "#605DEC"
      : props.color === "error"
      ? "#EB5757"
      : props.color === "warning"
      ? "#FFD12F"
      : ""};
`;

// ${(props) => {
//   switch (props.color) {
//     case "primary":
//       return `
//             background: #605DEC;
//             color:#fff;
//             `;
//     case "error":
//       return `
//           background: #EB5757;
//             color:#fff;
//             `;
//     case "warning":
//       return `
//           background: #FFD12F;
//           color:#1513A0;
//             `;
//   }
// }};
//`;

const Alert = ({ children, color, onClose }) => (
  <StyledAlert color={color}>
    {children}
    <CloseIcon
      className="button-icon"
      sx={{ color: "#fff" }}
      onClick={onClose}
    />
  </StyledAlert>
);

Alert.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "warning", "error"]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
