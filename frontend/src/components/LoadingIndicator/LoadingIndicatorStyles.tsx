import { Box, styled } from "@mui/material";

const CenteredColumnBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
    width: "100%",
}))

export {
    CenteredColumnBox
}
