import { Menu } from '../models/menu'

export const menu: Menu = {
    Coffee: [
        {
            name: "Caffè",
            price: 0.80
        },
        {
            name: "Caffè macchiato",
            price: 0.80
        },
        {
            name: "Cappuccino",
            price: 1.20,
            ingredients: "Zymil o valsoia: €1.80"
        },

        {
            name: "Americano",
            price: 2.00
        },
        {
            name: "Latte macchiato",
            price: 1.50,
            ingredients: "Zymil o valsoia: €2.00"
        },
        {
            name: "Caffè corretto",
            price: 1.50
        },
        {
            name: "Caffè marocchino",
            price: 1.50
        },
        {
            name: "Caffè con panna",
            price: 1.50
        },
        {
            name: "Caffè al pistacchio",
            price: 2.50
        },
        {
            name: "Nutellino",
            price: 2.00
        },
        {
            name: "Caffè al caramello",
            price: 2.00
        },
        {
            name: "Caffè decaffeinato",
            price: 1.00
        },
        {
            name: "Caffè shakerato",
            price: 2.00
        },
        {
            name: "Caffè freddo",
            price: 2.00,
            ingredients: "mezzo freddo: €1.50"
        },
        {
            name: "Orzo piccolo",
            price: 1.50,
            ingredients: "Grande €1.80"
        },
        {
            name: "Caffè ginseng",
            price: 1.50,
            ingredients: "Grande €1.80"
        },
        {
            name: "Tisane",
            price: 2.50
        },
        {
            name: "Cioccolata calda",
            price: 2.50
        },
        {
            name: "Latte di mandorla",
            price: 2.00,
            ingredients: "Supp. Granita €2.50"
        },
        {
            name: "Tè freddo artigianale",
            ingredients: "Pesca o limone, supp. Granita €2.00",
            price: 1.50
        },
        {
            name: "Caffè macinato al KG",
            price: 15.00
        },
        {
            name: "Crema caffè piccola",
            ingredients: "Grande €2.50",
            price: 1.50
        },
    ],

    Breakfast: [
        {
            name: "Colazione",
            price: 1.20,
        },
        {
            name: "Colazione al pistacchio",
            price: 1.50,
        },
        {
            name: "Colazione mignon",
            price: 0.80,

        },
        {
            name: "Colazione ricotta",
            price: 1.80,
        },
        {
            name: "Brioche col tuppo",
            price: 1.00,
        },
        {
            name: "Brioche col tuppo senza glutine",
            price: 2.50,
        },
        {
            name: "Brioche con nutella",
            price: 2.00,
        },
        {
            name: "Brioche con nutella al pistacchio",
            price: 3.00,
        },
    ],

    Slushes: [
        {
            name: "Supp. Panna",
            price: 0.50,
        },
        {
            name: "Cioccolato",
            price: 2.00,
        },
        {
            name: "Mandorla",
            price: 2.00,
        },
        {
            name: "Pistacchio",
            price: 2.00,
        },
        {
            name: "Caffè",
            price: 2.00,
        },
        {
            name: "Limone",
            price: 2.00,
        },
        {
            name: "Fragola",
            price: 2.00,
        },
        {
            name: "Gelsi",
            price: 2.00,
            ingredients: "Stagione"
        },

    ],

    HotTables: [
        {
            name: "Classica",
            price: 1.50,
            ingredients: "Senza glutine €2.50. Medi su ordinazione €1.00"
        },
        {
            name: "Pizza a taglio",
            price: 2.00,
        },
    ],

    LunchBreak: [{
        name: "Insalatona",
        price: 3.00,
        ingredients: "Supp. €0.50"
    },
    {
        name: "Chicken Garden",
        price: 4.50,
        ingredients: "Insalata mista con straccetti di pollo arrosto"
    },
    {
        name: "Insalata di riso",
        price: 3.50,
    },
    {
        name: "Insalata fantasy",
        price: 4.50,
        ingredients: "Base insalata mista, cond. variabile"
    },
    {
        name: "Piadina prosciutto e formaggio",
        price: 3.00,
    },
    {
        name: "Piadina tonno e philadelphia",
        price: 3.50,
    },
    {
        name: "Piadina caprese",
        price: 3.50,
        ingredients: "Pomodoro, mozzarella, olio sale e origano"
    },
    {
        name: "Carne alla piastra",
        ingredients: "Su richiesta",
        typeOfPrice: "S.Q."
    },
    {
        name: "Lasagna al forno",
        price: 4.00,
        ingredients: "Su ordinazione"
    },
    {
        name: "Pasta al forno",
        price: 4.00,
        ingredients: "Su ordinazione"
    },
    {
        name: "Misto fritto",
        price: 6.00,
    },
    {
        name: "Patatine fritte",
        price: 1.50,
    },
    {
        name: "Tramezzini prosciutto e formaggio/tonno e maionese",
        price: 1.50,
        ingredients: "Pollo bacon e maionese: €2.00"
    },
    ],

    Appetizers: [{
        name: "Analcolico imbottigliato",
        price: 3.00,
    },
    {
        name: "Cocktail Analcolico",
        price: 4.00,
    },
    {
        name: "Cocktail Alcolico",
        price: 5.00,
    },
    {
        name: "Calice di vino",
        price: 4.00,
        ingredients: "Rosso o bianco"
    },
    {
        name: "Calice prosecco",
        price: 4.00,
    },
    {
        name: "Supp. Correzione",
        price: 1.50,
    },
    {
        name: "Schweppes tonica/limone",
        price: 2.00,
        ingredients: "Supp. granita €0.50"
    },
    {
        name: "Aperitivo rinforzato",
        price: 9.00,
    },
    ],

    Syrups: [{
        name: "Seltz limone e sale",
        price: 1.00,
    },
    {
        name: "Sciroppo",
        price: 1.50,
        ingredients: "Supp. granita €0.50"
    },
    {
        name: "Sciroppo bigusto",
        price: 1.50,
    },
    {
        name: "Sciroppo redbull",
        price: 3.00,
    },
    {
        name: "Sciroppo corretto",
        price: 3.00,
    },
    ],

    MilkShakes: [{
        name: "Nutella",
        price: 4.50,
    },
    {
        name: "Arachidi",
        price: 4.50,
    },
    {
        name: "Caramello",
        price: 4.50,
    },
    {
        name: "Pistacchio",
        price: 6.00,
    },
    {
        name: "Banana",
        price: 4.00,
    },
    {
        name: "Amarena",
        price: 4.00,
    },
    {
        name: "Fragola",
        price: 4.50,
    },
    {
        name: "Food Porn",
        price: 6.50,
    },
    ],

    Sweets: [{
        name: "Donut*",
        price: 1.50,
        ingredients: "Cioccolato, fragola, limone, vaniglia"
    },
    {
        name: "Donut ripieni*",
        price: 2.00,
        ingredients: "Cioccolato, fragola"
    },
    {
        name: "Zucchero filato",
        price: 1.80,
    },
    {
        name: "Occhio di bue",
        price: 2.00,
        ingredients: "Nutella, nutella bianca, nocciola, pistacchio, marmellata"
    },
    {
        name: "Fetta di crostata",
        price: 2.00,
    },
    {
        name: "Crepes nutella",
        price: 4.00,
    },
    {
        name: "Crepes nutella al pistacchio",
        price: 5.00,
    },
    {
        name: "Crema caffè Food Porn",
        price: 4.00
    },

    ],

    Fruits: [{
        name: "Misti frutta",
        price: 6.00,
        ingredients: "Frutta cubettata, granita alla frutta e panna"
    },
    {
        name: "Frullati",
        price: 3.00,
        ingredients: "2 frutti, supp: €0.50"
    },
    {
        name: "Succo di frutta",
        price: 2.00,
        ingredients: "Zero €2.50"
    },
    {
        name: "Spremuta d'arancia",
        price: 2.50,
    },
    {
        name: "Spremuta di pompelmo",
        price: 3.00,
    },
    ],

    Drinks: [{
        name: "Acqua naturale/frizzante 0.50l",
        price: 0.50,
    },
    {
        name: "Acqua naturale/frizzante 1l",
        price: 1.50,
    },
    {
        name: "Coca cola lattina 33cl",
        price: 1.00,
        ingredients: "50cl €1.20"
    },
    {
        name: "Coca cola zero lattina 33cl",
        price: 1.00,
    },
    {
        name: "Coca cola bottiglia 50cl",
        price: 1.50,
    },
    {
        name: "Coca cola bottiglia 1.5l",
        price: 2.00,
    },
    {
        name: "Fanta lattina 33cl",
        price: 1.00,
    },
    {
        name: "Sprite lattina 33cl",
        price: 1.00,
    },
    {
        name: "Chinotto lattina 33cl",
        price: 1.00,
    },
    {
        name: "Lemon soda 33cl",
        price: 1.50,
    },
    {
        name: "Redbull",
        price: 2.50,
    },
    {
        name: "Tè in lattina 33cl",
        price: 1.00,
        ingredients: "Pesca o limone"
    },
    ],

    Beers: [
    {
        name: "Moretti",
        price: 1.00,
    },
    {
        name: "Ceres",
        price: 2.50,
    },
    {
        name: "Dreher limone",
        price: 2.00,
    },
    {
        name: "Messina cristalli di sale",
        price: 2.50,
    },
    {
        name: "Tennent's",
        price: 2.50,
    },
    {
        name: "Corona",
        price: 3.00,
    },
    {
        name: "Heineken",
        price: 2.50,
    },
    ],

    Bitters: [{
        name: "Mezz'amaro",
        price: 2.00,
    },
    {
        name: "Intero",
        price: 2.50,
    }
    ],
}