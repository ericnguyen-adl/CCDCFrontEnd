
import React, { useEffect, useState } from "react";
import appConfig from './../config';



function DeleteCalendar(props) {

  const username = props.username; 

  const [calendarList, setCalendarList] = useState([]);
  const baseURL = appConfig.BaseURL;
  const [currentCalendarCode, setCurrentCalendarCode] = useState(""); 

  useEffect(() => {
    fetchData();
  }, [currentCalendarCode]);

  const fetchData = () => {
    var request = new XMLHttpRequest();
    request.open('GET', baseURL + 'getCalendarsForUser/' + username, true)
    request.onload = function () {
      var data = JSON.parse(this.response);
      if (data != null) {
        setCalendarList(data);
      }
    }
    request.send()
  }

  const deleteCalendar = () => {
    if(currentCalendarCode == "Select Calendar" || currentCalendarCode == "") {
      alert("Please select a calendar to delete"); 
    } else {
      var request = new XMLHttpRequest();
          request.open('POST', baseURL + 'deleteCalendar' + '/' + currentCalendarCode, true); 
          request.onload = function () {
            var data = JSON.parse(this.response);
            if (data != null) {
              console.log(data.calendarName); 
              alert("The Calendar " + data.calendarName + " has been deleted"); 
              setCurrentCalendarCode("Select Calendar"); 
            }
          }
          request.send();
    }


  }

  return (
    <div class="tabContainer">
      <div class="pageTitle"> Delete your calendar</div>
      <div class="infoText">Select and delete your calendar</div>
      <table class="tableStyle">
        <tr class="rowContainer">
          <td><label>Select a calendar to delete:</label></td>
          <td>
            <select name="calendar" id="calendar" onChange = {e => setCurrentCalendarCode(e.target.value)}>
              <option>Select Calendar</option>
              {
                calendarList.map((option, index) => (
                  <option value={option.calendarCode} key={index}>{option.calendarName}</option>
                ))
              }
            </select>
          </td>
        </tr>
      </table>


{/* I've commented out the CSS style for div id deletePageButtons. It has a  -30px margin.  */}
      <div id = "deletePageButtons"> 
      <input id="deleteButton" type="button" value="Delete" onClick = {()=>deleteCalendar()}></input>
      {/* Why is the cancel button here, simply navigate away from the page.  */}
      {/* <input id="cancelDeleteButton" type="button" value="Cancel"></input> */}
      </div>
      
    </div>

  );
  }
  
  export default DeleteCalendar;



