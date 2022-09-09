function esPar(num) {
    return num % 2 === 0
    /*   En el caso de que el parametro sea 3
       3 %  2 === 0
                1  === 0
    */
    /*   En el caso de que como parametro me pasen 4
        num % 2 === 0
        4   % 2 === 0
             0  === 0
     */

}

console.log(esPar(4))
/* console.log(esPar(3)) */

/*   % el resto de una division      5 % 2 = 1 
     / el resultado de una division  5 % 2 = 2
*/