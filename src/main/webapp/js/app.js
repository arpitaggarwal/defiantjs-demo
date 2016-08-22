var obj = {
        "car": [
            {"id": 10, "color": "silver", "name": "Volvo"},
            {"id": 11, "color": "red",    "name": "Saab"},
            {"id": 12, "color": "red",    "name": "Peugeot"},
            {"id": 13, "color": "yellow", "name": "Porsche"}
        ],
        "bike": [
            {"id": 20, "color": "black", "name": "Cannondale"},
            {"id": 21, "color": "red",   "name": "Shimano"}
        ]
    },
    search = JSON.search(obj, '//car[color="yellow"]/name');

console.log( search );
// ["Porsche"]

var reds = JSON.search(obj, '//*[color="red"]');

for (var i=0; i<reds.length; i++) {
    console.log( reds[i].name );
}
// Saab
// Peugeot
// Shimano