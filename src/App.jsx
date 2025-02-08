import Navbar from "./components/Navbar";
//import "./index.css";
import Button from "./components/common/button";
import SectionTtile from "./components/common/sectionTtile";
import { clsx } from 'clsx';
import Container from "./components/common/container";
import TextGradient from "./components/common/textGradient";
const App = () => {
  return (
    <>
      <main>
        {/* <SectionTtile className='bg-green-300' >rohan</SectionTtile>
        <Button onClick={() => alert("Button Clicked!")} className="bg-blue-500 hover:bg-blue-700">
        Click Me
        </Button>
        <TextGradient>hello world</TextGradient>
        <Container className='bg-red-300' >hello</Container>
        <TextGradient className=''>hello world</TextGradient> */}
        <SectionTtile gradient='From Our Client' >Reviews </SectionTtile>
      </main>
    </>
  );
};

export default App;
