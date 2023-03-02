const heroes = [
    {
        name: 'Will',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Peyt',
        type: 'elf',
        damage: 10,
        health: 50
    }
]


const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function damageBoss() {
    let totalD = 0;
    heroes.forEach(h => {
        totalD += h.damage
    })
    // console.log(totalD);
    boss.health -= totalD
    if (boss.health <= 0) {
        boss.health = 0
    }
    // console.log(boss.health);
    let bossHealthElem = document.getElementById(`bossHealth`)
    bossHealthElem.innerText = boss.health
}