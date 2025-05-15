import { StatsGrid } from "@/components/StatsGrid/StatsGrid";
import { TableScrollArea } from "@/components/TableScroll/TableScroll";
import { Container, Paper } from "@mantine/core";

export function DashboardPage() {
  return (
    <Container>
      <Paper>
        <StatsGrid />
      </Paper>
      <Paper>
      <TableScrollArea />
      </Paper>
    </Container>
  )
}