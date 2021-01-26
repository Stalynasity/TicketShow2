# TareaR

# Almacenamiento en caché de la media de un vector

En este ejemplo presentamos el operador <<- que se puede utilizar para asignar un valor a un objeto en un entorno que es diferente del entorno actual. A continuación se muestran dos funciones que se utilizan para crear un objeto especial que almacena un vector numérico y la media de la memoria caché.

La primera función, makeVector crea un "vector" especial, que es realmente una lista que contiene una función para

establecer el valor del vector
obtener el valor del vector
establecer el valor de la media
obtener el valor de la media

makeVector <- function(x = numeric()) {
        m <- NULL
        set <- function(y) {
                x <<- y
                m <<- NULL
        }
        get <- function() x
        setmean <- function(mean) m <<- mean
        getmean <- function() m
        list(set = set, get = get,
             setmean = setmean,
             getmean = getmean)
}

# Almacenamiento en caché de la inversa de una matriz

La inversión de matriz suele ser un cálculo costoso y puede haber algún beneficio para almacenar en caché la inversa de una matriz en lugar de calcularla repetidamente (también hay alternativas a la inversión de matriz que no discutiremos aquí). La asignación consiste en escribir un par de funciones que almacenen en caché la inversa de una matriz.

Escriba las siguientes funciones:

makeCacheMatrix: esta función crea un objeto "matrix" especial que puede almacenar en caché su inversa.
cacheSolve: esta función calcula la inversa de la "matriz" especial devuelta por makeCacheMatrix anterior. Si el inverso ya se ha calculado (y la matriz no ha cambiado), la cachesolve debe recuperar la inversa de la memoria caché.
La computación de la inversa de una matriz cuadrada se puede hacer con la función de resolución en R. Por ejemplo, si X es una matriz invertible cuadrada, solve(X) devuelve su inversa.

Para esta asignación, supongamos que la matriz suministrada siempre es invertible.
