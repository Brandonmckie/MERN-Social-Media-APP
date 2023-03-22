import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "2rem 1.5rem 1rem 2rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.9rem",
}));

export default WidgetWrapper;