

// $.ajax({
// method: 'GET',
// url: 'https://unsplash.it/list',
// success: function(result) {
//     // result is whatever the URL sends back from the request
//     const contents = $('table');
//     const parent = contents.parent();
//     let id = result[Math.round(Math.random()*result.length)]['id'];
//     console.log(id);
//     parent.prepend(`<img src=https://unsplash.it/1200/800?image=${id}>`);
//     message = parent.prepend('<h1>Get back to work!!</h1>');
//     contents.remove();
//     message.addClass("giftostyle");
    
// },
// error: function(err) {
//     // if any errors occur during the process you can check out the
//     // the error by logging the 'err' argument
// }
// });

// $.get('https://unsplash.it/list', function(result) {
//   // result is whatever the URL sends back from the request
//   console.log(result);
// });