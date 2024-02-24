var score = 10
/* 
    Ce bout de code test si score est égale à 10
    si c'est le cas il alert Vous avez remplie la condition
    sinon il alert Vous n'avez pas remplie la condition
*/
if(score == 10) {
    alert("Vous avez remplie la condition")
}else {
    alert("Vous n'avez pas remplie la condition")
}
// Un autre EXEMPLE
/*
    Même principe que le précedent sauf qu'ici, nous avons
    plus de complexité avec les conditions

    NB: on peut utiliser autant de ELSE IF que nous voulons
    dans notre code cela dependra de nous.
*/

var moyenne = 10

if(moyenne == 14) {
    alert("Bravo, vous avez la mention Bien")
}else if(moyenne == 16) {
    alert("Bravo vous avez la mention trés bien")
}else{
    alert("Vous n'avez pas la mention")
}

/*
    LES INSTRUCTIONS IF NOUS PERMETTENT D'AJOUTER PLUS
    D'INTELLIGENCE DANS NOTRE CODE    
*/

var score1 = 10
var score2 = "10"

if(score1 === score2) {
    alert("Oui, les valeurs sont identiques")
}else {
    alert("Non, elles ne sont pas identiques")
}
/*
    Avcec les (==), score1 et score2 sont identique
    Par contre avec (===) score1 et score2 ne sont pas identiques
    le (===) verifié non seulement les valeurs, mais le types aussi
*/

// LES OPERATEURS DE COMPARAISON

/*
    (==) ==> Egale à
    (===) ==> Identique à
    (>) ==> Superieur à
    (<) ==> Inferieur à
    (>=) ==> Superieur ou Egale à
    (<=) ==> Inferieur ou Egale à
*/

// LES OPERATEURS LOGIQUES

/*
    (&&) ==> ET (Il faut que les 2 soient vraies pour que la condition marche)
    (||) ==> OU (Il sufit qu'une seule soit vraie pour que ça marche)
    (!) ==> NON
*/