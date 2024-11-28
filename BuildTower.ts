const nfloors: number = 3
let towerlist: string[] = []
for(let i:number = 1; i<=nfloors; i++) {
  towerlist.push(`${' '.repeat(nfloors-i)}${'*'.repeat(i*2-1)}${' '.repeat(nfloors-i)}`)
}

console.log(towerlist)