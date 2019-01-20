// Sintaxis para una querie:
query{
    post(postId: "cjo92qycbexsh0911qchdymbw"){
        id,
            title,
            author{
            id,
                email,
                name
        }
    }
}
// Sintaxis para una mutation:
mutation {
    createDraft(
        title: "Mi primer post",
        userId: "cjo92qyc5exsg0911b9iydmph"
    ){
        id,
            title,
            published
        author{
            name,
                id
        }
    }
}