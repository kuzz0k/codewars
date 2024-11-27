let smiles: string[] = [';]', ':[', ';*', ':$', ';-D']
console.log(smiles.filter(i => {
  const lengthofsmile: number = i.split('').length
  if([')', 'D'].includes(i[lengthofsmile-1])) {
    if(lengthofsmile === 2 && [':', ';'].includes(i[0])) {
      return true
    } else if (lengthofsmile === 3 && [':', ';'].includes(i[0]) && ['-', '~'].includes(i[1])) {
      return true
    }
  }
}))