  const marvel_heros = ["thor","ironman","spiderman"]
  const dc_heros = ["superman","flash", "batman"]
  console.log(marvel_heros)
  console.log(dc_heros)
  marvel_heros.push(dc_heros)
  console.log(marvel_heros)
  console.log(marvel_heros[3][1])
  const all_new_heros = [...marvel_heros, ...dc_heros]
  console.log(all_new_heros)