import uzbekistanMap from "../data/uzbekistan.json";
import { VectorMap } from "@south-paw/react-vector-maps";
import { Box, Card, Typography } from "@material-ui/core";
import styles from "../styles/styles.module.scss";
import { useState } from "react";
import { useMap } from "../context/MapContext";

export function Map() {
  const { selectedCountry, setSelectedCountry } = useMap();

  const [hovered, setHovered] = useState<any>("None");
  const [focused, setFocused] = useState<any>("None");
  const [clicked, setClicked] = useState<any>("None");

  const layerProps = {
    onMouseEnter: ({ target }: any) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }: any) => setHovered("None"),
    onFocus: ({ target }: any) => setFocused(target.attributes.name.value),
    onBlur: ({ target }: any) => setFocused("None"),
    onClick: ({ target }: any) =>
      setSelectedCountry(target.attributes.name.value),
  };

  return (
    <Card className={styles.styledCard}>
      <Typography gutterBottom variant="h5" component="h2">
        Uzbekistan map
      </Typography>
      <div className={styles.container}>
        <VectorMap {...uzbekistanMap} layerProps={layerProps} />
      </div>
    </Card>
  );
}
