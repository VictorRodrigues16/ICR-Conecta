import {} from 'react';
import Introduction from "../components/Introduction"
import OurApp from "../components/OurApp"
import Information from "../components/Information"
import Forms from "../components/Forms"
import Map from '../components/Map';


export default function Home() {
  return (
    <>
      <Introduction/>
      <OurApp/>
      <Map/>
      <Information/>
      <Forms/>
    </>
  );
}