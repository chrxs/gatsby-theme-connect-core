import * as React from "react";

import RecommendationsPage from "recommendations/RecommendationsPage";

const IndexPage = () => {
  // 1. get data
  const recommendations = [{
    id: 1,
    name: "Restaurant"
  }, {
    id: 2,
    name: "Spa"
  }]
  // 2. modify data
  // 3. send to Page component

  return <RecommendationsPage recommendations={recommendations} />;
};

export default IndexPage;

export const Head = () => <title>Recommendations</title>;
