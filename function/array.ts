export function embaralhar( elementos: any[]): any[] {
    return elementos 
        .map(valor => ({ valor, aleatorios: Math.random() }))
        .sort((Obj1, obj2) => Obj1.aleatorios - obj2.aleatorios)
        .map(obj => obj.valor)
}