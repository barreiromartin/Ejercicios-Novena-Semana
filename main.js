/*
Las indicaciones para la creación del programa es:
    - Debe contener un menú con las siguientes opciones y funcionalidades:

    - Introducir
        - Coche (ocupa 1 espacio)
        - Camión (ocupa 2 espacios)

    - Salida
        - Elimina uno de los vehículos y libera el espacio que ocupaba

    - Comprobar
        - Permite observar cómo de lleno está el parking y quien
        ocupa que plaza
        
    - Salir del programa
        - Permite terminar la ejecución del programa
*/


//ORDENAR ARRAYS PREGUNTAR


function __main__() {
    var laliga = new ligas("LaLiga");

    var equipo_1 = crearEquipo("Real Madrid");
    var equipo_2 = crearEquipo("FCBarcelona");
    var equipo_3 = crearEquipo("Atlético de Madrid");
    var equipo_4 = crearEquipo("Celta de Vigo");
    var equipo_5 = crearEquipo("Villareal");

    laliga.añadirEquipo(equipo_1);
    laliga.añadirEquipo(equipo_2);
    laliga.añadirEquipo(equipo_3);
    laliga.añadirEquipo(equipo_4);
    laliga.añadirEquipo(equipo_5);



    do {
        var continuar = true;
        var opcion = parseInt(entradaConsola("LA LIGA\n---------\n1 - Nueva Liga\n2 - Mostrar Tabla\n3 - Añadir Equipo\n4 - Salir"));


        switch (opcion) {
            case 1:
                laliga.jugarLiga();
                alert("LA LIGA\n---------\nNueva liga Generada.")
                break;
            case 2:
                tabla = "LA LIGA\n---------\nEquipo: - Puntos: - Victorias: - Empates: - Derrotas:\n";
                laliga.arrayEquipos.forEach(element => {
                    tabla += element.getNombre() + " - " + element.getPuntos() + " - " + element.getVictorias() + " - " + element.getEmpates() + " - " + element.getDerrotas() + "\n";
                });

                alert(tabla);
                break;
            case 3:
                nombre_equipo = entradaConsola("LA LIGA\n---------\nIntroduce el nombre del equipo a añadir.");
                nuevo_equipo = crearEquipo(nombre_equipo);
                laliga.añadirEquipo(nuevo_equipo);
                alert("LA LIGA\n---------\nEquipo Añadido.");
                break;

            case 4:
                continuar = false;
                alert("Saliendo");
                break;
        }
    } while (continuar)
}


__main__();