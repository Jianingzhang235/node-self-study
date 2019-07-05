// using references(Normalization) -> consisitency
let author = {
    name: 'Mosh'
}

let course = {
    author: 'id'
}
// using Embedded Documents (Denormalization) -> (inconsisitency) performance

let course = {
    author: {
        name: 'Mosh'
    }
}
//Hybird
let author = {
    name: "Mosh"
    //50 other properties
}
let course = {
    author: {
        id: 'ref',
        name: 'Mosh'
    }
}