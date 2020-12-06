import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useMap } from "../context/MapContext";
import styles from "../styles/styles.module.scss";
import info from "../data/info.json";
import { useEffect, useState } from "react";

export function SideBar() {
  const { selectedCountry, setSelectedCountry } = useMap();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (selectedCountry !== null) {
      const data = info.find((i) => i.name === selectedCountry);
      if (data?.info) {
        console.log(data);
        setData(data);
      }
    }
  }, [selectedCountry]);

  if (data === null) return null;

  return (
    <Card className={styles.styledCard}>
      <Typography gutterBottom variant="h5" component="h2">
        {data.name}
      </Typography>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {Object.entries(data.info).map((row: any, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell>{row[0]}</TableCell>
                  <TableCell>{row[1]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default SideBar;
