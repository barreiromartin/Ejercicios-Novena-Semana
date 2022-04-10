var ligas = function (nombre) {
    this.nombre = nombre;
    this.arrayEquipos = [];
    this.partidos =

        this.getNombre = function () {
            return this.nombre;
        }

    this.getEquipos = function () {
        return this.arrayEquipos;
    }

    this.añadirEquipo = function (equipo) {
        this.arrayEquipos.push(equipo);
    }

    this.jugarLiga = function () {
        for (i = 0; i < this.arrayEquipos.length; i++) {
            for (j = i + 1; j < this.arrayEquipos.length; j++) {
                //Añadir partido a los dos equipos
                this.arrayEquipos[i].añadirPartido();
                this.arrayEquipos[j].añadirPartido();
                //Goles marcados por equipo
                golesI = Math.floor((Math.random() * (5 - 0 + 1)) + 0);
                golesJ = Math.floor((Math.random() * (5 - 0 + 1)) + 0);

                this.arrayEquipos[i].añadirGolesFavor(golesI);
                this.arrayEquipos[j].añadirGolesFavor(golesJ);
                this.arrayEquipos[i].añadirGolesContra(golesJ);
                this.arrayEquipos[j].añadirGolesContra(golesI);

                //salidaConsola(golesI + " vs " + golesJ);

                if (golesI > golesJ) {
                    this.arrayEquipos[i].añadirVictoria();
                    this.arrayEquipos[j].añadirDerrota();
                    //this.arrayEquipo[i].añadir
                } else if (golesI == golesJ) {
                    this.arrayEquipos[i].añadirEmpate();
                    this.arrayEquipos[j].añadirEmpate();
                } else {
                    this.arrayEquipos[i].añadirDerrota();
                    this.arrayEquipos[j].añadirVictoria();
                }
            }
        }

    }
}
