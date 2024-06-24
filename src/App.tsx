import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {theme} from "./theme";
import AppRoutes from "./AppRoutes.tsx";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppRoutes/>
    </MantineProvider>
  );
}
