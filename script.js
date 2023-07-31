(function () {

    var personNames = ["Umar","Nasir","Asad","Qutaiba","Mohsin","Shameer"];

    for (var i = 0; i < personNames.length; i++) {
    
    var firstAlphabet = personNames[i].charAt(0).toLowerCase();

    if (firstAlphabet === 'j')
    {
        byeSpeaker.speak(personNames[i]);
    }
    else
    {
        helloSpeaker.speak(personNames[i]);
    }
    }
    
    })();