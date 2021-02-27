import React from 'react';
import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Home from './Pages/Home';
import CreateCalendar from './Pages/CreateCalendar';
import DeleteCalendar from './Pages/DeleteCalendar';
import UpdateCalendar from './Pages/UpdateCalendar';

function App() {
  return (
    <div className="with-react-tabs">
      <div className="headerStyle">
        <div>
          Customized Commit Date Calculator
        </div>
        <div>
        
            <button id = "myLoginButton">Log in</button>
        </div>
      </div>

      <div className="tabStyle">
        <Tabs>
          <TabList>
            <Tab>Home</Tab>
            <Tab>Update Calendar</Tab>
            <Tab>Delete Calendar</Tab>
            <Tab>Create Calendar</Tab>
          </TabList>

          <TabPanel>
            <div>
              <Home></Home>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab-content">
              <UpdateCalendar></UpdateCalendar>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab-content">
              <DeleteCalendar></DeleteCalendar>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab-content">
              <CreateCalendar></CreateCalendar>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}



export default App;


