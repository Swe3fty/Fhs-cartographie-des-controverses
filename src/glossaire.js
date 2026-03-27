let currentCat = 'all';

function toggleCard(card) {
card.classList.toggle('open');
}

function setCat(cat, btn) {
currentCat = cat;
document.querySelectorAll('.glossaire-filter-btn').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
filterGlossaire();
}

function filterGlossaire() {
const query = document.getElementById('glossaireSearch').value.toLowerCase().trim();
const cards = document.querySelectorAll('.glossaire-card');
const seps  = document.querySelectorAll('.glossaire-alpha-sep');
let visible = 0;

cards.forEach(card => {
    const term = card.getAttribute('data-term') || '';
    const def  = card.querySelector('.glossaire-term-def').textContent.toLowerCase();
    const cat  = card.getAttribute('data-cat') || '';
    const matchSearch = !query || term.includes(query) || def.includes(query);
    const matchCat   = currentCat === 'all' || cat === currentCat;

    if (matchSearch && matchCat) {
        card.style.display = '';
        visible++;
    } else {
        card.style.display = 'none';
    }
});

// Masquer les séparateurs alphabétiques si aucune carte visible dans leur groupe
seps.forEach(sep => {
    const letter = sep.getAttribute('data-alpha');
    const nextCards = [];
    let el = sep.nextElementSibling;
    while (el && !el.classList.contains('glossaire-alpha-sep')) {
        if (el.classList.contains('glossaire-card')) nextCards.push(el);
        el = el.nextElementSibling;
    }
    const anyVisible = nextCards.some(c => c.style.display !== 'none');
    sep.style.display = anyVisible ? '' : 'none';
});

// Message vide
document.getElementById('glossaireEmpty').style.display = visible === 0 ? 'block' : 'none';

// Compteur
const countEl = document.getElementById('resultsCount');
if (query || currentCat !== 'all') {
    countEl.textContent = visible + ' terme' + (visible > 1 ? 's' : '') + ' trouvé' + (visible > 1 ? 's' : '');
} else {
    countEl.textContent = '';
}
}