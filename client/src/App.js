
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Main';
import Navbar from './components/Navbar';
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Lcv from "./components/Lcv";
import Welcome from "./components/Welcome";

import Customers from "./components/LCVoperations/customers";
import Finance from "./components/LCVoperations/finance";
import HR from "./components/LCVoperations/HR";
import Library from "./components/LCVoperations/library";
import Logistics from "./components/LCVoperations/logistics";
import Maintenance from "./components/LCVoperations/maintenance";
import OPUS from "./components/LCVoperations/Opus";
import Production from "./components/LCVoperations/production";
import SalesOrders from "./components/LCVoperations/salesorders";
import Stocks from "./components/LCVoperations/stocks";
import Technical from "./components/LCVoperations/technical";
import Utilities from "./components/LCVoperations/utilities";
import WorkOrders from "./components/LCVoperations/workorders";
import TrackOrders from "./components/LCVoperations/TrackOrders";
import Myextras from './components/LCVoperations/extras';

import Extras from './components/ExtraPages/extras';
import Favorites from './components/ExtraPages/favorites';
import News from './components/ExtraPages/news';


import VITALDOCUMENTS from './components/LCVoperations/hrcomponents/vitaldocuments';
import LEAVEAPPLICATION from './components/LCVoperations/hrcomponents/leaveApplication';
import EMPLOYEEFORM from './components/LCVoperations/hrcomponents/employeeForm';
import EMPLOYEESERVICES from './components/LCVoperations/hrcomponents/employeeServices';

import Priority from './components/LCVoperations/salesordercomponents/Priority';
import AllDays from './components/LCVoperations/salesordercomponents/Alldays';
import Tendays from './components/LCVoperations/salesordercomponents/tenDays';
import MonthSO from './components/LCVoperations/salesordercomponents/Month';

import Mostregular from './components/LCVoperations/customercomponents/mostregular';
import Newestcustomers from './components/LCVoperations/customercomponents/newestcustomers';
import Oldestcustomers from './components/LCVoperations/customercomponents/longestserved';
import Allcustomers from './components/LCVoperations/customercomponents/mostregular';

import WOtendays from './components/LCVoperations/WOcomponents/WOtendays';
import WOlastmonth from './components/LCVoperations/WOcomponents/WOlastMonth';
import WOalldays from './components/LCVoperations/WOcomponents/WOAlldays';
import WOsearch from './components/LCVoperations/WOcomponents/WOsearch';

import Auxiliary from './components/LCVoperations/mantcomponents/auxiliary';
import Additive from './components/LCVoperations/mantcomponents/Additive';
import Subtrade from './components/LCVoperations/mantcomponents/Subtrade';
import Forming from './components/LCVoperations/mantcomponents/Forming';
import Profiling from './components/LCVoperations/mantcomponents/Profiling';
import Vehicles from './components/LCVoperations/mantcomponents/Vehicle';
import Buildings from './components/LCVoperations/mantcomponents/Buildings';
import Automation from './components/LCVoperations/mantcomponents/Automation';

import Bystar4025 from './components/LCVoperations/mantcomponents/Bystar4025';
import Byspeed3015 from './components/LCVoperations/mantcomponents/Byspeed3015';
import Ms4633 from './components/LCVoperations/mantcomponents/s4633Sa';
import H560HA from './components/LCVoperations/mantcomponents/h560ha';
import GHS1330 from './components/LCVoperations/mantcomponents/ghs1330';
import Bysprint4020 from './components/LCVoperations/mantcomponents/Bysprint4020';

import OSPU100C from './components/LCVoperations/mantcomponents/OSP-U100L';
import BMT3086R   from './components/LCVoperations/mantcomponents/BMT-3086R';
import Ibarmia from './components/LCVoperations/mantcomponents/VerticalIbarmia';
import ConLunknown from './components/LCVoperations/mantcomponents/ConLatheOkuma';
import SN50C from './components/LCVoperations/mantcomponents/SN50C';
import OSPU100L from './components/LCVoperations/mantcomponents/OSP-U100L';
import BMT2473 from './components/LCVoperations/mantcomponents/BMT-2473R';

import BystronicH from './components/LCVoperations/mantcomponents/Fbystronic-hammerle';
import BystronicB from './components/LCVoperations/mantcomponents/Fbystronic-Beyeller';
import Adira from './components/LCVoperations/mantcomponents/Fadira-QHA-2008';
import Roll4 from './components/LCVoperations/mantcomponents/F4RollCNC';
import Roll3 from './components/LCVoperations/mantcomponents/F3RollMachine';
import SecBend from './components/LCVoperations/mantcomponents/Fsectionbending';

import Beveling from './components/LCVoperations/mantcomponents/axBeveling';
import Powermax85 from './components/LCVoperations/mantcomponents/axPCpmax';
import Powermax105 from './components/LCVoperations/mantcomponents/axPCpmax105';
import Oxfuel from './components/LCVoperations/mantcomponents/axOxfuelFC';
import CG30 from './components/LCVoperations/mantcomponents/axSLGCcg30';
import GCJ from './components/LCVoperations/mantcomponents/axSLGCbeetle';
import LK12 from './components/LCVoperations/mantcomponents/axSLGClk-12'; 

import Fork1 from './components/LCVoperations/mantcomponents/veFork1';
import Fork2 from './components/LCVoperations/mantcomponents/veFork2'
import Bukkie from './components/LCVoperations/mantcomponents/veBukkie';
import Chasis from './components/LCVoperations/mantcomponents/veChassis';

import SGSover1 from './components/LCVoperations/mantcomponents/buiSGSoverhead';
import Demag from './components/LCVoperations/mantcomponents/buDemag1';
import Demag2 from './components/LCVoperations/mantcomponents/buiDemag2';
import SGSover2 from './components/LCVoperations/mantcomponents/buiSGcrane1';
import SGSover3 from './components/LCVoperations/mantcomponents/buiSGcrane2';
import Diesel from './components/LCVoperations/mantcomponents/buiDieselGen';
import Compressor from './components/LCVoperations/mantcomponents/buiCompressor';
import Rotary from './components/LCVoperations/mantcomponents/buiRotaryScrew';


import Magnetic from './components/LCVoperations/mantcomponents/auxMagnetic';
import Magnetic2 from './components/LCVoperations/mantcomponents/auxMagnetic2';
import Magnetic3 from './components/LCVoperations/mantcomponents/auxMagnetic3';
import Strapping from './components/LCVoperations/mantcomponents/auxStrapping';
import Dot from './components/LCVoperations/mantcomponents/auxDotPenMarking';
import Bevelling from './components/LCVoperations/mantcomponents/auxBEV1';
import Bevelling2 from './components/LCVoperations/mantcomponents/auxBEV2';
import Bevelling3 from './components/LCVoperations/mantcomponents/auxBEV3';
import Bevelling4 from './components/LCVoperations/mantcomponents/auxBev4';
import Mobile from './components/LCVoperations/mantcomponents/auxMobileBev';
import PC from './components/LCVoperations/mantcomponents/auxPlasmaCutter';
import PC2 from './components/LCVoperations/mantcomponents/auxPlasmaCutter2';
import OxfuelFC from './components/LCVoperations/mantcomponents/auxOxfuelCutter';
import SLGC from './components/LCVoperations/mantcomponents/auxSLGC';
import SLGCb from './components/LCVoperations/mantcomponents/auxSLGCbeetle';
import SLGC3 from './components/LCVoperations/mantcomponents/auxStraightSLGC';

import Robot from './components/LCVoperations/mantcomponents/autoRobot';
import AutoRobot from './components/LCVoperations/mantcomponents/automaticRobot';

import GMAW1 from './components/LCVoperations/mantcomponents/plusGMAW1';
import GMAW2 from './components/LCVoperations/mantcomponents/plusGMAW2';
import GMAW3 from './components/LCVoperations/mantcomponents/plusGMAW3';
import GMAW4 from './components/LCVoperations/mantcomponents/plusGMAW4'
import SMAW from './components/LCVoperations/mantcomponents/plusSMAW';

import UnderConstruction from './components/LCVoperations/Construction';


function App() {
  return(
      <>
      
      <Router>
      <Navbar />
      <Switch>
          <Route path ="/" exact render={() => <Welcome/>}/>
          <Route path ="/lcv" exact render={() => <Lcv/>}/>
          <Route path ="/register" exact render={() => <Register/>}/>
          <Route path ="/login" exact render={() => <Login/>}/>
          <Route path ="/upload" exact render={() => <Upload/>}/>
          <Route path ="/chat" exact render={() => <Settings/>}/>
          <Route path ="/profile" exact render={() => <Profile/>}/>
          <Route path = '/home' exact render={()=> <Home/>}/>
          <Route path = "/welcome" exact render={()=><Welcome/>}/>

          <Route path ="/customers" exact render={() => <Customers/>}/>
          <Route path ="/finance" exact render={() => <Finance/>}/>
          <Route path ="/hr" exact render={() => <HR/>}/>
          <Route path ="/library" exact render={() => <Library/>}/>
          <Route path ="/logistics" exact render={() => <Logistics/>}/>
          <Route path ="/maintenance" exact render={() => <Maintenance/>}/>
          <Route path ="/Opus" exact render={() => <OPUS/>}/>
          <Route path ="/production" exact render={() => <Production/>}/>
          <Route path ="/salesorders" exact render={() => <SalesOrders/>}/>
          <Route path ="/stocks" exact render={() => <Stocks/>}/>
          <Route path ="/technical" exact render={() => <Technical/>}/>
          <Route path ="/utilities" exact render={() => <Utilities/>}/>
          <Route path ="/workorders" exact render={() => <WorkOrders/>}/>
          <Route path ="/trackorders" exact render={()=> <TrackOrders/>}/>
          <Route path = "/myextras" exact render = {()=><Myextras/>}/>

          <Route path ="/favorites" exact render={() => <Favorites/>}/>
          <Route path ="/events" exact render={()=> <Extras/>}/>
          <Route path="/news" exact render={()=><News/>}/>

          <Route path="/vitaldocuments" exaxt render={()=><VITALDOCUMENTS/>}/>
          <Route path="/leaveapplication" exaxt render={()=><LEAVEAPPLICATION/>}/>
          <Route path="/employeeform" exaxt render={()=><EMPLOYEEFORM/>}/>
          <Route path="/employeeservices" exaxt render={()=><EMPLOYEESERVICES/>}/>

          <Route path="/priorityso" exaxt render={()=><Priority/>}/>
          <Route path="/alldays" exaxt render={()=><AllDays/>}/>
          <Route path="/tendays" exaxt render={()=><Tendays/>}/>
          <Route path="/month" exaxt render={()=><MonthSO/>}/>

          <Route path="/mostregular" exaxt render={()=><Mostregular/>}/>
          <Route path="/newestcustomers" exaxt render={()=><Newestcustomers/>}/>
          <Route path="/oldestcustomers" exaxt render={()=><Oldestcustomers/>}/>
          <Route path="/allcustomers" exaxt render={()=><Allcustomers/>}/>

          <Route path="/wotendays" exact render={()=><WOtendays/>}/>
          <Route path="/wolastmonth" exact render = {()=><WOlastmonth/>}/>
          <Route path ="/woalldays" exact render = {()=><WOalldays/>}/>
          <Route path="/wosearch" exact render = {()=><WOsearch/>}/>

          <Route path="/auxiliary" exact render={()=> <Auxiliary/>}/>
          <Route path ="/additive" exact render ={()=><Additive/>}/>
          <Route path="/forming" exact render ={()=> <Subtrade/>}/>
          <Route path ="/subtrade" exact render = {()=><Forming/>}/>
          <Route path ="/profiling" exact render ={()=><Profiling/>}/>
          <Route path ="/vehicles" exact render ={()=><Vehicles/>}/>
          <Route path ="/buildings" exact render={()=><Buildings/>}/>
          <Route path ="/automation" exact render={()=><Automation/>}/>

          <Route path ="/bystar" exact render = {()=> <Bystar4025/>}/>
          <Route path ="/byprint" exact render ={()=><Bysprint4020/>}/>
          <Route path = "/byspeed" exact render ={()=><Byspeed3015/>}/>
          <Route path = "/ms4633" exact render ={()=> <Ms4633/>}/>
          <Route path = "/hs560ha" exact render ={()=><H560HA/>}/>
          <Route path = "/ghs1330" exact render ={()=><GHS1330/>}/>

          <Route path = "/bmt2473" exact render = {()=> <BMT2473/>}/>
          <Route path = "/bmt3086r" exact render = {()=><BMT3086R/>}/>
          <Route path = "/ibarmia" exact render = {()=><Ibarmia/>}/>
          <Route path = "/unknown" exact render = {()=><ConLunknown/>}/>
          <Route path = "/sn50c" exact render = {()=><SN50C/>}/>
          <Route path = "/osp4100c" exact render = {()=><OSPU100C/>}/>

          <Route path = "/bystronichamelle" exact render = {()=> <BystronicH/>}/>
          <Route path = "/bystronic-beyeller" exact render = {()=><BystronicB/>}/>
          <Route path = "/bystronic-adira" exact render ={()=> <Adira/>}/>
          <Route path = "/4roll" exact render = {()=><Roll4/>}/>
          <Route path = "/3roll" exact render ={()=><Roll3/>}/>
          <Route path = "/section-bending" exact render = {()=><SecBend/>}/>

          <Route path = "/beveling" exact render = {()=><Beveling/>}/>
          <Route path = "/powermax85" exact render={()=><Powermax85/>}/>
          <Route path = "/powermax105" exact render ={()=><Powermax105/>}/>
          <Route path = "/oxfuel" exact render ={()=><Oxfuel/>}/>
          <Route path = "/cg30" exact render = {()=><CG30/>}/>
          <Route path = "/gcj" exact render = {()=><GCJ/>}/>
          <Route path = "/lk12" exact render = {()=><LK12/>}/>

          <Route path = "/forklift1" exact render = {()=><Fork1/>}/>
          <Route path = "/forklift" exact render = {()=><Fork2/>}/>
          <Route path = "/bukkie" exact render = {()=><Bukkie/>}/>
          <Route path = "/chasis" exact render = {()=><Chasis/>}/>

          <Route path = "/sgs1" exact render = {()=><SGSover1/>} />
          <Route path="/demag" exact render = {()=><Demag/>}/>
          <Route path = "/demag2" exact render ={()=><Demag2/>}/>
          <Route path = "/sgs2" exact render ={()=><SGSover2/>}/>
          <Route path = "/sgs3" exact render = {()=><SGSover3/>}/>
          <Route path = "/diesel" exact render = {()=> <Diesel/>}/>
          <Route path = "/compressor" exact render = {()=> <Compressor/>}/> 
          <Route path = "/rotary" exact render = {()=> <Rotary/>}/> 

          <Route path = "/magnetic" exact render = {()=><Magnetic/>}/>
          <Route path = "/magnetic2" exact render = {()=><Magnetic2/>}/>
          <Route path = "/magnetic3" exact render ={()=><Magnetic3/>}/>
          <Route path = "/strapping" exact render = {()=><Strapping/>}/>
          <Route path = "/dot" exact render = {()=><Dot/>}/>
          <Route path = "/bevelling" exact render = {()=><Bevelling/>}/>
          <Route path = "/bevelling2" exact render = {()=><Bevelling2/>}/>
          <Route path = "/bevelling3" exact render = {()=><Bevelling3/>}/>
          <Route path = "/bevelling4" exact render = {()=><Bevelling4/>}/>
          <Route path = "/mobile" exact render = {()=><Mobile/>}/>
          <Route path = "/pc" exact render = {()=><PC/>}/>
          <Route path = "/pc2" exact render = {()=><PC2/>}/>
          <Route path = "/oxflame" exact render = {()=><OxfuelFC/>}/>
          <Route path = "/slgc" exact render = {()=><SLGC/>}/>
          <Route path = "/slgcb" exact render = {()=><SLGCb/>}/>
          <Route path = "/slgc3" exact render = {()=><SLGC3/>}/>

          <Route path = "/robot" exact render = {()=><Robot/>}/>
          <Route path = "/autorobot" exact render = {()=><AutoRobot/>}/>

          <Route path = "/gmaw" exact render = {()=><GMAW1/>}/>
          <Route path = "/gmaw2" exact render = {()=><GMAW2/>}/>
          <Route path = "/gmaw3" exact render = {()=><GMAW3/>}/>
          <Route path = "/gmaw4" exact render = {()=><GMAW4/>}/>
          <Route path = "/smaw" exact render = {()=><SMAW/>}/>

          <Route path = "/underconstruction" exact render= {()=><UnderConstruction/>}/>


          </Switch>

          {/* <Footer/> */}
      </Router>
      </>

  
  )};

export default App;
