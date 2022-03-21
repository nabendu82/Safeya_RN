const bb_container = document.getElementById('bb_container');

const getbb = async () => {
    const url = `https://www.breakingbadapi.com/api/characters`;
    const res = await fetch(url);
    const data = await res.json();
    createbbCard(data);
}

const createbbCard = data => {
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('bb');
        card.innerHTML = `
            <div class="img-container">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="info">
                <h2 class="name">${item.name}</h2>
                <p class="name">${item.occupation[0]}</p>
                ${item.occupation[1] ? `<p class="name">${item.occupation[1]}</p>`: '<div class="empty"></div>'}
            </div>
        `;
        bb_container.appendChild(card);
    })
}

getbb();