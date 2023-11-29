import express from "express";




class livro {
    constructor(nome, Npag){
        this.nome = nome;
        this.Npag = Npag;   
    }    
}

let livros = [
    new livro("peter johnson", 322),
    new livro("miranha",242),
    new livro("narnia",23232),
    new livro("awijawdiawdij",355)
]


const app = express();


app.get("/", (req,res) => {
    res.status(200)
    .send("Shiruleibe")
})

app.get("/livros", (req,res) =>{
    res.status(200)
    .json(livros)
})


export default app;