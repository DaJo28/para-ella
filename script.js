const baseDeDatos = {
    "rosado": ["Usted es mi paz.", "Amo su sonrisa.", "Usted me hace feliz."],
    "amarillo": ["¡Usted puede con todo!", "Brille hoy también.", "Usted es capaz."],
    "naranja": ["Todo empezó trabajando.", "Inolvidable primer día.", "De colegas a equipo."],
    "am-palido": ["La elijo siempre.", "Usted es mi prioridad.", "Usted es mi hogar."],
    "v-claro": ["Vencimos lo imposible.", "Somos el mejor equipo.", "Nada nos detiene."],
    "v-palido": ["Respire, estoy aquí.", "Usted es mi calma.", "Mi refugio es usted."],
    "azul": ["Admiro su disciplina.", "Qué mente tan brillante.", "Orgulloso de usted."],
    "celeste": ["Sueño un mañana juntos.", "Usted en mis planes.", "Vamos por más meses."]
};

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