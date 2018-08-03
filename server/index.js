const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(3000, () => {
  console.log('now listening on port 3000');
});

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });
