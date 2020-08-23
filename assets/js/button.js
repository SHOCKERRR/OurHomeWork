const MYGEO = [54.095759, 28.317835];

let options = {
    'my-value' : 0,
    'my-position' : [54.095759, 28.317835],
    'add-friend' : 0,
    'find-friend' : [54.095759, 28.317835],
    'find-place' : 0,
    'make-road' : 0
};

for (const key in options) {
    let btn = document.getElementsByClassName(key)[0];
    btn.onclick = clickFnc;
}

function clickFnc(){
    let arr = this.className.split(' '),
          spanClassName = 'span ' + arr[1],
          optionsKey = arr[1];

    switch (optionsKey) {
        case 'my-value':
            myValue( 'my-value', spanClassName );
            break;
        case 'my-position':
            myPosition( 'my-position', spanClassName );
            break;
        case 'add-friend':
            addFriend( 'add-friend', spanClassName );
            break;
        case 'find-friend':
            findFriend( 'find-friend', spanClassName );
            break;
        case 'find-place':
            findPlace( 'find-place', spanClassName );
            break;
        case 'make-road':
            makeRoad( 'make-road', spanClassName );
            break;
    }
}

function myValue(val, span){

    options[val] = parseInt(Math.random() * 100);
    document.getElementsByClassName(span)[0].innerHTML = options[val];

};
function myPosition(val, span){

    let pos = options[val] = [(Math.random() * 0.001 + MYGEO[0]).toFixed(6), (Math.random() * 0.001 + MYGEO[1]).toFixed(6)];
    document.getElementsByClassName(span)[0].innerHTML = pos;
    placeMarker(pos, ME_ICON);
    mymap.flyTo(pos);

};
function addFriend(val, span){

    let friendValue = options[val] = options['my-value'];
    document.getElementsByClassName(span)[0].innerHTML = friendValue;

};
function findFriend(val, span){

    let pos = options[val] = [(MYGEO[0] - Math.random() * 0.005).toFixed(6), (Math.random() * 0.005 + MYGEO[1]).toFixed(6)];
    document.getElementsByClassName(span)[0].innerHTML = pos;
    placeMarker(pos, FRIEND_ICON);
    mymap.flyTo(pos);

};
function findPlace(val, span){

    if (options['my-value'] === options['add-friend']){
        let distance = parseInt(mymap.distance(L.latLng(options['find-friend']), L.latLng(options['my-position'])));
        let place = [(options['find-friend'][0] * 1 + options['my-position'][0] * 1) / 2, (options['find-friend'][1] * 1 + options['my-position'][1] * 1) / 2];
        document.getElementsByClassName(span)[0].innerHTML = 'Между точками ' + distance + ' метров';
        options[val] = place;
        placeMarker(place, PLACE_ICON);
        mymap.flyTo(place);
    }else return;

};
function makeRoad(val, span){

    document.getElementsByClassName(span)[0].innerHTML = options[val];

};