export type Book= {
    id:Int32Array,
    titulo:string,
    autor:string,
    ano:string,
    numeroInscripcion:string,
    numeroClasificacion:string,
    orden:string,
    bib:string,
    precio:string,
    procedencia:string,
    observaciones:string,
    tipo:string
}
export type q_libros={
    libros:Book[]
}