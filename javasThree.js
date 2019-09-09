var inputPeople = [[]];
var amountOfTotalGroups = 5;
var amountOfPeople = 20;
var peopleInPreferenceList = (amountOfPeople/amountOfTotalGroups)-1;
var amountOfNumbers = peopleInPreferenceList*amountOfPeople;
var randomNumber = 0;
function randomInput() {
for (x=0; x< amountOfNumbers; x++) {
    randomNumber = Math.floor((Math.random()*amountOfPeople));
    while (randomNumber == (inputPeople.length-1)) {
        randomNumber = Math.floor((Math.random()*amountOfPeople));
    }
    inputPeople[inputPeople.length-1].push(randomNumber);
    if ((inputPeople[inputPeople.length-1].length) == peopleInPreferenceList) {
        inputPeople.push([]);
    }
}
inputPeople.pop();
}
randomInput();


console.log("vv Definition of stuffff vv");
var goodMatches = 0;
var badMatches = 0;
//var inputPeople = [[15, 13, 19], [10, 6, 6], [13, 12, 14], [19, 11, 11], [11, 13, 14], [15, 8, 13], [13, 7, 1], [14, 14, 14], [10, 17, 6], [10, 1, 16], [7, 15, 18], [9, 15, 16], [15, 4, 0], [14, 14, 5], [3, 11, 19], [3, 13, 12], [6, 9, 4], [18, 4, 19], [10, 14, 13], [8, 1, 8]]; //This the input of all the people and there preferences (the array at index 0, is person 0's preference list, the array at index 1, is person 1's preference list ...)
//Other test inputs vvv
//                [[2,1],[0,2],[1,0],[4,5],[5,3],[3,4]]
//                [[5,1],[0,5],[4,3],[2,4],[3,2],[2,1]]
//                [[9, 13, 17],[2, 11, 14],[14, 1, 11],[5, 7, 12],[8, 10, 19],[12, 3, 7], [18, 16, 15], [5, 3, 12], [19, 10, 4], [17, 13, 0], [4, 19, 8], [14, 1, 2], [5, 7 ,3], [0, 9, 17], [11, 1, 2], [6, 16, 18], [18, 15, 7], [0, 9, 13], [6, 15, 16], [10, 8, 4]]
//                [[5,1],[5,2],[5,3],[5,4],[3,1],[1,0]]
//Other test inputs ^^^
console.log(inputPeople);
var inputPeopleNames = []; // This is the list of all the people's names, no preferences
console.log(inputPeopleNames);
var finalGroups = []; //This is the ultimate output, of all the final groups. Each array is one group.
console.log(finalGroups);
var groupNumber = 0; //This is used later to define which group is the loop working on.
console.log(groupNumber);
var localGroup = []; // This is a "local" group which collects a whole group, then puts it into the final group
console.log(localGroup);
var peopleAlreadyMatched = []; //This is a list of everybody who is already matched
console.log(peopleAlreadyMatched);
var numberOfTotalGroups = 5; //This is the amount of total groups in the end
console.log(numberOfTotalGroups);
var inputPeopleLength = inputPeople.length; //This is the total amount of people
console.log(inputPeopleLength);
var amountOfPeopleInPreferenceList = inputPeople[0].length; //This is the amount of people in everyones preference list
console.log(amountOfPeopleInPreferenceList);
var peoplePerGroup = inputPeopleLength/numberOfTotalGroups; //This is how many people there will be per group.
console.log(peoplePerGroup);
var personAddedToLocalBoolean = false; //This is a boolean that avoids going to the worstCaseScenario in the second duo-loop.
console.log(personAddedToLocalBoolean);
var peopleInLocalGroup = 0; //This is the amount of people in local group
console.log(peopleInLocalGroup);
var personsPreference = 0; // This is a variable used in one the loops in order to remember someones preference
console.log(personsPreference);
var px = 0; //Variable in one of the loops for one of the people we are checking if they match.
console.log(px);
var processComplete = false; //This says if the process is complete
console.log(processComplete);
console.log("^^ Definition of stuff ^^");
console.log(" ");


function print(somethingToPrint) {
    console.log(somethingToPrint);
}
function samePreferenceOrHigher(person, preference) { //This function checks if the -person-'s -preference- matches with them. So lets say that person = Bob, and preference = 3, does Bobs number 3 preference have Bob in his top three preference? 
personsPreferenceNumber = inputPeople[person].indexOf(preference);
    for (i=0; i <= personsPreferenceNumber; i++) {
        if(inputPeople[preference][i] == person) {
            return true;
        }
    }
    return false;
}
function inEachOthersPreferenceListOrNot(person, preference) { //This function checks if a persons preference has them in their preference list wherever.
    if (inputPeople[preference].includes(person) == true) {
        return true;
    }
    return false;
}
function inFinalGroupOrNot(person) { //This function checks if a person in one of the final groups
    for (i =0; i < finalGroups.length; i++) {
        if (finalGroups[i].includes(person) == true) {
            return true;
        }
    }
    return false;
}
function inLocalGroupOrNot(person) { //This function checks if a person in the local group
    if (localGroup.includes(person) == true) {
        return true;
    }
    return false;
}
function addToLocalGroup(person) { //This function adds -person- to the end of the local group
    localGroup.push(person);
    peopleInLocalGroup = localGroup.length;
    return;
}
function isLocalGroupFilled() { //This function checks if the local group is full or not
    if (localGroup.length == peoplePerGroup) {
        return true;
    }
    return false;
}
function firstDuoLoop() { //This loops finds the first person to go in the local group, adds them to the local group, and then enters the second duoloop.
    for (x=0; x<= amountOfPeopleInPreferenceList; x++) { //This is the very first loop which loops through the preference numbers (for loop)
        for (p=0; p< inputPeopleLength; p++) { //This is the second loop in the first duo-loop, which loops through all the people (for loop)
            // p = to the person we are checking
            // px = to the person's preference
            px = inputPeople[p][x];
            if(samePreferenceOrHigher(p, px) == true && inFinalGroupOrNot(p) == false && inFinalGroupOrNot(px) == false) {
                addToLocalGroup(p);
                addToLocalGroup(px);
                console.log("FirstDuoLoop person               (p) : "+p)
                console.log("FirstDuoLoop person's preference (px) : "+px)
                console.log("localGroup               (localGroup) : "+localGroup)
                goodMatches += 1;
                secondDuoLoop();
            }
        }
    }
    localGroup = [];
    if (finalGroups.length+1 == numberOfTotalGroups) {
        print("Saved by my intelect")
        for (p=0; p< inputPeopleLength; p++) {
            if(isLocalGroupFilled() == false && inFinalGroupOrNot(p) == false) {
                addToLocalGroup(p)
            }
        }
        localGroupCompleted()
        outputFinalGroups()
    }
    noOutput();
}
function secondDuoLoop() { //This is the second duoloop hich continuesly adds people to the local group until its filled
while (isLocalGroupFilled() != true) {
    personAddedToLocalBoolean = false;
    for(pref=0; pref < amountOfPeopleInPreferenceList; pref++) {
        if (samePreferenceOrHigher((localGroup.length-1), pref) == true && inLocalGroupOrNot(inputPeople[localGroup.length-1][pref]) == false  && inFinalGroupOrNot(inputPeople[localGroup.length-1][pref]) == false) {
            addToLocalGroup(inputPeople[localGroup[localGroup.length-1]][pref]);
            console.log("SecondDuoLoop last person in localGroup's preference                              (pref) : "+pref);
            console.log("SecondDuoLoop person who was added  (inputPeople[localGroup[localGroup.length-1]][pref]) : "+inputPeople[localGroup[localGroup.length-1]][pref]);
            console.log("localGroup                                                                  (localGroup) : "+localGroup);
            personAddedToLocalBoolean = true;
            goodMatches += 2;
            break;
        }
    }
    if (personAddedToLocalBoolean == false) {
        almostWorstCaseScenario();
    }
    if (personAddedToLocalBoolean == false) {
        console.log("worstCaseScenario")
        worstCaseScenario();
    }
}
    localGroupCompleted();
}
function localGroupCompleted() { // This function adds the local group to final groups, resets everything, checks if the whole process is complete or not, and then starts everything again.
    finalGroups.push(localGroup);
    localGroup = [];
    personAddedToLocalBoolean = false;
    peopleInLocalGroup = localGroup.length;
    if (finalGroups.length < numberOfTotalGroups) { //peopleInLocalGroup >= peoplePerGroup
        firstDuoLoop();
    }
    else {
        outputFinalGroups();
    }
}
function worstCaseScenario() { //This function happens when no one is found matched with their preference person and adds people from the input group.
for (preft=0; preft <= (peopleInLocalGroup-1); preft++) {
    for(per=0; per <= (peopleInLocalGroup-1); per++) {
        if (inLocalGroupOrNot(inputPeople[localGroup[per]][preft]) == false && inFinalGroupOrNot(inputPeople[localGroup[per]][preft]) == false) {
            addToLocalGroup(inputPeople[localGroup[per]][preft]);
            console.log("WorstCaseScenario first avaiable person added  (localGroup[per][preft]) : "+localGroup[per][preft])
            console.log("localGroup                                                 (localGroup) : "+localGroup)
            personAddedToLocalBoolean = true;
            badMatches += 1;
            return;
        }
    }
}
for(lc=0; lc <= inputPeopleLength; lc++){
    if (inLocalGroupOrNot(lc) == false && inFinalGroupOrNot(lc) == false) {
        console.log("Worst WorstCaseScenario first avaiable person added lc) : "+lc)
        console.log("localGroup                                 (localGroup) : "+localGroup)
        addToLocalGroup(lc);
        badMatches += 2;
        return;
}
}
localGroupCompleted()
console.log("Worst Worst Worst case Scenario happened and so I guess we are done");
//outputFinalGroups()
}
function almostWorstCaseScenario() {
    //check if people are in each others preference list instead of checking if they are in the same preference or higher.
    console.log("almostWorstCaseScenario")
    personAddedToLocalBoolean = false;
    for(pref=0; pref < amountOfPeopleInPreferenceList; pref++) {
        if (inEachOthersPreferenceListOrNot((localGroup.length-1), pref) == true && inLocalGroupOrNot(inputPeople[localGroup.length-1][pref]) == false  && inFinalGroupOrNot(inputPeople[localGroup.length-1][pref]) == false) {
            addToLocalGroup(inputPeople[localGroup[localGroup.length-1]][pref]);
            console.log("almostWorstCaseScenario last person in localGroup's preference                              (pref) : "+pref);
            console.log("almostWorstCaseScenario person who was added  (inputPeople[localGroup[localGroup.length-1]][pref]) : "+inputPeople[localGroup[localGroup.length-1]][pref]);
            console.log("localGroup                                                                            (localGroup) : "+localGroup);
            personAddedToLocalBoolean = true;
            goodMatches += 1;
            return;
        }
    }
    console.log("^^^ almostWorstCaseScenario did noting ^^^")
}
function outputFinalGroups() {
    console.log("Final Groups:");
    console.log(finalGroups);
    console.log("Final Groups:  ^^^");
    processComplete = true;
    for (var x = 0; x < finalGroups.length; ++x) {
        for (var i = 0; i < finalGroups[x].length; ++i) {
            finalGroups[x][i] = inputPeopleNames[finalGroups[x][i]];
        }
    }
    document.write('<head>  <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> <title>Hello, world!</title> </head> <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> <a class="navbar-brand" href="#" onclick="location.reload();">MatchAlg</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#howItWorksModal">How It Works</a> </li> <div class="modal fade" id="howItWorksModal" tabindex="-1" role="dialog" aria-labelledby="howItWorksModal" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="howItWorksModal">How it works</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm is specially designed to make sure that in each group there is at least one perfect match. A perfect match is one, where a persons preference has them as well on their preference list, on the same level or higher. <br>After that the algorithm will try to find someone who is matching the best with the person in the group. However if no person who can be matched is found then a random person is added. But it is important to remember, that in each group there is at least one perfect match which means that it is possible that some inputs are impossible to resolve. <br>The score provided at the end is a ratio of the number of good matches made, to the number of bad matches made. Good matches are those which both people have themselves in their preference list, and bad matches are those which the match has been made randomly. These matches, are only the ones that the algorithm compared, which means that there could be more in the groups. The higher the score the better the matches were, and the lower the worst. A score of 1 is considered average. </div> </div> </div> </div> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#About">About</a> </li> <div class="modal fade" id="About" tabindex="-1" role="dialog" aria-labelledby="About" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="About">About</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm used in this program, is a variation o the Gale-Shapley Algorithm, also known as the stable-marriage algorithm. The goal of this algorithm is to match teams based on preference list provided by each person. It will match people who want to be together, rather than people who dont want to be together. The Gale-Shaple algorithm has previously won a nobel prize for its potential use in the real world.<br><br> Currently the algorithm is being used for medical interns, which are applying to hospitals and research facilities for internships. However this can be used also has a way to create sleeping arrangments for a trip, or team arrangments for a certain sport. The use of this program is astoningly wide. </div> </div> </div> </div> </ul> </div> </nav><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script><br>');
    document.write('<div class="alert alert-dark" role="alert"> Your groups received a final score of <b>'+goodMatches+'/'+badMatches+'</b>! Click the How it Works in the navbar to see what it means! </div>');
    document.write('<div class="card-deck">');
    for (var x = 0; x < finalGroups.length; ++x) {
        document.write('<div class="card border-dark mb-3" style="max-width: 18rem;"> <div class="card-header">Group number '+(x+1)+':</div> <div class="card-body text-dark"> <p class="card-text">'+finalGroups[x]+'</p> </div> </div>');
        if (x % 3 == 0 && x != 0) {
            document.write('</div><br><div class="card-deck">');
        }
    }
    document.write('</div>');
    document.write("<hr>");
    var para = document.createElement("p");
    var node = document.createTextNode("output");
    para.appendChild(node);

    var element = document.getElementById("output");
    element.appendChild(para);
    throw Error
}
function noOutput() {
    print(finalGroups);
    print(localGroup);
    console.log("No can do")
    processComplete = true;
    document.write('<head>  <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> <title>Hello, world!</title> </head> <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> <a class="navbar-brand" href="#" onclick="location.reload();">MatchAlg</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#howItWorksModal">How It Works</a> </li> <div class="modal fade" id="howItWorksModal" tabindex="-1" role="dialog" aria-labelledby="howItWorksModal" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="howItWorksModal">How it works</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm is specially designed to make sure that in each group there is at least one perfect match. A perfect match is one, where a persons preference has them as well on their preference list, on the same level or higher. <br>After that the algorithm will try to find someone who is matching the best with the person in the group. However if no person who can be matched is found then a random person is added. But it is important to remember, that in each group there is at least one perfect match which means that it is possible that some inputs are impossible to resolve. <br>The score provided at the end is a ratio of the number of good matches made, to the number of bad matches made. Good matches are those which both people have themselves in their preference list, and bad matches are those which the match has been made randomly. These matches, are only the ones that the algorithm compared, which means that there could be more in the groups. The higher the score the better the matches were, and the lower the worst. A score of 1 is considered average. </div> </div> </div> </div> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#About">About</a> </li> <div class="modal fade" id="About" tabindex="-1" role="dialog" aria-labelledby="About" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="About">About</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm used in this program, is a variation o the Gale-Shapley Algorithm, also known as the stable-marriage algorithm. The goal of this algorithm is to match teams based on preference list provided by each person. It will match people who want to be together, rather than people who dont want to be together. The Gale-Shaple algorithm has previously won a nobel prize for its potential use in the real world.<br><br> Currently the algorithm is being used for medical interns, which are applying to hospitals and research facilities for internships. However this can be used also has a way to create sleeping arrangments for a trip, or team arrangments for a certain sport. The use of this program is astoningly wide. </div> </div> </div> </div> </ul> </div> </nav><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>');
    document.write('<div class="jumbotron jumbotron-fluid"> <div class="container"> <h1 class="display-4">Sorry, no output reached</h1> <p class="lead">Unfortunatley our algorithm was not able to find perfect groups from the inpt you provided. Just in case, you may want to double check that the format of the file you uploaded is correct and that there are no mistakes.</p> </div> </div>');
    throw Error
}
// ^^^Functions for algorithm^^^
//vvv Functions for conversion of csv to something algorithm will recognize vvv
var listOfNames = [];
function convertToInputPeople(array) {
    inputPeople = [];
    for (var x = 2; x < array.length; x++) {
        listOfNames = array[x].split(",");
        listOfNames = listOfNames.slice(0, amountOfPeopleInPreferenceList)
        inputPeople.push(listOfNames);
    }
    return
}
function convertNamesToNumbers(array) {
    for (var x = 0; x < array.length; x++) {
        for (var i = 0; i < array[x].length; i++) {
            array[x][i] = inputPeopleNames.indexOf(array[x][i]);
            if (array[x][i] == -1) {
                console.log("-1 was printed");
                array[x][i] = 19;
            }
        }
    }
return
}

var input = document.getElementById("myFile");
var output = document.getElementById("output");
var fileUploadedBool = false;
var regex = /[a-z]+$/;
var fileContent = "";
try {
input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();
    
    reader.addEventListener('load', function (e) {
      output.textContent = e.target.result;
      fileContent = (output.textContent);
      fileContentArray = fileContent.split(String.fromCharCode(10));
      numberOfTotalGroups = fileContentArray[0].replace(/[,]/g, '');
      fileUploadedBool = true;
      print(numberOfTotalGroups);
      inputPeopleNames = fileContentArray[1].split(",");
      print(inputPeopleNames);
      inputPeopleLength = inputPeopleNames.length;;
      print(inputPeopleLength);
      amountOfPeopleInPreferenceList = peoplePerGroup-1;
      print(amountOfPeopleInPreferenceList);
      peoplePerGroup = inputPeopleLength / numberOfTotalGroups;
      print(peoplePerGroup);
      try {
      convertToInputPeople(fileContentArray);
      } catch(err) {
        if (processComplete == false) {
        document.write('<head>  <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> <title>Hello, world!</title> </head> <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> <a class="navbar-brand" href="#" onclick="location.reload();">MatchAlg</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#howItWorksModal">How It Works</a> </li> <div class="modal fade" id="howItWorksModal" tabindex="-1" role="dialog" aria-labelledby="howItWorksModal" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="howItWorksModal">How it works</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm is specially designed to make sure that in each group there is at least one perfect match. A perfect match is one, where a persons preference has them as well on their preference list, on the same level or higher. <br>After that the algorithm will try to find someone who is matching the best with the person in the group. However if no person who can be matched is found then a random person is added. But it is important to remember, that in each group there is at least one perfect match which means that it is possible that some inputs are impossible to resolve. <br>The score provided at the end is a ratio of the number of good matches made, to the number of bad matches made. Good matches are those which both people have themselves in their preference list, and bad matches are those which the match has been made randomly. These matches, are only the ones that the algorithm compared, which means that there could be more in the groups. The higher the score the better the matches were, and the lower the worst. A score of 1 is considered average. </div> </div> </div> </div> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#About">About</a> </li> <div class="modal fade" id="About" tabindex="-1" role="dialog" aria-labelledby="About" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="About">About</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm used in this program, is a variation o the Gale-Shapley Algorithm, also known as the stable-marriage algorithm. The goal of this algorithm is to match teams based on preference list provided by each person. It will match people who want to be together, rather than people who dont want to be together. The Gale-Shaple algorithm has previously won a nobel prize for its potential use in the real world.<br><br> Currently the algorithm is being used for medical interns, which are applying to hospitals and research facilities for internships. However this can be used also has a way to create sleeping arrangments for a trip, or team arrangments for a certain sport. The use of this program is astoningly wide. </div> </div> </div> </div> </ul> </div> </nav><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>');
        document.write('<div class="jumbotron jumbotron-fluid"> <div class="container"> <h1 class="display-4">Sorry, no output reached</h1> <p class="lead">Unfortunatley our algorithm was not able to find perfect groups from the inpt you provided. Just in case, you may want to double check that the format of the file you uploaded is correct and that there are no mistakes.</p> </div> </div>');
        }
    }
      print(inputPeople);
      print(inputPeopleNames);
      try {
      convertNamesToNumbers(inputPeople);
      } catch(err) {
        if (processComplete == false) {
        document.write('<head>  <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> <title>Hello, world!</title> </head> <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> <a class="navbar-brand" href="#" onclick="location.reload();">MatchAlg</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#howItWorksModal">How It Works</a> </li> <div class="modal fade" id="howItWorksModal" tabindex="-1" role="dialog" aria-labelledby="howItWorksModal" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="howItWorksModal">How it works</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm is specially designed to make sure that in each group there is at least one perfect match. A perfect match is one, where a persons preference has them as well on their preference list, on the same level or higher. <br>After that the algorithm will try to find someone who is matching the best with the person in the group. However if no person who can be matched is found then a random person is added. But it is important to remember, that in each group there is at least one perfect match which means that it is possible that some inputs are impossible to resolve. <br>The score provided at the end is a ratio of the number of good matches made, to the number of bad matches made. Good matches are those which both people have themselves in their preference list, and bad matches are those which the match has been made randomly. These matches, are only the ones that the algorithm compared, which means that there could be more in the groups. The higher the score the better the matches were, and the lower the worst. A score of 1 is considered average. </div> </div> </div> </div> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#About">About</a> </li> <div class="modal fade" id="About" tabindex="-1" role="dialog" aria-labelledby="About" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="About">About</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm used in this program, is a variation o the Gale-Shapley Algorithm, also known as the stable-marriage algorithm. The goal of this algorithm is to match teams based on preference list provided by each person. It will match people who want to be together, rather than people who dont want to be together. The Gale-Shaple algorithm has previously won a nobel prize for its potential use in the real world.<br><br> Currently the algorithm is being used for medical interns, which are applying to hospitals and research facilities for internships. However this can be used also has a way to create sleeping arrangments for a trip, or team arrangments for a certain sport. The use of this program is astoningly wide. </div> </div> </div> </div> </ul> </div> </nav><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>');
        document.write('<div class="jumbotron jumbotron-fluid"> <div class="container"> <h1 class="display-4">Sorry, no output reached</h1> <p class="lead">Unfortunatley our algorithm was not able to find perfect groups from the inpt you provided. Just in case, you may want to double check that the format of the file you uploaded is correct and that there are no mistakes.</p> </div> </div>');
        }
    }
      print(inputPeople);
      print(inputPeopleNames);
      output.textContent = inputPeopleNames;
      
    });
    
    reader.readAsBinaryString(myFile);
  }   
});
} catch(err) {
    if (processComplete == false) {
    document.write('<head>  <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> <title>Hello, world!</title> </head> <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> <a class="navbar-brand" href="#" onclick="location.reload();">MatchAlg</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#howItWorksModal">How It Works</a> </li> <div class="modal fade" id="howItWorksModal" tabindex="-1" role="dialog" aria-labelledby="howItWorksModal" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="howItWorksModal">How it works</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm is specially designed to make sure that in each group there is at least one perfect match. A perfect match is one, where a persons preference has them as well on their preference list, on the same level or higher. <br>After that the algorithm will try to find someone who is matching the best with the person in the group. However if no person who can be matched is found then a random person is added. But it is important to remember, that in each group there is at least one perfect match which means that it is possible that some inputs are impossible to resolve. <br>The score provided at the end is a ratio of the number of good matches made, to the number of bad matches made. Good matches are those which both people have themselves in their preference list, and bad matches are those which the match has been made randomly. These matches, are only the ones that the algorithm compared, which means that there could be more in the groups. The higher the score the better the matches were, and the lower the worst. A score of 1 is considered average. </div> </div> </div> </div> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#About">About</a> </li> <div class="modal fade" id="About" tabindex="-1" role="dialog" aria-labelledby="About" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="About">About</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm used in this program, is a variation o the Gale-Shapley Algorithm, also known as the stable-marriage algorithm. The goal of this algorithm is to match teams based on preference list provided by each person. It will match people who want to be together, rather than people who dont want to be together. The Gale-Shaple algorithm has previously won a nobel prize for its potential use in the real world.<br><br> Currently the algorithm is being used for medical interns, which are applying to hospitals and research facilities for internships. However this can be used also has a way to create sleeping arrangments for a trip, or team arrangments for a certain sport. The use of this program is astoningly wide. </div> </div> </div> </div> </ul> </div> </nav><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>');
    document.write('<div class="jumbotron jumbotron-fluid"> <div class="container"> <h1 class="display-4">Sorry, no output reached</h1> <p class="lead">Unfortunatley our algorithm was not able to find perfect groups from the inpt you provided. Just in case, you may want to double check that the format of the file you uploaded is correct and that there are no mistakes.</p> </div> </div>');
    }
}
function buttonPressed() {
    if (fileUploadedBool == true) {
    var elem = document.getElementById("intro");
    elem.parentNode.removeChild(elem);
    try {
    firstDuoLoop();
    } catch(err) {
        if (processComplete == false) {
        document.write('<head>  <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> <title>Hello, world!</title> </head> <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> <a class="navbar-brand" href="#" onclick="location.reload();">MatchAlg</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#howItWorksModal">How It Works</a> </li> <div class="modal fade" id="howItWorksModal" tabindex="-1" role="dialog" aria-labelledby="howItWorksModal" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="howItWorksModal">How it works</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm is specially designed to make sure that in each group there is at least one perfect match. A perfect match is one, where a persons preference has them as well on their preference list, on the same level or higher. <br>After that the algorithm will try to find someone who is matching the best with the person in the group. However if no person who can be matched is found then a random person is added. But it is important to remember, that in each group there is at least one perfect match which means that it is possible that some inputs are impossible to resolve. <br>The score provided at the end is a ratio of the number of good matches made, to the number of bad matches made. Good matches are those which both people have themselves in their preference list, and bad matches are those which the match has been made randomly. These matches, are only the ones that the algorithm compared, which means that there could be more in the groups. The higher the score the better the matches were, and the lower the worst. A score of 1 is considered average. </div> </div> </div> </div> <li class="nav-item"> <a class="nav-link" data-toggle="modal" data-target="#About">About</a> </li> <div class="modal fade" id="About" tabindex="-1" role="dialog" aria-labelledby="About" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="About">About</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <div class="modal-body"> The algorithm used in this program, is a variation o the Gale-Shapley Algorithm, also known as the stable-marriage algorithm. The goal of this algorithm is to match teams based on preference list provided by each person. It will match people who want to be together, rather than people who dont want to be together. The Gale-Shaple algorithm has previously won a nobel prize for its potential use in the real world.<br><br> Currently the algorithm is being used for medical interns, which are applying to hospitals and research facilities for internships. However this can be used also has a way to create sleeping arrangments for a trip, or team arrangments for a certain sport. The use of this program is astoningly wide. </div> </div> </div> </div> </ul> </div> </nav><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>');
        document.write('<div class="jumbotron jumbotron-fluid"> <div class="container"> <h1 class="display-4">Sorry, no output reached</h1> <p class="lead">Unfortunatley our algorithm was not able to find perfect groups from the inpt you provided. Just in case, you may want to double check that the format of the file you uploaded is correct and that there are no mistakes.</p> </div> </div>');
        }
    }
    } else {
        alert("Please upload a file before running the algorithm.");
    }
}

var user_file = output.innerHTML;
console.log(user_file.match(regex));
console.log("DONE");
//you are able to convert the input file into an array where every value is aline from the file.
//Now just make sure you are able to convert and stuff.