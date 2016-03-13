var name = 'shane osbourne';

//console.log(names.join(' '));

var upper = name.split(' ')// [shane, osbourne]
    .map(x => x.charAt(0).toUpperCase() + x.slice(1)) // [Shane, Osbourne]
    .join(' ');

console.log(upper);

var oldUpper =
    name.split(' ')
        .map(function(x) {
            return x.charAt(0).toUpperCase() + x.slice(1);
        })
        .join(' ');

console.log('old: ', oldUpper);
