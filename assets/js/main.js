//definicion de la clase consultorio
function Consultorio (nombre, paciente){
    let _nombre = nombre;
    //puede tener 0 o muchos pacientes
    let _paciente = paciente || [];
    //definiendo get y set para nombre
    Object.defineProperty(this, '_getNombre', {
        get: function(){
            return _nombre;
        }
    });
    Object.defineProperty(this, '_setNombre', {
        set: function(nombre){
            this._nombre = nombre;
        }
    });

    //definiendo get para paciente
    Object.defineProperty(this, '_getPaciente', {
        get: function(){
            return _paciente;
        }
    });
    Object.defineProperty(this, '_setPaciente', {
        set: function(paciente){
            _paciente.push(paciente);
        }
    });

}
//METODOS GET Y SET CONSULTORIO
//metodo get y  set nombre
Consultorio.prototype.getNombreConsultorio = function(){
    return this._getNombre;
}
Consultorio.prototype.setNombreConsultorio = function (nombre){
    this._setNombre = nombre;
}
Consultorio.prototype.getPaciente = function(){
    return this._getPaciente;
}
Consultorio.prototype.setPaciente = function (paciente){
    this._setPaciente = paciente;
}
//definicion de la clase paciente
function Paciente (nombre, edad, rut, diagnostico){
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;
    
    //definiendo get y set para nombre
    Object.defineProperty(this, '_getNombre', {
        get: function(){
            return _nombre;
        }
    });
    Object.defineProperty(this, '_setNombre', {
        set: function(nombre){
            _nombre = nombre;
        }
    });

    //definiendo get y set para edad
    Object.defineProperty(this, '_getEdad', {
        get: function(){
            return _edad;
        }
    });
    Object.defineProperty(this, '_setEdad', {
        set: function(edad){
            _edad = edad;
        }
    });
    //definiendo get y set para rut
    Object.defineProperty(this, '_getRut', {
        get: function(){
            return _rut;
        }
    });
    Object.defineProperty(this, '_setRut', {
        set: function(rut){
            _rut = rut;
        }
    });
    //definiendo get y set para diagnostico
    Object.defineProperty(this, '_getDiagnostico', {
        get: function(){
            return _diagnostico;
        }
    });
    Object.defineProperty(this, '_setDiagnostico', {
        set: function(diagnostico){
            _diagnostico = diagnostico;
        }
    });


}
//METODO GET Y SET PACIENTE
//metodo get y set nombre
Paciente.prototype.getNombrePaciente = function(){
    return this._getNombre;
}
Paciente.prototype.setNombrePaciente = function(nombre){
    this._setNombre = nombre;
}
//metodo get y set edad
Paciente.prototype.getEdad = function(){
    return this._getEdad;
}
Paciente.prototype.setEdad = function(edad){
    this._setEdad = edad;
}
//metodo get y set rut
Paciente.prototype.getRut = function(){
    return this._getRut;
}
Paciente.prototype.setRut = function(rut){
    this._setRut = rut;
}
//metodo get y set diagnostico
Paciente.prototype.getDiagnostico = function(){
    return this._getDiagnostico;
}
Paciente.prototype.setDiagnostico = function(diagnostico){
    this._setDiagnostico = diagnostico;
}
//agregar un paciente al consultorio
//NO PUEDO AGREGAR UN NUEVO PACIENTE
Consultorio.prototype.setAgregarPaciente = function(paciente){
    _paciente.push(paciente);
}
//mostrar los pacientes de un consultorio
Consultorio.prototype.getPaciente = function (){
    return this._getPaciente;
}


//pacientes
let pacientes = [
    new Paciente('Luis Luna', 51, '11111111-1','tos'),
    new Paciente('Pedro Luna', 52, '22222222-2','fiebre'),
    new Paciente('Arturo Luna', 53, '33333333-3','gripe'),
    new Paciente('Graciela Jara', 61, '44444444-4','cefalea'),
    new Paciente('Maria Jara', 62, '55555555-5','rinitis')
]

//consultorios
let consultorioUno = new Consultorio('Consultorio Salvador', pacientes);
console.log(consultorioUno.getNombreConsultorio());
console.log(consultorioUno.getPaciente());
console.log(consultorioUno);
//instancio paciente
pacienteUno = new Paciente();
pacienteUno.setNombrePaciente('oscar');
pacienteUno.setEdad(28);
pacienteUno.setRut('66666666-6');
pacienteUno.setDiagnostico('cefalea');
consultorioUno.setPaciente(pacienteUno);
console.log(consultorioUno);

//captura boton buscar
let capturaBtnBuscar = document.getElementById('btnBuscar');


capturaBtnBuscar.addEventListener('click', function(){
    let nombreBuscado = document.getElementById('txtBuscar').value;
    consultorioUno.getPaciente().forEach(paciente => {
        if (paciente.getNombrePaciente() == nombreBuscado){
            console.log(`${paciente.getNombrePaciente()}| ${paciente.getRut()}| ${paciente.getEdad()} |${paciente.getDiagnostico()}`);
        }
        
    });

});

//captura boton mostrar
let capturaBtnMostrar = document.getElementById('btnMostrar');
capturaBtnMostrar.addEventListener('click', function(){
    consultorioUno.getPaciente().forEach(paciente => {
        console.log(`${paciente.getNombrePaciente()} | ${paciente.getRut()} |${paciente.getEdad()} |${paciente.getDiagnostico()} |`)
    });
});

