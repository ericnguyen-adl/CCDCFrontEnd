function DeleteCalendar() {
  return (
    <div class="tabContainer">
      <div class="pageTitle"> Delete your calendar</div>
      <div class="infoText">Select and delete your calendar</div>
      <table class="tableStyle">
        <tr class="rowContainer">
          <td><label>Select a calendar to delete:</label></td>
          <td>
            <select name="calendar" id="calendar">
              <option value="">Select Calendar</option>
              <option value="South Australia Calendar">South Australia Calendar</option>
              <option value="Victoria Calendar">Victoria Calendar</option>
              <option value="New South Wales Calendar">New South Wales Calendar</option>
            </select>
          </td>
        </tr>
      </table>


{/* I've commented out the CSS style for div id deletePageButtons. It has a  -30px margin.  */}
      <div id = "deletePageButtons"> 
      <input id="deleteButton" type="button" value="Delete"></input>
      {/* Why is the cancel button here, simply navigate away from the page.  */}
      {/* <input id="cancelDeleteButton" type="button" value="Cancel"></input> */}
      </div>
      
    </div>

  );
  }
  
  export default DeleteCalendar;



