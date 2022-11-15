import * as React from "react";
import { Box, Button, Heading, useThemeUI } from "theme-ui";

import Recommendation from "recommendations/components/Recommendation/Recommendation";
import * as styles from "recommendations/RecommendationsPage.styles";

export default function RecommendationsPage({ recommendations = [] }) {
  const {
    theme: { rawColors },
    colorMode,
    setColorMode,
  } = useThemeUI();


  const nextColorMode = Object.keys(rawColors.modes).filter(
    (mode) => mode !== colorMode
  )[0];

  const handleToggleColorModeClick = () => {
    setColorMode(nextColorMode);
  };

  return (
    <Box sx={styles.recommendationsPage}>
      <Button onClick={handleToggleColorModeClick}>{nextColorMode}</Button>

      <Heading as="h1">Recommendations</Heading>

      {recommendations.map(({ id, name }) => (
        <Recommendation key={id} name={name} />
      ))}
    </Box>
  );
}
