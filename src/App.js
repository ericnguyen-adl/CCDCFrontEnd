import React, { useEffect, useState } from 'react';
import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Home from './Pages/Home';
import CreateCalendar from './Pages/CreateCalendar';
import DeleteCalendar from './Pages/DeleteCalendar';
import UpdateCalendar from './Pages/UpdateCalendar';
import UserAdmin from './Pages/UserAdmin';
import { Modal, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import appConfig from '../src/config';
import logo from '../src/logo.png'; 

function App() {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = appConfig.BaseURL;

  const [displayWelcomeCondition, setDisplayWelcomeCondition] = useState(false); 


  const displayLoginModal = () => {
    setLoginModalVisible(true);
  }

  const login = () => {
    if (username == "" || password == "") {
      alert("Please enter username and password")
    } else {
      var request = new XMLHttpRequest();
      request.open('POST', baseURL + 'login/' + username + '/' + password, true)
      request.onload = function () {
        var data = JSON.parse(this.response);
        if (data == true) {
          alert("Log in Successfully!");
          setLoginModalVisible(false);
          setDisplayWelcomeCondition(true); 
        } else {
          alert("Wrong credential!");
          setDisplayWelcomeCondition(false); 
        }
      }
      request.send()
    }
  }

  const logout = () => {
    setUsername(""); 
    setDisplayWelcomeCondition(false); 
  }

  const close = () => {
    setLoginModalVisible(false);
  }
  return (
    <>
      <div className="with-react-tabs">
        <div className="headerStyle">
          <div>
            <div>Customized Commit Date Calculator</div>
            <div><img id="logo" src={logo}/></div>
          </div>
          <div>
            {
              (displayWelcomeCondition) 
              ? 
              <p id="welcomeMessage"> Welcome, {username} </p>
              :
              <p></p>
            }
            <Button id="myLoginButton" onClick={() => displayLoginModal()}>Log in</Button>
            <Button id="myLogoutButton" onClick={() => logout()}>Log Out</Button>
          </div>

        </div>

        <div className="tabStyle">
          <Tabs>
            <TabList>
              <Tab>Home</Tab>
              <Tab>Update Calendar</Tab>
              <Tab>Delete Calendar</Tab>
              <Tab>Create Calendar</Tab>
              <Tab>User Admin</Tab>
            </TabList>

            <TabPanel>
              <div>
                <Home username = {username}></Home>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <UpdateCalendar username = {username}></UpdateCalendar>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <DeleteCalendar username = {username}></DeleteCalendar>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <CreateCalendar username = {username}></CreateCalendar>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <UserAdmin username = {username}></UserAdmin>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <Modal
        show={loginModalVisible}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>
            Log in
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Username:</h6>
          <input id="inputUsernameText" type="text" onChange={e => setUsername(e.target.value)}></input>
          <h6>Password:</h6>
          <input id="inputPasswordText" type="text" onChange={e => setPassword(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => login()}>Log in</Button>
          <Button onClick={() => close()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default App;


