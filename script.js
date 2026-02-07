async function loadFlags() {
    const response = await fetch('flags.json');
    const flags = await response.json();
    const grid = document.getElementById('mainGrid');

    function display(filter = '') {
        grid.innerHTML = '';
        flags.filter(f => f.name.toLowerCase().includes(filter.toLowerCase())).forEach(flag => {
            const card = document.createElement('div');
            card.className = 'flag-card';
            card.innerHTML = `<div class="flag-emoji">${flag.emoji}</div><h3>${flag.name}</h3><p>${flag.desc}</p>`;
            grid.appendChild(card);
        });
    }

    document.getElementById('searchInput').addEventListener('input', (e) => display(e.target.value));
    display();
}
loadFlags();
