const ERROR = { error: "producto no encontrado" };

class Container {
  constructor() {
    this.productos = [];
  }

  getAll() {
    return this.productos;
  }

  getById(id) {
    const obj = this.productos.find((producto) => producto.id === id);
    if (obj) {
      return obj;
    } else {
      return ERROR;
    }
  }

  create(obj) {
    const arrayOfIds = this.productos.map((product) => producto.id);
    const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
    const id = maxId + 1;
    const newProduct = { id, ...obj };
    this.productos.push(newProduct);
    return newProduct;
  }

  updateById(id, obj) {
    const foundProduct = this.productos.find((producto) => producto.id === id);
    if (foundProduct) {
      const filteredProductos = this.productos.filter(
        (producto) => producto.id !== id
      );
      const newProduct = { id, ...obj };
      this.productos = [...filteredProductos, newProduct];
      return newProduct;
    } else {
      return ERROR;
    }
  }

  deleteById(id) {
    const delteProduct= this.productos.find((producto)=>producto.id !==id);
    const filteredData= this.productos.filter((producto)=>producto.id !==id);
    return true;
  }
}

module.exports = Container;