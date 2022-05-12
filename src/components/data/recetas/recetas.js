export const recetas = [
    {
        id:1,
        categoria: {
            descripcion: "Pollos",
            id:2
        },
        nombre: "Pollo al verdeo con crema liviana",
        descripcion:"Técnicamente, la crema liviana que acompaña este pollo al verdeo, reduce la intensidad de la siesta que te mandás después del plato. Está científicamente comprobado y así lo enseñan en las escuelas de alta gastronomía.",
        ingredientes: [
            "1 pechuga de pollo grande",
            "5 cebollas de verdeo",
            "1 diente de ajo",
            "1 chorro de vino blanco",
            "1 calidto",
            "100cc de crema de leche",
            "Sal, pimienta y aceite"
        ],
        preparacion:[
            {
                paso:1,
                descripcion:"Cortar la pechuga en trozos grandes. Calentar el aceite y dorar los trozos de ambos lados. No deben quedar demasiado dorados, apenas."
            },
            {
                paso:2,
                descripcion:"Agregar al pollo las cebollas de verdeo, cortadas en rodajas gruesas, y el ajo picado. Cocer a fuego fuerte. Apenas un par de minutos, la cebolla de verdeo no debe ablandarse tanto como en otros sofritos."
            },
            {
                paso:3,
                descripcion:"Agregar el chorro de vino y dejar al fuego uno o dos minutos, para que evapore el alcohol"
            },
            {
                paso:4,
                descripcion:"Agregar el caldito, la sal, la pimienta y agua hasta cubrir apenas el pollo. Poner a fuego fuerte hasta que hierva, luego bajar el fuego y cocinar, tapado, una media hora."
            },
            {
                paso:5,
                descripcion:"Una vez que esté listo, dejar unos minutos para que baje el calor y agregar la crema de leche. Mezclar hasta que la salsa se una. Quedará una salsa cremosa pero liviana. Servir acompañado de arroz como yo, puré, papas o lo que se te ocurra."
            },
        ],
        imagen:"/assets/recetas/pollo-con-crema.jpeg",
        usuario:{
            id:1,
            nombre:"Pedro Sanchez"
        },
        likes:5,
        dificultad:4,
    },
    {
        id:3,
        categoria: {
            descripcion: "Sopas y verduras",
            id:1
        },
        nombre: "Sopa de cebolla",
        descripcion:"Hoy proponemos la receta tradicional de la sopa de cebolla que preparamos con vino blanco. Algunas personas prefieren usar brandy, jerez o no agregarle ningún ingrediente alcohólico.",
        ingredientes: [
            "4 Cebollas blancas",
            "250 ml Vino blanco seco",
            "1l Agua",
            "50g Manteca",
            "15ml Aceite de girasol",
            "10g Harina de trigo",
            "100g Queso emmental rallado",
            "1 Pan baguette",
            "Sal a gusto",
            "Pimienta negra molida"
        ],
        preparacion:[
            {
                paso:1,
                descripcion:"Cortamos todas las cebollas en juliana"
            },
            {
                paso:2,
                descripcion:"Calentamos una olla con el aceite vegetal en la que derretimos 30 gramos de mantequilla."
            },
            {
                paso:3,
                descripcion:"Le agregamos luego las cebollas en juliana y salpimentamos. Cocemos a fuego lento por unos 20 minutos."
            },
            {
                paso:4,
                descripcion:"Agregamos la harina y removemos."
            },
            {
                paso:5,
                descripcion:"Dejamos un par de minutos más en la lumbre antes de añadir el vino blanco y el litro de agua sin dejar de revolver. Ajustamos el punto de sal y pimienta al gusto si es necesario.Cocemos a fuego bajo por unos 30 minutos más."
            },
            {
                paso:6,
                descripcion:"Calentamos una olla con el aceite vegetal en la que derretimos 30 gramos de mantequilla."
            },
            {
                paso:7,
                descripcion:"Cortamos el pan baguette en rodajas de unos tres o cuatro centímetros de ancho, les untamos mantequilla de ambos lados y las colocamos en el horno a 180ºC por unos 10 minutos. Las volteamos y dejamos otros 10 minutos para que se doren de los dos lados. Si compramos el queso entero lo rallamos finamente."
            },
            {
                paso:8,
                descripcion:"Para servir la sopa colocamos cada porción en un cuenco para horno, acomodamos el pan tostado y espolvoreamos el queso rallado sobre el pan y la sopa. Ponemos en el horno caliente a 220ºC por unos tres a cinco minutos para que el queso gratine y servimos inmediatamente."
            },
        ],
        imagen:"/assets/recetas/SopaCebolla.jpeg",
        usuario:{
            id:1,
            nombre:"Pedro Sanchez"
        },
        likes:5,
        dificultad:4,
    },
    {
        id:4,
        categoria: {
            descripcion: "Sopas y verduras",
            id:1
        },
        nombre: "Pollo frito",
        descripcion:"UYesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...",
        ingredientes: [
            "100g de jamon",
            "Un chorrito de aceite"
        ],
        preparacion:[
            {
                paso:1,
                descripcion:"Lava el pollo"
            },
            {
                paso:2,
                descripcion:"Metetelo en el culo"
            },
        ],
        imagen:"/assets/recetas/receta1.jpg",
        usuario:{
            id:1,
            nombre:"Pedro Sanchez"
        },
        likes:5,
        dificultad:4,
    },
    {
        id:2,
        categoria: {
            descripcion: "Sopas y verduras",
            id:1
        },
        nombre: "Pollo frito",
        descripcion:"Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...",
        ingredientes: [
            "100g de jamon",
            "Un chorrito de aceite"
        ],
        preparacion:[
            {
                paso:1,
                descripcion:"Lava el pollo"
            },
            {
                paso:2,
                descripcion:"Metetelo en el culo"
            },
        ],
        imagen:"/assets/recetas/receta1.jpg",
        usuario:{
            id:1,
            nombre:"Pedro Sanchez"
        },
        likes:5,
        dificultad:5,
    },
    {
        id:5,
        categoria: {
            descripcion: "Sopas y verduras",
            id:1
        },
        nombre: "Pollo frito",
        descripcion:"Un pollo frito para comer en familiaYesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...",
        ingredientes: [
            "100g de jamon",
            "Un chorrito de aceite"
        ],
        preparacion:[
            {
                paso:1,
                descripcion:"Lava el pollo"
            },
            {
                paso:2,
                descripcion:"Metetelo en el culo"
            },
        ],
        imagen:"/assets/recetas/receta1.jpg",
        usuario:{
            id:1,
            nombre:"Pedro Sanchez"
        },
        likes:5,
        dificultad:2,
    },
    {
        id:6,
        categoria: {
            descripcion: "Sopas y verduras",
            id:1
        },
        nombre: "Pollo frito",
        descripcion:"Un pollo frito para Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook... en familia",
        ingredientes: [
            "100g de jamon",
            "Un chorrito de aceite"
        ],
        preparacion:[
            {
                paso:1,
                descripcion:"Lava el pollo"
            },
            {
                paso:2,
                descripcion:"Metetelo en el culo"
            },
        ],
        imagen:"/assets/recetas/receta1.jpg",
        usuario:{
            id:9,
            nombre:"Pedro Sanchez"
        },
        likes:5,
        dificultad:3,
    },
]