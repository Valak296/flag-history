async function initVorentia() {
    const response = await fetch('flags.json');
    const flags = await response.json();
    const grid = document.getElementById('mainGrid');

    function render(filter = '') {
        grid.innerHTML = '';
        const search = filter.toLowerCase();
        
        flags.filter(f => 
            f.name.toLowerCase().includes(search) || 
            f.colors.some(c => c.includes(search)) ||
            f.symbols.some(s => s.includes(search))
        ).forEach(flag => {
            const card = document.createElement('div');
            card.className = 'flag-card';
            card.innerHTML = `
                <div class="emoji-box">${flag.emoji}</div>
                <h3>${flag.name}</h3>
                <p><strong>${flag.period}</strong></p>
                <p>${flag.desc}</p>
            `;
            grid.appendChild(card);
        });
    }

    document.getElementById('searchInput').addEventListener('input', (e) => render(e.target.value));
    render();
}

initVorentia();
