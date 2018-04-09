const Router = require('express').Router;
import {getProductsController, createCatalogController, deleteCatalogController, editCatalogController, getCatalogController} from '../controllers/ProductCatalogController';

let catalogRouter = () => {
    const router = Router();

    router.get('/getAllProducts', (req, res) => {
        getProductsController(req, res);
    });

    router.get('/getCatalog/:id', (req, res)=>{
        getCatalogController(req, res);
    });

    router.post('/createCatalog', (req, res) => {
        createCatalogController(req, res);
    });

    router.put('/editCatalog/:id', (req, res) => {
        editCatalogController(req, res);
    });

    router.get('/deleteCatalog/:id', (req, res) =>{
        deleteCatalogController(req, res);
    });

    return router;

}

export default catalogRouter;