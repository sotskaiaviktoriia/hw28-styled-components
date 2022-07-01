import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  font-family: "Nunito Sans";
  font-size: 18px;
  line-height: 25px;
  width: 81px;
  height: 48px;
  border: 1px solid #605dec;
  border-radius: 4px;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;

  width: ${(props) =>
    props.size === "large"
      ? "81px"
      : props.color === "medium"
      ? "76px"
      : props.color === "small"
      ? "#68px"
      : ""};
  height: ${(props) => (props.size === "small" ? "40px" : "")};
  padding: ${(props) => (props.size === "small" ? "8px 16px" : "")};
`;

//   ${(props) => {
//     switch (props.size) {
//       case "large":
//         return `
//                 width: 81px;
//             `;
//       case "medium":
//         return `
//                 width: 76px;
//             `;
//       case "small":
//         return `
//                 width: 68px;
//                 height: 40px;
//                 padding: 8px 16px;
//             `;
//     }
//   }};
// `;

const StyledPRimaryButton = styled(StyledButton)`
background: #605DEC;
color: #fff;
border: 1px solid #605DEC;

    :hover {
        background: #1513A0;
        border: 1px solid #1513A0;
    }
    :disabled {
        background: rgba(203, 212, 230, 0.3);
        border: 1px solid #7C8DB0;
        color:#7C8DB0;
        pointer-events: none;
    }
}
`;
const StyledSecondaryButton = styled(StyledButton)`
  background: #fff;
  color: #605dec;
  border: 1px solid #605dec;

  :hover {
    background: #e9e8fc;
  }

  :disabled {
    background: #fff;
    border: 1px solid #7c8db0;
    color: #7c8db0;
    pointer-events: none;
  }
`;

const Button = ({ children, color, size, disabled }) => {
  if (color === "primary") {
    return (
      <StyledPRimaryButton size={size} disabled={disabled}>
        {children}
      </StyledPRimaryButton>
    );
  } else if (color === "secondary") {
    return (
      <StyledSecondaryButton size={size} disabled={disabled}>
        {children}
      </StyledSecondaryButton>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  size: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
