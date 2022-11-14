import * as React from "react";

import Recommendation from "recommendations/components/Recommendation/Recommendation"

export default function RecommendationsPage ({
  recommendations = []
}) {
  return (
    <main>
      <h1>Recommendations</h1>

      {recommendations.map(({ id, name }) => (
        <Recommendation key={id} name={name} />
      ))}
    </main>
  );
};
