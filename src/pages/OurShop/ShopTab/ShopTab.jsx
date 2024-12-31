import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import CategoryTabPanel from "../../../Shared/CategoryTabPanel/CategoryTabPanel";

const ShopTab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  //load data for panel wise
  const [menu] = useMenu();
  const offers = menu.filter(
    (everyOffer) => everyOffer?.category === "offered"
  );

  const desserts = menu.filter(
    (everyOffer) => everyOffer?.category === "dessert"
  );
  const pizzas = menu.filter((everyOffer) => everyOffer?.category === "pizza");
  const salads = menu.filter((everyOffer) => everyOffer?.category === "salad");
  const soups = menu.filter((everyOffer) => everyOffer?.category === "soup");
  const drinks = menu.filter((everyOffer) => everyOffer?.category === "drinks");

  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="w-fit mx-auto mt-10 md:mt-20">
          <TabList>
            <Tab>Offered</Tab>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
            <Tab>dessert</Tab>
            <Tab>drinks</Tab>
          </TabList>
        </div>
        <TabPanel>
          <CategoryTabPanel category={offers}></CategoryTabPanel>
        </TabPanel>
        <TabPanel>
          <CategoryTabPanel category={salads}></CategoryTabPanel>
        </TabPanel>
        <TabPanel>
          <CategoryTabPanel category={pizzas}></CategoryTabPanel>
        </TabPanel>
        <TabPanel>
          <CategoryTabPanel category={soups}></CategoryTabPanel>
        </TabPanel>
        <TabPanel>
          <CategoryTabPanel category={desserts}></CategoryTabPanel>
        </TabPanel>
        <TabPanel>
          <CategoryTabPanel category={drinks}></CategoryTabPanel>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopTab;
