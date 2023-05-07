First code
function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    
    const bmi = weight / (height * height);
    
    const resultElement = document.getElementById("result");
    errorNotice(bmi, resultElement);
    doctorReport(height, weight);

}
//To alert user who refue to place an input
function errorNotice(bmi, resultElement) {
    if (isNaN(bmi)) {
      alert('Enter an input');
    }  
    else { 
      resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
    }
  }

 //To giver user BMI Update
  function doctorReport(bmi) {
    let myReport = 'Status: ';
    if (bmi <= 18.5) {
      myReport += 'Underweight';
    }
    else if (bmi > 18.5 && bmi <= 24.9) {
      myReport += 'Healthy Weight';
    }
    else if (bmi > 24.9 && bmi <= 29.9) {
      myReport += 'Overweight';
    }
    else {
      myReport += 'Too Obesed, go and see a doctor';
    }
    document.getElementById('doctor').innerHTML = myReport;
  }

  ============================================
  Second code
  function calculateBMI() {
    const height = +document.getElementById("height").value;
    const weight = +document.getElementById("weight").value;
    const bmi = weight / (height * height);
    const resultElement = document.getElementById("result");
    const doctorElement = document.getElementById('doctor');
    
    if (!height || !weight) {
       alert('Enter an input');
    } else {
       doctorReport(resultElement, doctorElement, bmi);
    }
}

function doctorReport(resultElement, doctorElement, bmi) {
    let myReport =  bmi <= 18.5 ? 'Underweight'
                 :  bmi <= 24.9 ? 'Healthy Weight'
                 :  bmi <= 30.0 ? 'Over Weight'
                 :  bmi <= 31.0 ? 'Obesity'
                 :  'Too Obesed, go and see a doctor';
    resultElement.textContent = bmi.toFixed(2);
    doctorElement.textContent = myReport;
}
























======================
innerHTML<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BMI Calculator</title>
  <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header id="main-header">
      <h1>JEDYSCO BODY MASS INDEX (BMI) CALCULATOR</h1>
    </header>

    <div class="container"><!--Container starts-->
      <div class="grid"><!--Grid startss-->

        <div class="box box1"><!--box1 starts-->
          <label for="height">Height (in meters):</label><br>
          <input type="number" step="0.01" id="height" class="bmi-input bmi-input1" placeholder="Enter your height in meters">
          <br><br>
          <label for="weight">Weight (in kilograms):</label><br>
          <input type="number" id="weight" class="bmi-input bmi-input2" placeholder="Enter your weight in kilograms">
          <br><br>
          <button onclick="calculateBMI()" class="bmi-button">Calculate BMI</button>
          <br><br>
          <div class="result-unit">Your BMI is <span id="result" class="bmi-result">0.00</span> kg/m<sup>2</sup></div>
          <div class="status">Status: <span id="doctor"></span></div>
        </div><!--box1 ends-->


        <div class="box box2"><!--box2 starts-->
          <p>Body Mass Index (BMI)</p>

          <blockquote cite="https://www.cdc.gov/healthyweight/assessing/bmi/index.html">
            Body Mass Index (BMI) is a person&#39;s weight in kilograms (or pounds) divided by the square
            of height in meters (or feet). A high BMI can indicate high body fatness. BMI screens for
            weight categories that may lead to health problems, but it does not diagnose the body
            fatness or health of an individual.
          </blockquote>
          <p>How is BMI interpreted for adults?
            For adults 20 years old and older, BMI is interpreted using standard weight status categories. 
            These categories are the same for men and women of all body types and ages.</p>
          <h2>The standard weight status categories associated with BMI ranges for adults are shown in the 
              following table.
          </h2>
          <table>
            <tr>
              <th>BMI</th>
              <th>Weight Status</th>
            </tr>
            <tr>
              <td>Below 18.5</td>
              <td>Underweight</td>
            </tr>
            <tr>
              <td>18.5 &#8211; 24.9</td>
              <td>Healthy Weight</td>
            </tr>
            <tr>
              <td>25.0 &#8211; 29.9</td>
              <td>Overweight</td>
            </tr>
            <tr>
              <td>30.0 and Above</td>
              <td>Obesity</td>
            </tr>
          </table>

          <h2>What are the health consequences of obesity for adults?</h2>
          <p>
            People who have obesity are at increased risk for many diseases and health conditions, 
            including the following:<br>
            
            1. All-causes of death (mortality)<br>
            2. High blood pressure (hypertension)<br>
            3. High LDL cholesterol, low HDL cholesterol, or high levels of triglycerides (dyslipidemia)<br>
            4. Type 2 diabetes<br>
            5. Coronary heart disease<br>
            6. Stroke<br>
            6. Gallbladder disease<br>
            7. Osteoarthritis (a breakdown of cartilage and bone within a joint)<br>
            8. Sleep apnea and breathing problems<br>
            9. Chronic inflammation and increased oxidative stress<br>
            10. Some cancers (endometrial, breast, colon, kidney, gallbladder, and liver)<br>
            11. Low quality of life<br>
            12. Mental illness such as clinical depression, anxiety, and other mental disorders<br>
            13. Body pain and difficulty with physical functioning.<br>
          </p>
          <h2>Is BMI interpreted the same way for children and teens as it is for adults?</h2>
          <p>
            BMI is interpreted differently for children and teens, even though it is calculated using the same
             formula as adult BMI. Children and teen’s BMI need to be age and sex-specific because 
            the amount of body fat changes with age and the amount of body fat differs between girls and boys.
          </p>
          <h2>How to calculate BMI</h2>
          <p>Formula: weight (kg) / [height (m)]<sup>2</sup>

            With the metric system, the formula for BMI is weight in kilograms divided by
            height in meters squared. Because height is commonly measured in centimeters,
             divide height in centimeters by 100 to obtain height in meters.<br><br>
            
            Example: Weight = 68 kg, Height = 165 cm (1.65 m)<br>
            Calculation: 68 ÷ (1.65)<sup>2</sup> = 24.98kg/m<sup>2</sup><br><br>
            
            Or with the old system:<br>
            Pounds and inches<br>
            Formula: weight (lb) / [height (in)]<sup>2</sup> x 703</p>
            <br><br>
            


        </div><!--box2 ends-->


      </div> <!--Grid ends-->
    </div><!--Container ends-->
        


    <script type="text/javascript" src="bmi-calculator.js"></script>
  </body>
</html>





  

====
class/* Define vars for the root element */
:root {
    --main-bg-color: #222;
    --main-txt-color: #ff602c;
    --container-width: 90%;
    --header-bg-color: #333;
    --header-txt-color: #fff;
  }
  
  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--main-bg-color);
    color: var(--main-txt-color);
 
  }
  
  .container {
    width: var(--container-width);
    margin: 20px auto;
  }
  
  header#main-header {
    background-color: var(--header-bg-color);
    color: var(--header-txt-color);
  }
  
  header#main-header h1 {
    padding: 0;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }
  
  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    /*Define a local var */
    --gap: 20;
    grid-gap: calc(var(--gap) * 1px);
    align-items: center;
    
  }
  
  /* Define box vars */
  .box {
    --box-bg-color: #ddd;
    --box-main-color: #06c;
    --box-padding: 5px 10px;
    --box-shadow-h-offset: 10px;
    --box-shadow-v-offset: 5px;
    --box-shadow-blur: 5px;
  }
  

  /* box styling */
  .box {
    background-color: var(--box-bg-color);
    padding: var(--box-padding);
    border: 1px solid var(--box-main-color);
    box-shadow: var(--box-shadow-h-offset) 
                var(--box-shadow-v-offset)
                var(--box-shadow-blur)
                var(--box-main-color);
  }

  .box1 {
    position:relative;
    height: 500px;
    
  }


  input.bmi-input[type=number] {
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid var(--main-txt-color);
    border-radius: 4px;
    color: var(--main-bg-color);
    background-color: #ddd;
    transition: width 0.4s ease-in-out;
  }

  
input.bmi-input[type=number]:focus {
    width: 100%;
  }
  
label {
        color: var(--main-bg-color);
        font-size: 20px;
        text-shadow:5px 5px 10px #06c;
        font-weight: bold;
  }

  .bmi-button {
    margin: 15px 0;
    width: 60%;
    font-size: 18px;
    background-color: var(--main-txt-color);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 12px 20px;
    text-decoration: none;
    cursor: pointer;
  }

  .bmi-button:hover {
    opacity: 0.6;
    color: var(--main-txt-color);
    background-color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);

  }

  div.result-unit {
    width:58%;
    margin-bottom: 40px;
    border: 5px outset var(--main-txt-color);
    background-color: lightblue;    
    text-align: center;
    color: var(--main-bg-color);
   
  }


  div.status {
    width:58%;
    margin-bottom: 40px;
    border: 5px outset var(--main-txt-color);
    background-color: lightblue;    
    text-align: center;
    color: var(--main-bg-color);
  }


  sup {
    vertical-align:super;
    font-size: smaller;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: var(--main-txt-color);
  color: black;

}

.doctor {
  margin-bottom: 40px;
  border: 5px outset var(--main-txt-color);
  background-color: lightblue;    
  text-align: center;
  color: var(--main-bg-color);
  width: 58%;
}






