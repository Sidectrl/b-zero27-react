import { Menu } from '../models/menu'

export const menu: Menu = {
    Coffee: [
        {
            name: "Caffè",
            price: "€0.60"
        },
        {
            name: "Caffè macchiato",
            price: "€0.60"
        },
        {
            name: "Cappuccino",
            price: "€1.20"
        },
        {
            name: "Americano",
            price: "€2.00"
        },
        {
            name: "Caffè macchiato",
            price: "€1.80",
            ingredients: "Zymil o valsoia"
        },
        {
            name: "Caffè corretto",
            price: "€1.50"
        },
        {
            name: "Caffè marocchino",
            price: "€1.50"
        },
        {
            name: "Caffè con panna",
            price: "€1.50"
        },
        {
            name: "Caffè al pistacchio",
            price: "€2.50"
        },
        {
            name: "Nutellino",
            price: "€2.00"
        },
        {
            name: "Caffè al caramello",
            price: "€2.00"
        },
        {
            name: "Caffè decaffeinato",
            price: "€1.00"
        },
        {
            name: "Caffè shakerato",
            price: "€2.00"
        },
        {
            name: "Caffè freddo",
            price: "€2.00"
        },
        {
            name: "Caffè mezzo freddo",
            price: "€2.00"
        },
        {
            name: "Orzo",
            price: "€1.50",
            ingredients: "Grande €1.80"
        },
        // {
        //     name: "Orzo grande",
        //     price: "€1.80"
        // },
        {
            name: "Caffè ginseng",
            price: "€1.50",
            ingredients: "Grande €1.80"
        },
        // {
        //     name: "Caffè ginseng grande",
        //     price: "€1.80"
        // },
        {
            name: "Tisane",
            price: "€2.50"
        },
        {
            name: "Cioccolata calda",
            price: "€2.50"
        },
        {
            name: "Latte di mandorla",
            price: "€2.00"
        },
        {
            name: "Tè freddo artigianale",
            ingredients: "Pesca o limone",
            price: "€1.50"
        },
    ],

    Breakfast: [
        {
            name: "Colazione",
            price: "€1.20",
        },
        {
            name: "Colazione al pistacchio",
            price: "€1.50",
        },
        {
            name: "Colazione mignon",
            price: "€0.80",
        },
        {
            name: "Raviola ricotta",
            price: "€1.80",
        },
        {
            name: "Brioche col tuppo",
            price: "€1.00",
        },
        {
            name: "Brioche col tuppo senza glutine",
            price: "€2.50",
        },
        {
            name: "Brioche con nutella",
            price: "€2.00",
        },
    ],

    Slushes: [
        {
            name: "Cioccolato",
            price: "€2.00",
        },
        {
            name: "Mandorla",
            price: "€2.00",
        },
        {
            name: "Pistacchio",
            price: "€2.00",
        },
        {
            name: "Caffè",
            price: "€2.00",
        },
        {
            name: "Limone",
            price: "€2.00",
        },
        {
            name: "Fragola",
            price: "€2.00",
        },
        {
            name: "Gelsi",
            price: "€2.00",
            ingredients: "Stagione"
        },

    ],

    HotTables: [
        {
            name: "Classica",
            price: "€1.50",
        },
        {
            name: "Senza glutine",
            price: "€2.50",
        },
    ],

    LunchBreak: [{
        name: "Insalatona",
        price: "€3.00",
        ingredients: "supp. €0.50"
    },
    {
        name: "Chicken Garden",
        price: "€4.50",
        ingredients: "Insalata mista con straccetti di pollo arrosto"
    },
    {
        name: "Insalata di riso",
        price: "€3.50",
    },
    {
        name: "Insalata fantasy",
        price: "€4.50",
        ingredients: "Base insalata mista, cond. variabile"
    },
    {
        name: "Piadina prosciutto e formaggio",
        price: "€3.00",
    },
    {
        name: "Piadina tonno e philadelphia",
        price: "€3.50",
    },
    {
        name: "Piadina caprese",
        price: "€3.50",
        ingredients: "Pomodoro, mozzarella, olio sale e origano"
    },
    {
        name: "Carne alla piastra",
        price: "su richiesta",
    },

    ],

    Appetizers: [{
        name: "Imbottigliato",
        price: "€3.00",
    },
    {
        name: "Cocktail Analcolico",
        price: "€4.00",
    },
    {
        name: "Cocktail Alcolico",
        price: "€5.00",
    },
    {
        name: "Calice di vino",
        price: "€4.00",
        ingredients: "Rosso o bianco"
    },
    {
        name: "Prosecco maschio 20cl",
        price: "€4.00",
    }
    ],

    Syrups: [{
        name: "Seltz limone e sale",
        price: "€1.00",
    },
    {
        name: "Sciroppo",
        price: "€1,20",
    },
    {
        name: "Sciroppo bigusto",
        price: "€1,50",
    },
    {
        name: "Sciroppo redbull",
        price: "€3.00",
    },
    {
        name: "Sciroppo corretto",
        price: "€3.00",
    },
    ],

    MilkShakes: [{
        name: "Nutella",
        price: "€4.50",
    },
    {
        name: "Arachidi",
        price: "€4.50",
    },
    {
        name: "Caramello",
        price: "€4.50",
    },
    {
        name: "Pistacchio",
        price: "€6.00",
    },
    {
        name: "Banana",
        price: "€4.00",
    },
    {
        name: "Amarena",
        price: "€4.00",
    },
    {
        name: "Fragola",
        price: "€4.50",
    },
    {
        name: "Food Porn",
        price: "€6.50",
    },
    ],

    Sweets: [{
        name: "Donut*",
        price: "€1.50",
        ingredients: "Cioccolato, fragola, limone, vaniglia"
    },
    {
        name: "Occhio di bue",
        price: "€2.00",
        ingredients: "Nutella, nutella bianca, nocciola, pistacchio, marmellata"
    },
    {
        name: "Fetta di crostata",
        price: "€2.00",
    },
    {
        name: "Crepes nutella",
        price: "€4.00",
    },
    {
        name: "Crepes nutella al pistacchio",
        price: "€5.00",
    }
    ],

    Fruits: [{
        name: "Misti frutta",
        price: "€6.00",
    },
    {
        name: "Frullati",
        price: "€3.00",
        ingredients: "(2 frutti, supp: €0.50)"
    },
    {
        name: "Succo di frutta",
        price: "€2.00",
    },
    {
        name: "Spremuta d'arancia",
        price: "€2.50",
    },
    ],

    Drinks: [{
        name: "Acqua naturale/frizzante 0.50l",
        price: "€0.50",
    },
    {
        name: "Acqua naturale/frizzante 1l",
        price: "€1.50",
    },
    {
        name: "Coca cola lattina 33cl",
        price: "€1.00",
    },
    {
        name: "Coca cola zero lattina 33cl",
        price: "€1.00",
    },
    {
        name: "Coca cola bottiglia 50cl",
        price: "€1.50",
    },
    {
        name: "Coca cola bottiglia 1.5l",
        price: "€2.00",
    },
    {
        name: "Fanta lattina 33cl",
        price: "€1.00",
    },
    {
        name: "Sprite lattina 33cl",
        price: "€1.00",
    },
    {
        name: "Chinotto lattina 33cl",
        price: "€1.00",
    },
    {
        name: "Lemon soda 33cl",
        price: "€1.50",
    },
    {
        name: "Redbull",
        price: "€2.50",
    },
    {
        name: "Tè in lattina 33cl",
        price: "€1.00",
        ingredients: "Pesca o limone"
    },
    ],

    Beers: [{
        name: "Peroni",
        price: "€1.00",
    },
    {
        name: "Moretti",
        price: "€1.00",
    },
    {
        name: "Ceres",
        price: "€2.50",
    },
    {
        name: "Dreher limone",
        price: "€2.00",
    },
    {
        name: "Messina cristalli di sale",
        price: "€2.50",
    },
    {
        name: "Tennent's",
        price: "€2.50",
    },
    {
        name: "Corona",
        price: "€3.00",
    },
    ],

    Bitters: [{
        name: "Mezz'amaro",
        price: "€2.00",
    },
    {
        name: "Intero",
        price: "€2.50",
    }
    ],
}