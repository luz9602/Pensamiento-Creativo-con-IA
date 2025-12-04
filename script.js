// ---------------------- VERSION 1 DEL CODIGO ---------------------------

/*
const galaxia = {
  estrellas: [],
  planetas: [],

  /**
   * Crea un nuevo objeto espacial y lo agrega a la categoría correspondiente
   * @param {string} tipo - Tipo de objeto espacial (estrella / planeta)
   * @param {string} nombre - Nombre del objeto (p. ej. "Sol")
   
  crearObjetoEspacial(tipo, nombre) {
    // Validamos que ambos datos existan
    if (!tipo || !nombre) {
      console.warn("Tipo y nombre son obligatorios");
      return;
    }

    // Normalizamos el tipo para evitar errores por mayúsculas/minúsculas
    const tipoNormalizado = tipo.toLowerCase();

    // Verificamos si la categoría existe dentro de galaxia
    if (!this[tipoNormalizado]) {
      console.error(`Tipo '${tipo}' no soportado aún en la galaxia`);
      return;
    }

    // Creamos el objeto y lo insertamos dinámicamente según el tipo
    const objeto = { nombre, tipo: tipoNormalizado };
    this[tipoNormalizado].push(objeto);

    console.log(`${nombre} añadido como ${tipoNormalizado} correctamente`);
  }
};

// Pruebas
galaxia.crearObjetoEspacial("estrella", "Sol");
galaxia.crearObjetoEspacial("PLANETA", "Neptuno");
galaxia.crearObjetoEspacial("ovni", "Roswell"); // Se manejará como error

console.log(galaxia);
*/


// ---------------------- VERSION 2 DEL CODIGO MEJORADO ---------------------------

// Representación mejorada de la galaxia
const galaxia = {
  estrellas: [],
  planetas: [],

  tiposValidos: ["estrella", "planeta"],

  /**
   * Crea un nuevo objeto espacial y lo agrega a la categoría correspondiente
   * @param {string} tipo - Tipo de objeto espacial (estrella / planeta)
   * @param {string} nombre - Nombre del objeto (p. ej. "Sol")
   * @returns {object|null} Devuelve el objeto creado si fue exitoso
   */
  crearObjetoEspacial(tipo, nombre) {
    if (!tipo || !nombre) {
      console.warn("Tipo y nombre son obligatorios");
      return null;
    }

    const tipoNormalizado = tipo.toLowerCase();

    if (!this.tiposValidos.includes(tipoNormalizado)) {
      console.error(`Tipo '${tipo}' no soportado. Tipos válidos: ${this.tiposValidos.join(", ")}.`);
      return null;
    }

    const coleccion = this[tipoNormalizado];

    // Validación de duplicados
    if (coleccion.some(obj => obj.nombre === nombre)) {
      console.warn(`${nombre} ya existe como ${tipoNormalizado}.`);
      return null;
    }

    const objeto = {
      nombre,
      tipo: tipoNormalizado,
      creadoEn: new Date().toISOString()
    };

    coleccion.push(objeto);
    console.log(`${nombre} añadido como ${tipoNormalizado} correctamente`);
    return objeto;
  }
};

// Pruebas
galaxia.crearObjetoEspacial("estrella", "Sol");
galaxia.crearObjetoEspacial("PLANETA", "Neptuno");
galaxia.crearObjetoEspacial("planeta", "Neptuno"); // duplicado
galaxia.crearObjetoEspacial("ovni", "Roswell");

console.log(galaxia);