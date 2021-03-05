


function Home() {
    return (
      <div class = "tabContainer">
        <div class = "pageTitle"> Calculate the commit date</div>
        <div class = "infoText">Calculate the expected commit date based on the lead time in days</div>
        <table class="tableStyle">
          <tr class = "rowContainer">
            <td><label>Select a calendar to use:</label></td>            
            <td>
              <select name = "calendar" id = "calendar">
                <option value = "">Select Calendar</option>
                <option value = "South Australia Calendar">South Australia Calendar</option>
                <option value = "Victoria Calendar">Victoria Calendar</option>
                <option value = "New South Wales Calendar">New South Wales Calendar</option>
              </select>
            </td>
          </tr>
          <tr class = "rowContainer">
            <td>
              <label>Enter the lead time in days: </label>
            </td>
            <td>
              <input id = "inputText" type="text"></input>
            </td>
          </tr>
          <tr class = "rowContainer">
            <td>
              <label>Exclude Weekend in Calculation </label>
            </td>
            <td>
            <input type="checkbox"></input>            
            </td>
          </tr>
          <tr class = "rowContainer">
            <td>
              <label>Exclude Holiday in Calculation </label>
            </td>
            <td>
            <input type="checkbox"></input>                
            </td>
          </tr>
        </table>
        <input id = "calculateButton" type="button" value= "Calculate commit date"></input>
      </div>
      
    );
  }
  
  export default Home;