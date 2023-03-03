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
        if (h.health > 0)
            totalD += h.damage
    })
    // console.log(totalD);
    boss.health -= totalD
    if (boss.health <= 0) {
        boss.maxHealth += 100
        boss.health = boss.maxHealth
        boss.damage += 5
        let bossDamageElem = document.getElementById('bossDamage')
        bossDamageElem.innerText = boss.damage
    }
    // console.log(boss.health);
    let bossHealthElem = document.getElementById(`bossHealth`)
    let bossStatElem = document.querySelector('.healthStat')
    bossStatElem.innerText = boss.health
    // bossHealthElem.innerText = boss.health
}

function damageHero() {
    // target hero health and damage
    heroes.forEach(d => {
        let heroHealthElem = document.getElementById(d.name)
        let heroStatElem = heroHealthElem.querySelector('.healthSta')
        // let newHeroStatElem = document.getElementById(`${d.name}-health`)
        d.health -= boss.damage
        let template = ''
        if (d.health <= 0) {
            d.health = 0
            template = `<div id="${d.name}-healthBar" class="border border-dark bg-dark text-center"><span
            class="healthSta">${d.health}</span>`

            let healthBarElem = document.getElementById(`${d.name}-healthBar`)
            healthBarElem.innerHTML = template
        }

        console.log(d.health);
        heroStatElem.innerText = d.health

    })
}


setInterval(damageHero, 3000)