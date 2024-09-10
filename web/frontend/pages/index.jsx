import { Layout, Page } from "@shopify/polaris";
import { Card, OrderDetails, OrderGraphs } from "../components";
import { useEffect, useState } from "react";

export default function HomePage() {
  let [products, setProducts] = useState(" ");
  let [collection, setCollection] = useState(" ");
  let [order, setOrder] = useState(" ");
  let [fulfuilled, setFulfilled] = useState("");
  let [remaining, setRemaining] = useState("");

  const fetchProductData = async () => {
    try {
      const response = await fetch("/api/products/count", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setProducts(data.count);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCollectionData = async () => {
    try {
      const response = await fetch("/api/collections/count", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setCollection(data.count);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOrderData = async () => {
    try {
      const response = await fetch("/api/Orders/all");
      const data = await response.json();
      console.log(data.count);
      setOrder(data.count);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductData();
    fetchCollectionData();
    fetchOrderData();
    console.log(fulfuilled);
  }, []);

  return (
    <Page fullWidth>
      <div className="home-section">
        <div className="graphs-section">
          <OrderGraphs />
        </div>
        <div className="cards-section">
          <Layout>
            <Card title="Total Orders" data={order} ordercard />
            <Card title="Fullfilled Orders" data={0} fullfilledcard />
            <Card title="Remains Orders" data={0} remainingcard />
            <Card title="Total Products" data={products} productcard />
            <Card title="Total Collections" data={collection} collectioncard />
          </Layout>
        </div>

        <div className="order-details-section">
          <OrderDetails />
        </div>

        <div className="cards-section"></div>

        <div className="cards-section"></div>
      </div>
    </Page>
  );
}
