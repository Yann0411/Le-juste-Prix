//console.log(Math.round(Math.random()*500))


var randomNumber = Math.round(Math.random() * 500)


console.log(randomNumber)

var compteur = 10;
alert('vous avez le droit à 10 essais')

var NumberGotFromUser = prompt('Saisi un nombre')


NumberGotFromUser = Number(NumberGotFromUser)


while (NumberGotFromUser !== randomNumber) {

    if(compteur=== 1){
        alert("perdu")
    }

    console.log(`NumberGotFromUser: ${NumberGotFromUser}`)
    debugger;

    if (NumberGotFromUser < randomNumber) {
        compteur--
       
      
        alert('La saisie est trop petite')
        alert(`il vous reste ${compteur} essais` )
        NumberGotFromUser = prompt('Saisi un nombre')
      

    } else if (NumberGotFromUser > randomNumber) {
       
       
        compteur--
        alert('La saisie est trop grande')
        alert(`il vous reste ${compteur} essais` )
        NumberGotFromUser = prompt('Saisi un nombre')


    }
    else {

        alert(`C'est gagné`)

    }


}