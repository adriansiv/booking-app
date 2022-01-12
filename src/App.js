import { Box } from '@chakra-ui/react';
import Header from './componets/Header';
import ProfessionalData from './Data/ProfessionalData';
import UserData from './Data/UserData';
import ProfessionalProfile from './componets/Dinamic Components/ProfessionalProfile';
import UserProfile from './componets/Dinamic Components/UserProfile';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { useColorMode } from '@chakra-ui/color-mode';
  
function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box>
      <Router>
        <Header isDark={isDark} toggleColorMode={toggleColorMode}/>
            <Routes>
            {ProfessionalData.map((item, index) => {
              return (
                  <Route key={index} exact path={item.path} element={
                  <Box>
                    <ProfessionalProfile data={item}/>
                  </Box>}/>
              )
          })}
            {UserData.map((item, index) => {
              return (
                  <Route key={index} exact path={item.path} element={
                  <Box>
                    <UserProfile data={item}/>
                  </Box>}/>
              )
            })}   
            </Routes>
      </Router>
    </Box>
  );
}

export default App;
