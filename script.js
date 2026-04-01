const baseDeDatos = {
    "rosado": [
        "Usted me da la paz que tanto necesitaba", "Amo verla sonreír, mi amor", "Usted me hace feliz, mi cielo",
        "Usted es mi lugar favorito", "La amo por todo lo que la hace ser usted", "Mi felicidad le pertenece, amor",
        "Gracias por existir y hacerme mejor", "Usted es mi persona especial, corazón", "Usted lo es todo, mi amor",
        "Mi corazón es todo suyo, cielo"
    ],
    "amarillo": [
        "¡USTED PUEDE CON TODO, AMOR!", "¡BRILLE COMO SIEMPRE, AMOR!", "¡ADMIRO LO FUERTE QUE ES, AMOR!",
        "¡USTED ES CAPAZ DE TODO, AMOR!", "VAMOS, MI PRINCESA, CON TODO!", "¡CREA EN SU TALENTO, USTED PUEDE!",
        "¡NADIE PUEDE PARARLA, AMOR!", "¡YO CREO EN USTED, AMOR!", "¡USTED HACE DEL MUNDO UN LUGAR MEJOR, AMOR!",
        "¡LO VA A LOGRAR, AMOR!"
    ],
    "naranja": [
        "Todo inició trabajando, mi cielo", "El Frappe más rico de la historia", "Ya no duele despertar",
        "Ese primer beso, amo su ternura", "Somos un maravilloso equipo, mi amor", "Esa conexión que tenemos es hermosa",
        "Ahora somos 'nosotros'", "Gracias por su esfuerzo, mi cielo", "Manejar bajo la lluvia juntos es especial",
        "Construyamos la historia más hermosa, mi amor"
    ],
    "am-palido": [
        "La elijó cada día al despertar", "Siempre estaré a su lado, amor", "Prometo cuidar de ustedes, mi cielo",
        "Siempre seré su apoyo, preciosa", "Es mi prioridad en todo momento, amor", "Cada segundo la amo más y más, mi cielo",
        "Prometo no fallarle, mi vida", "Mi lealtad es suya, mi amor", "Tendremos un hogar lleno de amor",
        "Siempre verá con acciones que la amo, mi cielo"
    ],
    "v-claro": [
        "Vencimos lo imposible, mi cielo", "Somos el mejor equipo, mi vida", "Nada ni nadie nos podrá separar, amor",
        "Juntos lo podemos todo, cielo", "Hicimos y hacemos lo que hemos querido, amor", "Cuando estamos juntos, todo es diferente",
        "Con usted ya no hay miedo, amor", "Lo cumpliremos todo, mi amor", "Usted y yo, para siempre, mi cielo",
        "'Imposible' NO existe para nosotros, mi amor"
    ],
    "v-palido": [
        "Respire mi cielo, estoy con usted siempre", "Descansaremos juntos, mi amor", "Todo estará bien, princesa, yo la cuidaré",
        "Nadie puede hacerla sentir mal, mi amor", "No crea lo que dicen o hacen, usted es maravillosa", "Tranquila, mi amor, todo pasará",
        "Mi paz tiene su nombre, amor", "No la pienso dejar sola, amor", "Su fortaleza nadie la puede derribar, amor", 
        "Es una mamá, hija, hermana, pareja y maestra MARAVILLOSA"
    ],
    "azul": [
        "Admiro su disciplina, amor", "Usted es SÚPER INTELIGENTE", "Es un gran ejemplo para Gianna, mi cielo",
        "Amo su determinación, mi cielo", "Su luz guía, mi amor", "¡¡USTED ES MARAVILLOSA!!",
        "Estoy tan orgulloso de usted, mi amor", "Me siento tan feliz de llamarla 'Mí amor'", "Usted es una persona SÚPER VALIOSA",
        "Usted es mi ejemplo, mi amor"
    ],
    "celeste": [
        "Sueño un 'mañana' juntos", "Construyamos la vida que anhelamos", "Usted siempre está presente, mi amor",
        "Y lo que nos falta, mi amor", "Tengamos ese futuro juntos, mi cielo", "Cumplamos nuestros sueños juntos, amor",
        "Caminemos de la mano hacia adelante", "Tengamos esa casita en el campo, amor", "Usted es mi destino, mi cielo",
        "Una y millones de veces más elegiría estar a su lado, mi amor"
    ]
};
function generarFrasePorColor(colorSeleccionado) {
    const frasesDelColor = baseDeDatos[colorSeleccionado];
    const fraseAzar = frasesDelColor[Math.floor(Math.random() * frasesDelColor.length)];

    mostrarEnPantalla(colorSeleccionado, fraseAzar);
}

function generarFrase() {
    const colores = Object.keys(baseDeDatos);
    const colorAzar = colores[Math.floor(Math.random() * colores.length)];
    const frasesDelColor = baseDeDatos[colorAzar];
    const fraseAzar = frasesDelColor[Math.floor(Math.random() * frasesDelColor.length)];
    
    const display = document.getElementById('frase-display');
    display.style.opacity = 0;
    
    setTimeout(() => {
        display.innerText = `[${colorAzar.toUpperCase()}]: "${fraseAzar}"`;
        display.style.opacity = 1;
    }, 200);
}

function mostrarEnPantalla(color, frase) {
    const display = document.getElementById('frase-display');
    display.style.opacity = 0;

    setTimeout(() => {
        display.innerHTML = '<span style = "text-transform: uppercase; font-weight: bold;">[${color}]:</span> "${frase}"';
        display.style.opacity = 1;
    }, 200);
}