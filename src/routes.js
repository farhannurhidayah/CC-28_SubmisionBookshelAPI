const { addBookShelf, getAllBookshelfAPI, getBookByIdHandler, editBookshelfAPI, deleteBookshelfAPI }= require('./handler');

const routes = [
    {
        method:'POST',
        path:'/books',
        handler:addBookShelf,
    },
    {
        method:'GET',
        path:'/books',
        handler:getAllBookshelfAPI,
    },
    {
        method:'GET',
        path:'/books/{bookId}',
        handler:getBookByIdHandler,
    },
    {
        method:'PUT',
        path:'/books/{bookId}',
        handler:editBookshelfAPI,
    },
    {
        method:'DELETE',
        path:'/books/{bookId}',
        handler:deleteBookshelfAPI,
    }
]

module.exports = routes;