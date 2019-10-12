function checkNext(optNum){
	// scene = scene + 1;
	iSpeed = 1;
	iIndex = 0; // start printing array at this position
	iArrLength = aText[0].length; // the length of the text array
	iTextPos = 0; // initialise text position
	sContents = ''; // initialise contents variable

	document.getElementById('option1').style.display = "none";
  	document.getElementById('option2').style.display = "none";



	if(scene == 0 ){
		if(optNum == 0){
			aText = new Array(
	"Thank God... This is the captain of the Research Vessel 662-A, You have to help me!",
	"About 12 hours ago...the vice-captain was found dead in his room...", 
	"He was up for promotion to captain of this vessel after we arrive on Earth.",
	"The crew think that I was behind the murder... You have to help me... They are trying to throw me overboard!");
			scene =1;

		} else {
		aText = new Array(
	"Thank God... This is the captain of the Research Vessel 662-A, You have to help me!",
	"About 12 hours ago...the vice-captain was found dead in his room...", 
	"He was up for promotion to captain of this vessel after we arrive on Earth.",
	"The crew think that I was behind the murder... You have to help me... They are trying to throw me overboard!");
		scene =1;
	

		}
	
	}

	 else if(scene == 1 ){
		if(optNum == 0){
			aText = new Array("...I mean... the expedition didn't exactly go as planned...",
				"a good number of our crew members died on the planet that we were doing an expedition on... ",
				"the board members were about to demote me after we arrive on earth and the Vice Captain was next in line.", 
				"But I SWEAR I didn't do anything... I was framed and I need to clear my name.", 
                "So are you going to help me or not?");
			scene =2;
			
			
			document.getElementById('option2').style.opacity = 0;
			//document.getElementById('option2').style.opacity = 1;
		

		         



		} else {
			aText = new Array("Well, first of all we need to look for evidence...",
"I'm in the small shafts that run through the whole facility hiding... I don't think that I can stay here long, the smell is...unbearable!",
"I can pretty much reach any facility here.",
"We can go search the cameras for any clues, or we can go check the body. What do you think?");
			scene =3;
			document.getElementById('option2').style.opacity = 1;
		}
	
	}

	else if (scene ==2) {
		if (optNum == 0) {
			aText = new Array("Well, first of all we need to look for evidence...",
"I'm in the small shafts that run through the whole facility hiding... I don't think that I can stay here long, the smell is...unbearable!",
"I can pretty much reach any facility here.",
"We can go search the cameras for any clues, or we can go check the body. What do you think?");
			scene =3;
			document.getElementById('option2').style.opacity = 1;
			//document.getElementById('option1').innerHTML = options1Array[3];
			//document.getElementById('option2').innerHTML = options2Array[3];

		} else {
			aText = new Array("Well, first of all we need to look for evidence...",
"I'm in the small shafts that run through the whole facility hiding... I don't think that I can stay here long, the smell is...unbearable!",
"I can pretty much reach any facility here.",
"We can go search the cameras for any clues, or we can go check the body. What do you think?");
			scene =3;
			document.getElementById('option2').style.opacity = 1;
			//document.getElementById('option1').innerHTML = options1Array[3];
			//document.getElementById('option2').innerHTML = options2Array[3];
	}

}

	

	else if (scene == 3) {
		if (optNum == 0) {
			aText = new Array("Okay...I will try to reach the security center from here... wish me luck.",
				"...",
				"...",
"*30 minutes later*",
"...",
"...",
"I just checked the database and I CAN'T FIND THE TAPE! Tapes don't just disappear. Someone from the crew is involved...",
"I need to go somewhere else to find the evidence...",
"You know, we can go to his body and check for anything that might give us a clue...or...wait...",
"maybe we can find a clue in the room that he was killed in... what do you think?");
			scene =4;
			document.getElementById('option2').style.opacity = 1;
			//document.getElementById('option1').innerHTML = options1Array[4];
			//document.getElementById('option2').innerHTML = options2Array[4];
		} else {
		aText = new Array("Okay...give me a minute... I need to slide back into the shafts...they smell REALLY bad.",
"Okay I found his body. There are... multiple 'knife' like wounds." ,
"It seems like he was stabbed by something...what was the weapon? The Vice-captain wasn't someone who would be killed easily, there is multiple signs of struggle...",
"Hold on..." ,
"Something doesn't seem right... The wounds have... is that... What is this?" ,
"There some colored liquid that most definitely isn't Vice's blood, why is it very slippery... I think I know what it is..." ,
"We are getting closer to what were are trying to find my friend. I need to go to the laboratory to get this tes...",
"...",
"Look! There was someone here before me...",
"I'll take a picture of it... This is really suspicious... I'm sure we can find the same print in the locker room. This should reveal one of the players in this...",
"Ground control... things are becoming more sinister... I need your advice, what should I do?");
		scene =5;
		document.getElementById('option2').style.opacity = 1;
         //document.getElementById('option1').innerHTML = options1Array[6];
         //document.getElementById('option2').innerHTML = options2Array[6];
	}
}

	else if (scene == 4) {
		if (optNum == 0){
			aText = new Array ("Okay...give me a minute... I need to slide back into the shafts...they smell REALLY bad.",
"Okay I found his body. There are... multiple 'knife' like wounds." ,
"It seems like he was stabbed by something...what was the weapon? The Vice-captain wasn't someone who would be killed easily, there is multiple signs of struggle...",
"Hold on..." ,
"Something doesn't seem right... The wounds have... is that... What is this?" ,
"There some colored liquid that most definitely isn't Vice's blood, why is it very slippery... I think I know what it is..." ,
"We are getting closer to what were are trying to find my friend. I need to go to the laboratory to get this tes...",
"...",
"There was someone here before me...",
"I'll take a picture of it... This is really suspicious... I'm sure we can find the same print in the locker room. This should reveal one of the players in this...",
"Ground control... things are becoming more sinister... I need your advice, what should I do?");
			scene =5;
			document.getElementById('option2').style.opacity = 1;

			//document.getElementById('option1').innerHTML = options1Array[5];
            //document.getElementById('option2').innerHTML = options2Array[5];

			}else {
				aText = new Array ("Okay... I'm heading to the shafts right now... give me a second...",
"...",
"...",
"*30 minutes later*",
"...",
"...",
"I'm here in the vice captain's room.",
"It feels very empty...very still...the whole room is in shambles, from the time of the murder no doubt...",
"Why is the floor so slippery... this is definitely something that shouldn't be here... and it amount of this liquid increases... you can start to see...why are there footprints on the floor?",
"This liquid reminds me of something that I saw on the expedition... But it can't be... this just might give us a huge lead on who is behind this.",
"I need to find whoever is doing this. We need to wrap up while everyone is asleep. I mustn't be caught!",
"Should I examine the residue closer? Or go to the locker?",
"HURRY!");
				scene =6;
				document.getElementById('option2').style.opacity = 1;
				//document.getElementById('option1').innerHTML = options1Array[5];
         		//document.getElementById('option2').innerHTML = options2Array[5];
			}
		}
		else if (scene ==5) {
			if (optNum == 0) {
				aText = new Array ("Understood. Keep the channel open...just in case...",
"...",
"Okay I'm in the lab. I've put the residue inside. It's currently analysing...",
"So...impossible... the residue turns out to be from our cargo.",
"The mission of this expedition was to retrieve a foreign specimen, an alien, for further research. Looks like we bit off more than we can chew...",
"But we sealed it in it's cage. Nothing can escape it...nothing...unless...",
"The lead scientist who was in charge of this whole operation is the only person who can release it, his fingerprints alone can let it loose...",
"He was also the one who stirred up the riot amongst the crew members, the one who pointed fingers first...",
"I need to confront him.");
				scene = 7
				document.getElementById('option2').style.opacity = 1;
				//document.getElementById('option1').innerHTML = options1Array[7];
         		//document.getElementById('option2').innerHTML = options2Array[7];

			}else {
				aText = new Array ("Understood.", 
"I will be on my way to the locker. I will report back to you once I'm there. Be wary of the communicator.", 
"Always keep the channel open. Just so you know what happens along the way.", 
"...",
"You are the only witness to this.",
"...",
"...",
"Alright, I'm in the lockers. Hmmm...Let's see...",
"It's not this one...not this...",
"...I think I found something similar to the footprints we found earlier...",
"It's the head scientist of this expedition.",
"The mission of this expedition was to retrieve a foreign specimen, an alien, for further research.", 
"The lead scientist who was in charge of this whole operation is the only person who can release it, his fingerprints alone can let it loose...",
"Hold on...Here's the missing video tape!",
"I'm going to watch this...",
"IT WAS HIM! He found a way to control the alien!",
"He was the first one to point fingers and now look at what I'm in!",
"But why?...",
"I'm going to broadcast through all the rooms on this vessel! We have to stop him!",
"I'm heading to the Command hub right now.");
				scene = 9;
				document.getElementById('option2').style.opacity = 1;
				//document.getElementById('option1').innerHTML = options1Array[7];
         		//document.getElementById('option2').innerHTML = options2Array[7];
			}
		}

		
		else if (scene == 6) {
		if (optNum == 0){
			aText = new Array ("Understood. Keep the channel open...just in case...",
"...",
"Okay I'm in the lab. I've put the residue inside. It's currently analysing...",
"So...impossible... the residue turns out to be from our cargo.",
"The mission of this expedition was to retrieve a foreign specimen, an alien, for further research. Looks like we bit off more than we can chew...",
"But we sealed it in it's cage. Nothing can escape it...nothing...unless...",
"The lead scientist who was in charge of this whole operation is the only person who can release it, his fingerprints alone can let it loose...",
"He was also the one who stirred up the riot amongst the crew members, the one who pointed fingers first...",
"I need to confront him.");
				scene = 7
				document.getElementById('option2').style.opacity = 1;
				//document.getElementById('option1').innerHTML = options1Array[7];
         		//document.getElementById('option2').innerHTML = options2Array[7];

			}else {
				aText = new Array ("Understood.", 
"I will be on my way to the locker. I will report back to you once I'm there. Be wary of the communicator.", 
"Always keep the channel open. Just so you know what happens along the way.", 
"...",
"You are the only witness to this.",
"...",
"...",
"Alright, I'm in the lockers. Hmmm...Let's see...",
"It's not this one...not this...",
"...I think I found something similar to the footprints we found earlier...",
"It's the head scientist of this expedition.",
"The mission of this expedition was to retrieve a foreign specimen, an alien, for further research.", 
"The lead scientist who was in charge of this whole operation is the only person who can release it, his fingerprints alone can let it loose...",
"Hold on...Here's the missing video tape!",
"I'm going to watch this...",
"IT WAS HIM! He found a way to control the alien!",
"He was the first one to point fingers and now look at what I'm in!",
"But why?...",
"I'm going to broadcast through all the rooms on this vessel! We have to stop him!",
"I'm heading to the Command hub right now.");
				scene =9;
				document.getElementById('option2').style.opacity = 1;
				//document.getElementById('option1').innerHTML = options1Array[7];
         		//document.getElementById('option2').innerHTML = options2Array[7];
			}
		}

else if (scene == 7) {
		if (optNum == 0){
			aText = new Array ("Understood.", 
"I will be on my way to the locker. I will report back to you once I'm there. Be wary of the communicator.", 
"Always keep the channel open. Just so you know what happens along the way.", 
"...",
"You are the only witness to this.",
"...",
"...",
"Alright, I'm in the lockers. Hmmm...Let's see...",
"It's not this one...not this...",
"...I think I found something similar to the footprints we found earlier...",
"It's the head scientist of this expedition.",
"The mission of this expedition was to retrieve a foreign specimen, an alien, for further research.", 
"The lead scientist who was in charge of this whole operation is the only person who can release it, his fingerprints alone can let it loose...",
"Hold on...Here's the missing video tape!",
"I'm going to watch this...",
"IT WAS HIM! He found a way to control the alien!",
"He was the first one to point fingers and now look at what I'm in!",
"But why?...",
"I'm going to broadcast through all the rooms on this vessel! We have to stop him!",
"I'm heading to the Command hub right now.");
			scene =9;
			document.getElementById('option2').style.opacity = 1;
			//document.getElementById('option1').innerHTML = options1Array[7];
         	//document.getElementById('option2').innerHTML = options2Array[7];


			}else {
				aText = new Array ("I know where to find him. He is most likely in his room right now!",
"I will get there through the shafts...",
"I'm on my way to his quarters... Wait... is that...", 
"THAT'S THE SPECIMEN",
"OH MY GOD!",
"AAAAhhhHHHHH!", 
"*static noise*",
"GAME OVER",
"*",
"*",
"*",
"*",
"*",
"*",
"*",
"*",
"Please refresh the page to restart!");


				document.getElementById('option1').style.opacity = 0;
				document.getElementById('option2').style.opacity= 0;

				
			}
		}


else if(scene == 9){
		if(optNum == 0){
			aText = new Array ("I'm in the Command hub right now...",
				"I need to get past the system to broadcast...",
	" ",
	"Scientist: DON'T. YOU. DARE.",
	" ",
	"Captain: *whispers* the alien is right next to him...",
	"...so that's why the shafts smelt bad",
	"...",
	"Why are you doing this?",
	" ",
	"Scientist: I lost my friends on this expedition.",
	"It's all because of YOU!",
	"Your EGO and INCOMPETENCE LEAD TO THE DEATH OF MY WIFE AND COUNTLESS OTHERS!",
	" ",
	"Captain: Calm down, we all know this is what we signed up for...",
	"We knew the dangers of coming along on this exped...",
	" ",
	"Scientist: DON'T GIVE THAT Bull****!",
	"You ruined my life, so now I will ruin yours...",
	"...with a command, this alien can kill you in an instant.",
	"And I will frame it so your WHOLE legacy is destroyed",
	" ",
	"Captain: Don't do this now...",
	" ",
	"Alien: grrrrrr...",
	" ",
	"Captain: It isn't tame... we can't control it!",
	" ",
	"Scientist: You can't... but I...AAAAAAGHHHHHHH!",
	" ",
	"Alien: *SCREECH*",
	" ",
	"Scientist: AAAGHHHH, HELP ME!",
	" ",
	"Captain: WHAT DO I DO?");
			scene=10;
			document.getElementById('option2').style.opacity = 1;

				//document.getElementById('option1').innerHTML = options1Array[8];
         		//document.getElementById('option2').innerHTML = options2Array[8];

		} else {
		aText = new Array("I can't confront him", 
			"He's too dangerous to confront...", 
			"We still haven't researched the alien enough to fight it.",
			"I'm heading to the Command hub, just support me!",
			"...",
			"...",
			"...",
			"I'm in the Command hub right now...",
			"I need to get past the system to broadcase...",
			" ",
			"Scientist: DON'T. YOU. DARE!",
			" ",
			"Captain: *whispers* the alien is right next to him...",
			"So that's why the shafts smelt bad",
			"...",
			"Why are you doing this?",
			" ",
			"Scientist: I lost my friends on this expedition.",
			"It's all because of YOU!",
			"Your EGO and INCOMPETENCE LEAD TO THE DEATH OF MY WIFE AND COUNTLESS OTHERS!",
			" ",
			"Captain: Calm down, we all know this is what we signed up for...we knew the dangers of coming along on this exped...",
			" ",
			"Scientist: DON'T GIVE THAT Bull****!",
			"You ruined my life, so now I will ruin yours...",
			"...with a command, this alien can kill you in an instant.",
			"And I will frame it so your WHOLE legacy is destroyed",
			" ",
			"Captain: Don't do this now...",
			" ",
			"Alien: grrrrrr...",
			" ",
			"Captain: It isn't tame... we can't control it!",
			" ",
			"Scientist: You can't... but I...AAAAAAGHHHHHHH!",
			" ",
			"Alien: *SCREECH*",
			" ",
			"Scientist: HELP ME!",
			" ",
			"Captain: WHAT DO I DO?");
		scene=10;
		document.getElementById('option2').style.opacity = 1;

         //document.getElementById('option1').innerHTML = options1Array[10];
         //document.getElementById('option2').innerHTML = options2Array[10];
		}
	
	}

else if(scene == 10 ){
		if(optNum == 0){
			aText = new Array("Scientist: SAVE ME! HEEELP!",
"Captain: Damm it!",
"THERE! I see the fire axe!",
"*Grabs the fire axe*",
"AAAAAAHHHHH",
"*BAM*",
"*THUNK*",
"Captain: Get Up!",
"Scientist:...",
"Captain: I'm only saving you so that you can answer for your crimes!",
"I'm going to broadcast this video to the crew, and they will know who the real killer is!",
"Scientist: I only killed one man to save any future crew members from YOU!");
			scene=13;
			document.getElementById('option2').style.opacity = 1;
         //document.getElementById('option1').innerHTML = options1Array[9];
         //document.getElementById('option2').innerHTML = options2Array[9];

		} else {
		aText = new Array("Scientist: HELP ME! WHAT ARE Yo...AAAAGHHHHH",
"Captain: Now's my chance!",
"NOOO...come on WORK!!!! GODDAMMIT", 
"WHY IS IT NOT WORKING!!!",
"Huh?...",
"NO..NO....NOOOOO AAAAAGHHHHHH",
"*",
"*",
"*",
"*",
"*",
"*",
"*",
"*",
"Please refresh the page to restart!");

		document.getElementById('option1').style.opacity = 0;
		document.getElementById('option2').style.opacity= 0;
		
		}
	}

else if(scene == 11){
	if (optNum == 0) {
		aText = new Array("Scientist: SAVE ME! HEEELP!",
"Captain: Damm it!",
"THERE! I see the fire axe!",
"*Grabs the fire axe*",
"AAAAAAHHHHH",
"*BAM*",
"*THUNK*",
"Captain: Get Up!",
"Scientist:...",
"Captain: I'm only saving you so that you can answer for your crimes!",
"I'm going to broadcast this video to the crew, and they will know who the real killer is!",
"Scientist: I only killed one man to save any future crew members from YOU!");
		scene=13;
		document.getElementById('option2').style.opacity = 1;
		//document.getElementById('option1').innerHTML = options1Array[9];
        //document.getElementById('option2').innerHTML = options2Array[9];

	}else {
		aText = new Array("Scientist: HELP ME! WHAT ARE Yo...AAAAGHHHHH",
" ",
"Captain: Now's my chance!",
"NOOO...come on WORK!!!! GODDAMMIT", 
"WHY IS IT NOT WORKING!!!",
"Huh?...",
" ",
"Alien: grrrrrrrrrRRRRRAAAAA",
" ",
"Captain: NO..NO....NOOOOO AAAAAGHHHHHH",
"*",
"*",
"*",
"*",
"*",
"*",
"*",
"*",
"Please refresh the page to restart!");
		//document.getElementById('option1').innerHTML = options1Array[];
	document.getElementById('option1').style.opacity = 0;
	document.getElementById('option2').style.opacity = 0;

	}
}

	else if(scene == 13 ){
		if (optNum == 0) {
			aText = new Array("Captain: You talk too much...",
"*CRACK*",
"Stay down!...while I figure out this thing...",
"Let me figure this thing out...", 
"Ah there we go...It's broadcasting!",
"Thank you officer, for being here to support me. With this tape broadcasted...I can finally clear my name. Thank you...",
"*",
"*",
"*",
"*",
"*",
"*",
"*",
"*",
"Please refresh the page to restart!");
			document.getElementById('option1').style.opacity = 0;
	document.getElementById('option2').style.opacity = 0;
			

		} else {
			aText = new Array("Captain: Get your arm over my shoulder...",
				"Get on this seat...you are in for a long time in pri...",
				" ",
"Scientist: You shouldn't have saved me...captain...",
"Revenge is a dish best served cold...",
"*",
"*",
"*",
"*",
"*",
"*",
"*",
"*",
"Please refresh the page to restart!");	
			document.getElementById('option1').style.opacity = 0;
	document.getElementById('option2').style.opacity = 0;



	}
}

	




if(scene == 100){
	aText = new Array (
                                                          
" _____  _____  _____  _____    _____  _____  _____  _____ ",
"|   __||  _  ||     ||   __|  |     ||  |  ||   __|| __  |",
"|  |  ||     || | | ||   __|  |  |  ||  |  ||   __||    -|",
"|_____||__|__||_|_|_||_____|  |_____| \___/ |_____||__|__|",
                                                          
);
	document.getElementById('option1').style.display = "none";
  	document.getElementById('option2').style.display = "none";


}
	// console.log("option: " + optNum);


	typewriter();
}
