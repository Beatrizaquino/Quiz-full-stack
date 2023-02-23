
//declarando o tipo para teste
export default (req: { query: { id: string | number } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: number; name: string }): void; new(): any } } }) => {
    res.status(200).json({
    id: +req.query.id,
    name: 'Bea Gato'
    })
}
