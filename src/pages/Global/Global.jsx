import React, { useEffect, useState } from "react";
import CardSection from "../../components/CardSection/CardSection";
import axios from "axios";
import RegionSection from "../../components/RegionSection/RegionSection";
import Hero from "../../components/Hero/Hero";

function GlobalPage() {
 const [dataGlobal, setDataGlobal] = useState([]);
 const [dataRegion, setDataRegion] = useState([]);
 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await axios.get(
     "https://covid-fe-2023.vercel.app/api/global.json",
    );
    const result = response.data;
    setDataGlobal(result.global);
    setDataRegion(result.regions);
   } catch (error) {
    console.log(error);
   }
  };

  fetchData();
 }, []);

 return (
  <>
   <Hero />
   <CardSection
    title={"Global Situation"}
    paragraph={"Data Covid Berdasarkan Global"}
    data={dataGlobal}
   />
   <RegionSection
    title={"Situation by Region"}
    paragraph={"Bacaan Pilihan Covid"}
    data={dataRegion}
   />
  </>
 );
}
export default GlobalPage;
