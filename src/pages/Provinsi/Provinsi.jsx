import { useContext } from "react";
import CardSection from "../../components/CardSection/CardSection";
import FormCovid from "../../components/FormCovid/FormCovid";
import Table from "../../components/Table/Table";
import DataContext from "../../context/DataContext";
import data from "../../utils/constants/indonesia";
import Hero from "../../components/Hero/Hero";

function ProvinsiPage() {
 const cardData = data.indonesia;

 const { dataProvinsi } = useContext(DataContext);
 console.log(dataProvinsi);

 return (
  <>
   <Hero />
   <CardSection
    title={"Provinsi"}
    paragraph={"Data Covid Berdasarkan Provinsi"}
    data={cardData}
   />
   <Table
    title={"Situation by Provinces"}
    paragraph={"Data Covid Berdasarkan Provinsi"}
    data={dataProvinsi}
   />
   <FormCovid />
  </>
 );
}

export default ProvinsiPage;
