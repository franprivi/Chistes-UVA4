document.addEventListener("DOMContentLoaded", () => {
    const chiste = [
    "¿Qué es rojo y malo para tus dientes? Un ladrillo.",
    "Conocí a mi novia en un ascensor. Dice que soy el amor de subida.",
    " Mira, Jaimito, la Luna está llena. ¿De qué?",
    "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
    "¿¿Cuál es el café más peligroso del mundo? El ex-preso",
    "¿Qué pasa si tiras un pato al agua? Nada.",
    "¿Qué le dice un jardinero a otro? Disfrutemos mientras podamos.",
    "¿Cuál es el coche favorito de un fotógrafo? El Ford Focus mago?",
    "¿Te gusta el rock progresivo? Cada vez más.!",
    "¿Mamá, mamá, los spaghetti se están pegando. Déjalos que se maten!"
    ];

    let currentchisteIndex = 0;

    function displaychiste() {
        document.getElementById('chiste').textContent = chiste[currentchisteIndex];
    }

    document.querySelector('.menu-btn').addEventListener('click', () => { 
        document.querySelector('.menu-links').classList.toggle('active');
    });

    document.querySelectorAll('.menu-links a').forEach(link => {
        link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.textContent.trim().toLowerCase();
        if (target === 'home') {
        document.getElementById('home').style.display = 'block';
        document.getElementById('about').style.display = 'none';
        } else if (target === 'acerca de') {
        document.getElementById('home').style.display = 'none';
        document.getElementById('about').style.display = 'block';
        }
        });
        });

    document.querySelector('.buttons').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
        if (e.target.textContent.includes('Anterior')) {
    currentchisteIndex = (currentchisteIndex - 1 + chiste.length) % chiste.length;
        } else if (e.target.textContent.includes('Siguiente')) {
    currentchisteIndex = (currentchisteIndex + 1) % chiste.length;
    }
    displaychiste();
    }
    });

    displaychiste();
});