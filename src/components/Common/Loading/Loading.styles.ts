import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay-ts";

export const LoadingWrapper = styled(LoadingOverlay)`
  width: 100%;
  height: 100%;

  .MyLoader_overlay {
    .css-dtr75s {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &.MyLoader_wrapper--active {
  }
`;
