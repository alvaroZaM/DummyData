var resultado="";

const apellidosAlemanes = [
    "Müller", "Schmidt", "Schneider", "Fischer", "Weber",
    "Meyer", "Wagner", "Becker", "Hoffmann", "Schulz",
    "Koch", "Richter", "Klein", "Wolf", "Schröder",
    "Neumann", "Schwarz", "Zimmermann", "Braun", "Hartmann",
    "Lange", "Schmitt", "Werner", "Krause", "Meier",
    "Sommer", "König", "Engel", "Herrmann", "Walter",
    "Lange", "Pohl", "Richter", "Fuchs", "Busch",
    "Schreiber", "Zimmer", "Jansen", "Günther", "Vogel",
    "Hermann", "Hofmann", "Keller", "Wolf", "Braun",
    "Engelhardt", "Graf", "Albrecht", "Wiegand", "Günther",
    "Schulte", "Seidel", "Huber", "Schubert", "Roth",
    "Stiegler", "Dietrich", "Schrader", "Möller", "Lorenz",
    "Kiefer", "Götz", "Krauß", "Riedel", "Arnold",
    "Günzel", "Beck", "Dreyer", "Witt", "Putz",
    "Huber", "Baumann", "Bock", "Engel", "Fröhlich",
    "Krüger", "Meyer", "Keller", "Wolf", "Wenzel",
    "Weiss", "Otten", "Schulze", "Meyer", "Schmitt",
    "Möller", "Schreiber", "Fischer", "Schmitt", "Pfeiffer",
    "Fiedler", "Ziegler", "Engel", "Senger", "Friedrich",
    "Sauter", "Moser", "Eberhardt","Fried","Baum"
];

const apellidosEspanoles = [
"García", "Fernández", "González", "Rodríguez", "López",
"Martínez", "Sánchez", "Pérez", "Gómez", "Martín",
"Díaz", "Moreno", "Muñoz", "Álvarez", "Romero",
"Jiménez", "Molina", "Vázquez", "Castro", "Ortiz",
"Ramos", "Delgado", "Navarro", "Torres", "Salazar",
"Cruz", "Reyes", "Hernández", "Jiménez", "Luna",
"Márquez", "Aguilar", "Ríos", "Cano", "Pacheco",
"Bermúdez", "Vega", "Serrano", "Hidalgo", "Cardenas",
"Silva", "Maldonado", "Cordero", "Valdez", "Pérez",
"Téllez", "Santos", "Alonso", "Cabrera", "Ríos",
"Quintero", "Ceballos", "Montoya", "Camacho", "Castillo",
"Solano", "Figueroa", "Duarte", "Villarreal", "Castañeda",
"Pérez", "Ocampo", "Orozco", "Gutiérrez", "Salas",
"Acosta", "Villar", "Peña", "Coronado", "Arce",
"Mora", "Núñez", "Bautista", "Ramírez", "Paniagua",
"Gonzales", "Mena", "Correa", "Sánchez", "Serrato",
"Montes", "Salgado", "Aguilera", "Aranda", "Tovar",
"Solares", "Zapata", "Contreras", "Ferrer", "Salvador",
"Medina", "Pérez", "Arroyo", "Lara", "Saavedra",
"Abril","Zavala","Mendez","Valenzuela","Gordillo"
];

const nombresEspanoles = [
"Sofía", "Mateo", "Valentina", "Santiago", "Isabella",
"Sebastián", "Camila", "Diego", "Lucía", "Liam",
"Renata", "Alejandro", "Emma", "Nicolás", "Victoria",
"Daniel", "María", "Julio", "Ximena", "Andrés",
"Paola", "Samuel", "Gabriela", "David", "Luciano",
"Ana", "Jorge", "Carmen", "Pablo", "Elena",
"Gonzalo", "Alicia", "Fernando", "Carla", "Felipe",
"Natalia", "Raúl", "Clara", "Bruno", "Tania",
"Mateo", "Patricia", "Oscar", "Lola", "Iván",
"Mariana", "Julieta", "Hugo", "Diana", "Rafael",
"Iker", "Teresa", "Carlos", "Mónica", "Rodrigo",
"Fabiola", "Emilio", "Cristina", "Ángel", "Lucia",
"Bárbara", "Sergio", "René", "Cecilia", "Esteban",
"Marisol", "Arturo", "Pamela", "Víctor", "Nina",
"Julio", "Fabián", "Verónica", "Maximiliano", "Lía",
"Agustín", "Gloria", "Rocío", "Dario", "Silvia",
"Néstor", "Patricio", "Belén", "Mauricio", "Ariana",
"Leonardo", "Martina", "Salvador", "Teresa", "Rosa",
"Alberto", "Estela", "Pilar", "Cristian", "Noelia",
"Manuel", "Juana", "Diego", "Milagros", "Tomas"
];

const nombresChinos = [
"Lí", "Wáng", "Zhāng", "Liú", "Chén",
"Yáng", "Xiè", "Zhao", "Huáng", "Wú",
"Lín", "Táng", "Guō", "Yú", "Fāng",
"Shí", "Chén", "Lǐ", "Zú", "Mā",
"Jīng", "Qīn", "Fēng", "Liàng", "Shì",
"Yǒng", "Yī", "Nín", "Bǎi", "Zū",
"Hè", "Yǎ", "Mǐn", "Zǐ", "Jūn",
"Yǒu", "Xiǎo", "Kǎi", "Mèng", "Xīn",
"Hǎo", "Yú", "Shū", "Mǔ", "Fēi",
"Tíng", "Nà", "Yā", "Yīn", "Wěi",
"Lé", "Bó", "Hóng", "Nǚ", "Yīng",
"Jìng", "Mǎ", "Xǐ", "Bīng", "Tā",
"Wěn", "Jū", "Yì", "Liū", "Zhī",
"Yǔ", "Tāo", "Xǐ", "Zè", "Nán",
"Gē", "Wāng", "Kū", "Hè", "Xī",
"Lǐ", "Tí", "Sū", "Yà", "Yún",
"Jū", "Fā", "Lì", "Zhèng", "Qí",
"Wǔ", "Yè", "Lín", "Mí", "Zhǐ",
"Yǔ", "Fù", "Hǎi", "Qì", "Dōng",
"ff","gg","ll","jj","rr"
];



function generarFechaAleatoria() {
    const año = Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000; // Entre 2000 y 2023
    const mes = Math.floor(Math.random() * 12) + 1; // Entre 1 y 12

    // Obtener el último día del mes
    const ultimoDia = new Date(año, mes, 0).getDate();
    const dia = Math.floor(Math.random() * ultimoDia) + 1; // Entre 1 y el último día del mes

    // Formatear el mes y el día para que tengan siempre dos dígitos
    const fechaFormateada = `${año}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
    
    return fechaFormateada;
}


function generar() {
      resultado=`CREATE DATABASE IF NOT EXISTS sistema_escolar; <BR>
                 USE sistema_escolar;<BR>
                 DROP TABLE IF EXISTS alumnos;<BR>
                 CREATE TABLE IF NOT EXISTS alumnos(<BR>
                        matricula BIGINT UNSIGNED NOT NULL UNIQUE CHECK(CHAR_LENGTH(matricula) = 9),<BR>
                        apellido_1 VARCHAR(255) NOT NULL,<BR>
                        apellido_2 VARCHAR(255),<BR>
                        nombres VARCHAR(255) NOT NULL,<BR>
                        correo VARCHAR(255) NOT NULL,<BR>
                        fecha_nacimiento DATE NOT NULL,<BR>
                        PRIMARY KEY (matricula)<BR>
                );<BR>

                INSERT INTO alumnos() VALUES`;

    var matricula = 223090001;


    for (let i = 0; i < 50000; i++) {
       resultado+= `('${matricula++}',
         '${apellidosAlemanes[Math.floor(Math.random()*100)]}',
         '${apellidosEspanoles[Math.floor(Math.random()*100)]}',   
         '${Math.floor(Math.random()*2)+1  == 1 ?  nombresEspanoles[Math.floor(Math.random()*100)] : nombresChinos[Math.floor(Math.random()*100)] +" "+  nombresEspanoles[Math.floor(Math.random()*100)]  }',
         '${matricula-1}@unikino.edu.mx',
         '${generarFechaAleatoria()}'),<BR>`; 
    }
    resultado =  resultado.slice(0,-5)+";";

    document.getElementById("parrafo").innerHTML = resultado;

    
    
   
}

function generarSQL() {
    var archivo = document.createElement("a");
    var salida = resultado.replace(/<BR>/g,"\n").trim();

    archivo.setAttribute("href","data:text/plain;charset=utf-8," + encodeURIComponent(salida));
    archivo.setAttribute("download","sistema_escolar.sql");
    archivo.style.display ="none";
    document.body.appendChild(archivo);
    archivo.click();
    document.body.removeChild(archivo);
}