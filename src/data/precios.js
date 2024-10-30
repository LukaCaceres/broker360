// precios.js
const precios = [
    {
        prepaga: "OSSACRA",
        provincias: [
            {
                nombre: "Tucumán",
                planes: [
                    {
                        nombre: "Plan Clásico IV",
                        rangosEtarios: {
                            "0-25": 34392,
                            "26-45": 39553,
                            "46-49": 49421,
                            "50-59": 84026,
                            "60-69": 130268,
                            "70+": 158863,
                        },
                        hijos: {
                            primer: 24075,
                            segundo: 20637,
                        }
                    },
                    {
                        nombre: "Plan Total VI",
                        rangosEtarios: {
                            "0-25": 44762,
                            "26-45": 51480,
                            "46-49": 64338,
                            "50-59": 105910,
                            "60-69": 164451,
                        },
                        adicional: {
                            primerHijo: 31336,
                            segundoHijo: 26861,
                        }

                    }
                ]
            },
        ]
    },
    {
        prepaga: "Premedic",
        provincias: [
            {
                nombre: "Tucumán",
                planes: [
                    {
                        nombre: "Plan 200",
                        rangosEtarios: {
                            "1-29": {
                                individual: 51971,
                                matrimonio: 105239,
                                matrimonioHijo: 129496,
                                matrimonio2Hijo: 153383,
                                matrimonio3Hijo: 173135,
                                adicional: {
                                    "-1": 107907,
                                    "1-25": 34750,
                                }
                            },
                            "30-39":{
                                individual: 51971,
                                matrimonio: 105239,
                                matrimonioHijo: 129496,
                                matrimonio2Hijo: 153383,
                                matrimonio3Hijo: 173135,
                                adicional: {
                                    "-1": 107907,
                                    "1-25": 34750,
                                }
                            },
                            "40-49": 49421,
                            "50-59": 84026,
                            "60-69": 130268,
                            "70+": 158863,
                        },
                    },
                    {
                        nombre: "Plan Total VI",
                        rangosEtarios: {
                            "0-25": 44762,
                            "26-45": 51480
                        }
                    }
                ]
            }
        ]
    }
];


export default precios;
