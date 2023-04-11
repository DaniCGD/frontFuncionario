import { Box, Stack, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleExpansionPanel from "./SimpleExpansionPanel";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppExpansionPanelLogistics = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Expansion Panel" }]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Customized expansion panels">
          <SimpleExpansionPanel/>
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppExpansionPanelLogistics;
