
import appConfig from './../config'; 


function CreateCalendar() {
  return (
    <div class="tabContainer">
      <div class="pageTitle"> Create your calendar</div>
      <div class="infoText">Create your customized calendar</div>
      <table class="tableStyle">
        <tr class="rowContainer">
          <td><label>Calendar Code:</label></td>          
          <td><input id="inputText" type="text"></input></td>
        </tr>
        <tr class="rowContainer">
          <td><label>Calendar Name:</label></td>          
          <td><input id="inputText" type="text"></input></td>
          
        </tr>
        <tr class="rowContainer">
          <td><label>Description:</label></td>          
          <td><input id="inputText" type="text"></input></td>
          
        </tr>
        <tr class="rowContainer">
          <td id = "nonworkingdaysLabel"><label>Non-working days:</label></td>          
          <td id = "nonWorkingdaysCheckboxes">
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
        <tr class="rowContainer">
          <td><label>Add Other non-working days:</label></td>          
          <td><input id="inputText" type="text"></input></td>
          
        </tr>        
      </table>


      <input id="updateButton" type="button" value="Update"></input>
      <input id="cancelButton" type="button" value="Cancel"></input>
    </div>

  );
  }
  
  export default CreateCalendar;