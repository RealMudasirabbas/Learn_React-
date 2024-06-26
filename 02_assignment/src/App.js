// import Props from '../src/components/props/Props';
import './App.css';
import SizeProp from './components/props/SizeProp';
import Profile from './components/card/Profile';
import DefaultProps from './components/defaultProps/DefaultProps';


function App() {
  const maria = {
    name: "Maria Skłodowska-Curie",
    profession: "physicist and chemist",
    awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, DavyMedal, Matteucci Medal",
    discovery: "polonium (chemical element)"
  }
  const katsuko = {
      name: "Katsuko Saruhashi",
      profession: "geochemist",
      awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
      discovery: "a method for measuring carbon dioxide in seawater",
  };
  return (
      <>
          {/* <Props /> */}

          <SizeProp katsuko={katsuko} maria={maria} />
          <Profile />
          <DefaultProps name="Shoaib" age={20} />
      </>
  );
}

export default App;
