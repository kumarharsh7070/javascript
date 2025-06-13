const myarr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newarr =myarr.filter((num)=> num >  5)
// console.log(newarr)    

// if we use scope in function then we need to erite return-------------------------------------------------
// const newarr =myarr.filter((num)=> {
//     return num > 5
// })


const bookstore =[
    {title:"book one", genre:"fiction", publish:2001, edition:2008 },
    {title:"book two", genre:"non-fiction", publish:1992, edition: 2008},
    {title:"book three", genre:"history", publish:1993, edition: 2004},
    {title:"book four", genre:"science", publish:1994, edition: 2001},
    {title:"book five", genre:"history", publish:1856, edition:2005 },
    {title:"book six", genre:"math", publish:1993, edition: 2003}
]
// let stationery= bookstore.filter((bk)=>bk.genre==="history")
// console.log(stationery)

stationery = bookstore.filter((bk)=>{ return bk.edition >2002})
console.log(stationery)