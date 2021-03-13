
// import appConfig from './../config';


function CreateCalendar() {
  return (
    <div class="tabContainer">
      <div class="pageTitle"> Create your calendar</div>
      <div class="infoText">Create your customized calendar</div>
      <table class="tableStyle">

        <tr class="rowContainer">
          <td class="removeDateTableRow"><label>Calendar Code:</label></td>
          <td class="removeDateTableRow"><input id="inputText" type="text"></input></td>
        </tr>
        <tr class="rowContainer">
          <td class="removeDateTableRow"><label>Calendar Name:</label></td>
          <td class="removeDateTableRow"><input id="inputText" type="text"></input></td>
        </tr>

        <tr class="rowContainer">
          <td class="removeDateTableRow"><label>Description:</label></td>
          <td class="removeDateTableRow"><input id="inputText" type="text"></input></td>
        </tr>

        <tr class="rowContainer">
          <td id="nonworkingdaysLabel" class="removeDateTableRow"><label>Non-working days:</label></td>
          <td id="nonWorkingdaysCheckboxes" class="removeDateTableRow">
            <table class="selectDateInWeekTable">
              <tr>
                <td><input type="checkbox"></input> <label>Monday</label></td>
              </tr>
              <tr>
                <td><input type="checkbox"></input> <label>Tuesday</label></td>
              </tr>
              <tr>
                <td><input type="checkbox"></input> <label>Wednesday</label></td>
              </tr>
              <tr>
                <td><input type="checkbox"></input> <label>Thursday</label></td>
              </tr>
              <tr>
                <td><input type="checkbox"></input> <label>Friday</label></td>
              </tr>
            </table>
          </td>
        </tr>

        {/* I'd say that adding extra days should be in the update calendar tab */}

        {/* <tr class="rowContainer">
          <td class="removeDateTableRow" colspan="2"><label>Add other non-working days:</label></td>          
        </tr>

        <tr class="rowContainer">
          <td class="removeDateTableRow">
            <label class="updateCalendarLabels">Name: </label>
          </td>
          <td class="removeDateTableRow">
            <input id="inputText" name="newDateNameTextBox"type="text"></input>
          </td>
        </tr>

        <tr class="rowContainer">
          <td class="removeDateTableRow">
            <label class="updateCalendarLabels">Date: </label>
          </td>
          <td  class="removeDateTableRow">
            <input id="datePicker" type="date" name="newDateInput"></input>
          </td>
        </tr>

        <tr class="rowContainer">
          <td class="removeDateTableRow"></td>
          <td class="removeDateTableRow">
            <input id="addNonWorkingdayButton" type="button" value="Add Extra Day"></input>
          </td>
        </tr> */}


      </table>


{/* Does the save button, commit changes to database, 
or are the changes committed when using the add / remove buttons above? */}
      <input id="updateButton" type="button" value="Save"></input>
      <input id="cancelButton" type="button" value="Cancel"></input>
    </div>

  );
}

export default CreateCalendar;



