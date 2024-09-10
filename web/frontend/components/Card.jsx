import { Layout, LegacyCard } from "@shopify/polaris";
import React from "react";
import "../index.css";

export const Card = ({
  title,
  data,
  productcard,
  collectioncard,
  ordercard,
  remainingcard,
  fullfilledcard,
}) => {
  return (
    <>
      <Layout.Section oneThird>
        <LegacyCard title={title} sectioned>
          <h1 className="total_count">
            {productcard && data}
            {collectioncard && data}
            {ordercard && data}
            {remainingcard && data}
            {fullfilledcard && data}
          </h1>
        </LegacyCard>
      </Layout.Section>
    </>
  );
};
