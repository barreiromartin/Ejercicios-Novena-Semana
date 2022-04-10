function crearEquipo(nombre) {
    var equipo = function (nombre) {
        this.nombre = nombre;
        this.puntos = 0;
        this.victorias = 0;
        this.empates = 0;
        this.derrotas = 0;
        this.partidosJugados = 0;
        
        this.golesFavor = 0;
        this.golesContra = 0;


        this.getNombre = function () {
            return this.nombre;
        }

        this.añadirPartido = function () {
            this.partidosJugados += 1;
        }

        this.añadirVictoria = function () {
            this.victorias += 1
            this.puntos += 3;
        }

        this.añadirEmpate = function () {
            this.empates += 1
            this.puntos += 1;
        }

        this.añadirDerrota = function () {
            this.derrotas += 1
            this.puntos += 0;
        }

        this.añadirGolesFavor = function (goles) {
            this.golesFavor += goles;
        }

        this.añadirGolesContra = function (goles) {
            this.golesContra += goles;
        }

        this.getPuntos = function(){
            return this.puntos;
        }

        this.getVictorias = function(){
            return this.victorias;
        }

        this.getEmpates = function(){
            return this.empates;
        }
        this.getDerrotas = function(){
            return this.derrotas;
        }
    }

    aux_equipo = new equipo(nombre);

    return aux_equipo;
}