function calculate()
	{
	var gewicht_txt = document.getElementById('gewicht');
	var lengte_txt = document.getElementById('lengte');
	
	var g = parseInt(gewicht_txt.value);
	var l = parseInt(lengte_txt.value);
	
	// Hoogte naar meters voor berekening
		l = l / 100;
	
	var errMsg = "";
	if( g <= 0)
	{
	errMsg = errMsg + "* Weight cannot be negative \n";
	}
	if( l <= 0)
	{
	errMsg = errMsg + "* Height cannot be negative \n";
	}
	
	if(errMsg != "")
	{
		alert(errMsg);
	}
	else
	{
		var BMI = ((g)/(l*l));
		
		if(BMI <= 16)
		{
		alert("Your BMI is " + BMI.toFixed(1) + ". You are severely underweight, please seek help.");
		}
		else if(BMI > 16 && BMI < 17)
		{
		alert("Your BMI is " + BMI.toFixed(1) + ". You are moderately underweight, please seek help.");
		}
		else if(BMI > 17 && BMI < 18.5)
		{
		alert("Your BMI is " + BMI.toFixed(1) + ". You are mildly underweight");
		}
		else if(BMI > 18.5 && BMI < 25)
		{
		alert("Your BMI is " + BMI.toFixed(1) + ". You have a normal BMI.");
		}
		else if(BMI > 25 && BMI < 30)
		{
		alert("Your BMI is " + BMI.toFixed(1) + ". You are midly overweight");
		}
		else if(BMI > 30 && BMI < 35)
		{
		alert("Your BMI is " + BMI.toFixed(1) + ". You are moderately overweight, please seek help.");
		}
		else if(BMI > 35 && BMI < 40)
		{
		alert("Your BMI is " + BMI.toFixed(1) + ". You are severely overweight, please seek help.");
		}
		else if(BMI > 40)
		{
		alert("Your BMI is " + BMI.toFixed(1) + ". You are extremely overweight, please seek help.");
		}
	}
	
	}