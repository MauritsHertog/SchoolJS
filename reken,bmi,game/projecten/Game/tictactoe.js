function StartGame()
	{
	// Clear alle boxen door ze te loopen door de clearbox function
	for(var i = 1; i <= 9; i++)
	{
		// clear box 1 t/m 9
		ClearBox(i);
	}
	// 50% kans om X of 0 te zijn door math.random te gebruiken
		document.turn = "X";
		if(Math.random() < 0.5)
		{
			document.turn = "0";
		}
		// Er is geen winnaar op dit punt
		document.winner = null;
		SetMessage(document.turn + " gets to start.");
	}
	
	// Zet een berichtje op de pagina
	function SetMessage(msg)
	{
		// Pak het message element van html en zet de text
		document.getElementById("message").innerText = msg;
	}
	
	// Zet de volgende zet
	function NextMove(square)
	{
		// Check of er misschien al een winnaar is
		if(document.winner != null)
		{
			SetMessage(document.winner + " already won the game");
		} 
		// als er geen winnaar is en het vakje is leeg dan kunnen we een zet doen
		else if(square.innerText == "")
		{
		square.innerText = document.turn;
		// Geef de andere speler de zet
		SwitchTurn();
		}
		// als er geen winnaar is, maar het vakje is niet leeg kunnen we het niet gebruiken
		else {
		SetMessage("That square is already used");
		}
	}
	
	// Wissel wie er aan de beurt is
	function SwitchTurn()
	{
		// als er een winnaar is
	if(CheckForWinner(document.turn))
	{
		SetMessage("Congratulations, " + document.turn + "! You win!");
		document.winner = document.turn;
	}
	// als er geen winnaar is en de laatste zet was X dan is de volgende zet 0
	else if(document.turn == "X")
		{
		document.turn = "0";
		SetMessage(document.turn + "'s turn.");
		}
		// als de laatste zet niet X was, was het 0 en wordt het weer X.
		else
		{
		document.turn = "X";
		SetMessage(document.turn + "'s turn.");
		}
	}
	
	// Check voor de winaar
	function CheckForWinner(move)
	{
		var result = false;
		// Check alle rijen, en als een rij true returned, heb je gewonnen.
		if (CheckRow(1,2,3, move) || 
			CheckRow(4,5,6, move) ||
			CheckRow(7,8,9, move) || 
			CheckRow(1,4,7, move) ||
			CheckRow(2,5,8, move) ||
			CheckRow(3,6,9, move) ||
			CheckRow(1,5,9, move) ||
			CheckRow(3,5,7, move))
			{
			result = true;
			}
			return result;
	}
	
	// Check de vakjes van een rij
	function CheckRow(a,b,c, move)
	{
		var result = false;
		// check voor 3 op een rij
		if(GetBox(a) == move && GetBox(b) == move && GetBox(c) == move)
		{
		result = true;
		}
		return result;
	}
	
	// Pak de box die bij een nummer hoort
	function GetBox(number)
	{
		return document.getElementById(number).innerText;
	}
	
	// Wis de box
	function ClearBox(number)
	{
	document.getElementById(number).innerText = "";
	}
	