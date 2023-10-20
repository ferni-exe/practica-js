result=(Math.floor(Math.random() * (370 - 185 + 1) ) + 185)%37;
for (let i=1;i<=10;i++){
numDeJuego=i}
posInicial=((Math.floor(Math.random() * (370 - 185 + 1) )+185));
//assert
test('numero de juego',()=>{
    expect(numDeJuego).toBeLessThanOrEqual(10);
    expect(numDeJuego).toBeGreaterThan(0);
})
test('posicion inicial',()=>{
    expect(posInicial).toBeGreaterThanOrEqual(0);
    expect(posInicial).toBeLessThanOrEqual(359);
})
test('numero de posicion final ', () => {
    expect(result).toBeLessThanOrEqual(36);
    expect(result).toBeGreaterThanOrEqual(0);
}); 