function insert(operator)
	{
	if(operator == '+')
	{
		var X = document.form.textviewX.value
		var Y = document.form1.textviewY.value;
		
		// als we twee values hebben ingevuld, die allebei een integer zijn
		if(X && Y)
		{
		// Check of we valid input krijgen, X en Y moeten integer of float zijn.
		if(X == parseInt(X) || X == parseFloat(X) && Y == parseInt(Y) || Y == parseFloat(Y))
		{
		
		// zet values om naar float of int zodat we kunnen calculaten (van string naar int/float)
		if(X == parseInt(X))
		{
		 X = parseInt(X);
		}
		else
		{
		X = parseFloat(X);
		var HaveAnyFloat = true;
		}
		
		if(Y == parseInt(Y))
		{
		Y = parseInt(Y);
		}
		else{
		Y = parseFloat(Y);
		var HaveAnyFloat = true;
		}
		
		if(HaveAnyFloat)
		{
		var answer = X + Y;
		document.form.textviewX.value = eval(answer).toFixed(2);
		document.form1.textviewY.value = "";
		}
		else{
		// reken de som uit
		var answer = X + Y;
		document.form.textviewX.value = eval(answer);
		document.form1.textviewY.value = "";
		}
		}
		}
	}
	
	if(operator == '-')
	{
		var X = document.form.textviewX.value
		var Y = document.form1.textviewY.value;
		
		// als we twee values hebben ingevuld, die allebei een integer zijn
		if(X && Y)
		{
		// Check of we valid input krijgen, X en Y moeten integer of float zijn.
		if(X == parseInt(X) || X == parseFloat(X) && Y == parseInt(Y) || Y == parseFloat(Y))
		{
		
		// zet values om naar float of int zodat we kunnen calculaten (van string naar int/float)
		if(X == parseInt(X))
		{
		 X = parseInt(X);
		}
		else
		{
		X = parseFloat(X);
		var HaveAnyFloat = true;
		}
		
		if(Y == parseInt(Y))
		{
		Y = parseInt(Y);
		}
		else{
		Y = parseFloat(Y);
		var HaveAnyFloat = true;
		}
		
		// als we floats hebben in de som, laten we extra decimalen zien.
		if(HaveAnyFloat)
		{
		var answer = X - Y;
		document.form.textviewX.value = eval(answer).toFixed(2);
		document.form1.textviewY.value = "";
		}
		else
		{
		var answer = X - Y;
		document.form.textviewX.value = eval(answer);
		document.form1.textviewY.value = "";
		}

		}
		}
	}
	
	if(operator == 'x')
	{
		var X = document.form.textviewX.value
		var Y = document.form1.textviewY.value;
		
		// als we twee values hebben ingevuld, die allebei een integer zijn
		if(X && Y)
		{
		// Check of we valid input krijgen, X en Y moeten integer of float zijn.
		if(X == parseInt(X) || X == parseFloat(X) && Y == parseInt(Y) || Y == parseFloat(Y))
		{
		
		// zet values om naar float of int zodat we kunnen calculaten (van string naar int/float)
		if(X == parseInt(X))
		{
		 X = parseInt(X);
		}
		else
		{
		X = parseFloat(X);
		var HaveAnyFloat = true;
		}
		
		if(Y == parseInt(Y))
		{
		Y = parseInt(Y);
		}
		else{
		Y = parseFloat(Y);
		var HaveAnyFloat = true;
		}
		
		// als we floats hebben in de som, laten we extra decimalen zien.
		if(HaveAnyFloat)
		{
		var answer = X * Y;
		document.form.textviewX.value = eval(answer).toFixed(2);
		document.form1.textviewY.value = "";
		}
		else
		{
		var answer = X * Y;
		document.form.textviewX.value = eval(answer);
		document.form1.textviewY.value = "";
		}

		}
		}
	}
	
	if(operator == '/')
	{
		var X = document.form.textviewX.value
		var Y = document.form1.textviewY.value;
		
		// als we twee values hebben ingevuld, die allebei een integer zijn
		if(X && Y)
		{
		if(X == 0 || Y == 0)
		{
		document.form.textviewX.value = "Please enter";
		document.form1.textviewY.value = "Valid number"
		return;
		}
		else {
		// Check of we valid input krijgen, X en Y moeten integer of float zijn.
		if(X == parseInt(X) || X == parseFloat(X) && Y == parseInt(Y) || Y == parseFloat(Y))
		{
		
		// zet values om naar float of int zodat we kunnen calculaten (van string naar int/float)
		if(X == parseInt(X))
		{
		 X = parseInt(X);
		}
		else
		{
		X = parseFloat(X);
		var HaveAnyFloat = true;
		}
		
		if(Y == parseInt(Y))
		{
		Y = parseInt(Y);
		}
		else{
		Y = parseFloat(Y);
		var HaveAnyFloat = true;
		}
		
		// als we floats hebben in de som, laten we extra decimalen zien.
		if(HaveAnyFloat)
		{
		var answer = X / Y;
		document.form.textviewX.value = eval(answer).toFixed(2);
		document.form1.textviewY.value = "";
		}
		else
		{
		var answer = X / Y;
		document.form.textviewX.value = eval(answer);
		document.form1.textviewY.value = "";
		}

		}
		}
		}
	}
	
	if(operator == 'kwadraat')
	{
		var X = document.form.textviewX.value
		
		// als we twee values hebben ingevuld, die allebei een integer zijn
		if(X)
		{
		// Check of we valid input krijgen, X en Y moeten integer of float zijn.
		if(X == parseInt(X) || X == parseFloat(X))
		{
		
		// zet values om naar float of int zodat we kunnen calculaten (van string naar int/float)
		if(X == parseInt(X))
		{
		 X = parseInt(X);
		}
		else
		{
		X = parseFloat(X);
		var HaveAnyFloat = true;
		}
		
		// als we floats hebben in de som, laten we extra decimalen zien.
		if(HaveAnyFloat)
		{
		var answer = X * X;
		document.form.textviewX.value = eval(answer).toFixed(2);
		document.form1.textviewY.value = "";
		}
		else
		{
		var answer = X * X;
		document.form.textviewX.value = eval(answer);
		document.form1.textviewY.value = "";
		}

		}
		}
	}
	
	if(operator == 'wortel')
	{
		var X = document.form.textviewX.value
		
		// als we twee values hebben ingevuld, die allebei een integer zijn
		if(X)
		{
		if(X < 0)
		{
		document.form.textviewX.value = "Please enter";
		document.form1.textviewY.value = "Valid number"
		return;
		}
		// Check of we valid input krijgen, X en Y moeten integer of float zijn.
		if(X == parseInt(X) || X == parseFloat(X))
		{
		
		// zet values om naar float of int zodat we kunnen calculaten (van string naar int/float)
		if(X == parseInt(X))
		{
		 X = parseInt(X);
		}
		else
		{
		X = parseFloat(X);
		var HaveAnyFloat = true;
		}
		
		// als we floats hebben in de som, laten we extra decimalen zien.
		if(HaveAnyFloat)
		{
		var answer = Math.sqrt(X);
		document.form.textviewX.value = answer.toFixed(2);
		document.form1.textviewY.value = "";
		}
		else
		{
		var answer = Math.sqrt(X);
		document.form.textviewX.value = eval(answer);
		document.form1.textviewY.value = "";
		}

		}
		}
	}
	
	if(operator == 'xy')
	{
		var X = document.form.textviewX.value
		var Y = document.form1.textviewY.value
		
		// als we twee values hebben ingevuld, die allebei een integer zijn
		if(X && Y)
		{
		// Check of we valid input krijgen, X en Y moeten integer of float zijn.
		if(X == parseInt(X) || X == parseFloat(X) && Y == parseInt(Y) || Y == parseFloat(Y))
		{
		
		// zet values om naar float of int zodat we kunnen calculaten (van string naar int/float)
		if(X == parseInt(X))
		{
		 X = parseInt(X);
		}
		else
		{
		X = parseFloat(X);
		var HaveAnyFloat = true;
		}
		
		if(Y == parseInt(Y))
		{
		 Y = parseInt(Y);
		}
		else
		{
		Y = parseFloat(Y);
		var HaveAnyFloat = true;
		}
		
		// als we floats hebben in de som, laten we extra decimalen zien.
		if(HaveAnyFloat)
		{
		var answer = Math.pow(X, Y);
		document.form.textviewX.value = eval(answer).toFixed(2);
		document.form1.textviewY.value = "";
		}
		else
		{
		var answer = Math.pow(X, Y);
		document.form.textviewX.value = eval(answer);
		document.form1.textviewY.value = "";
		}

		}
		}
	}
	
	if(operator == 'tafelvan')
	{
		var X = document.form.textviewX.value
		
		// als we twee values hebben ingevuld, die allebei een integer zijn
		if(X)
		{
		if(X == 0)
		{
		document.form.textviewX.value = "Please enter";
		document.form1.textviewY.value = "Valid number"
		return;
		}
		// Check of we valid input krijgen, X en Y moeten integer of float zijn.
		if(X == parseInt(X) || X == parseFloat(X))
		{
		
		// zet values om naar float of int zodat we kunnen calculaten (van string naar int/float)
		if(X == parseInt(X))
		{
		 X = parseInt(X);
		}
		else
		{
		X = parseFloat(X);
		var HaveAnyFloat = true;
		}
		
		// als we floats hebben in de som, laten we extra decimalen zien.
		if(HaveAnyFloat)
		{
		document.form.textviewX.value = "";
		document.form1.textviewY.value = "";
		document.getElementById("tafelX").innerHTML = "TAFEL VAN " + X;
		document.getElementById("1").innerHTML = X;
		document.getElementById("2").innerHTML = (X*2).toFixed(2);
		document.getElementById("3").innerHTML = (X*3).toFixed(2);
		document.getElementById("4").innerHTML = (X*4).toFixed(2);
		document.getElementById("5").innerHTML = (X*5).toFixed(2);
		document.getElementById("6").innerHTML = (X*6).toFixed(2);
		document.getElementById("7").innerHTML = (X*7).toFixed(2);
		document.getElementById("8").innerHTML = (X*8).toFixed(2);
		document.getElementById("9").innerHTML = (X*9).toFixed(2);
		document.getElementById("10").innerHTML =(X*10).toFixed(2);
		document.getElementById("tafelborder").style.display = "inline";
		}
		else
		{
		document.form.textviewX.value = "";
		document.form1.textviewY.value = "";
		document.getElementById("tafelX").innerHTML = "TAFEL VAN " + X;
		document.getElementById("1").innerHTML = X;
		document.getElementById("2").innerHTML = X*2;
		document.getElementById("3").innerHTML = X*3;
		document.getElementById("4").innerHTML = X*4;
		document.getElementById("5").innerHTML = X*5;
		document.getElementById("6").innerHTML = X*6;
		document.getElementById("7").innerHTML = X*7;
		document.getElementById("8").innerHTML = X*8;
		document.getElementById("9").innerHTML = X*9;
		document.getElementById("10").innerHTML = X*10;
		document.getElementById("tafelborder").style.display = "inline";
		}

		}
		}
	}
	
	}
	
	function equal()
	{
		var exp = document.form.textview.value;
		if(exp)
		{
		 document.form.textview.value = eval(exp);
		 calculated = true;
		}
	}
	
	function clean()
	{

		document.form.textviewX.value = "";
		document.form1.textviewY.value = "";
		document.getElementById("tafelborder").style.display = "none";
	}
	