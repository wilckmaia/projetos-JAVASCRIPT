function sorteador() {
  let s = Math.floor(Math.random(6) * 60);
  let r = Math.floor(Math.random(6) * 60);
  let t = Math.floor(Math.random(6) * 60);
  let f = Math.floor(Math.random(6) * 60);
  let h = Math.floor(Math.random(6) * 60);
  let l = Math.floor(Math.random(6) * 60);
  if (r === t || r === f || r === h || r === l) {
    r++;
  }
  if (t === r || t === f || t === h || t === l) {
    r++;
  }

  console.log(s, r, t, f, h, l);
}
sorteador();
