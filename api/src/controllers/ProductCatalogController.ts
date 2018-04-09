import { Route } from '../common/ExpressWrapper';
import { productCatalogDao } from '../factory/AppFactory';

const getProductsController: Route = (req, res) => {
    productCatalogDao.getProdcuts().then(()=>{

    }).catch(()=>{

    });
}

const getCatalogController: Route = (req, res) => {
    productCatalogDao.getCatalogDao().then(() => {

    }).catch(() => {

    });
}

const createCatalogController: Route = (req, res) => {
    productCatalogDao.createCatalog().then(()=>{

    }).catch(()=>{

    });
}

const editCatalogController: Route = (req, res) => {
    productCatalogDao.editCatalog().then(()=>{

    }).catch(()=>{

    });
}

const deleteCatalogController: Route = (req, res) => {
    productCatalogDao.deleteCatalog().then(()=>{

    }).catch(()=>{

    });
}

export { getProductsController, createCatalogController, editCatalogController, deleteCatalogController, getCatalogController };