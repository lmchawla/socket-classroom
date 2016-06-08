/**
 * Created by lalitchawla on 08/06/16.
 */

express = require('express.io');
app = express().http().io();

// Broadcast all draw clicks.
app.io.route('drawClick', function (req) {
    req.io.broadcast('draw', req.data)
});

// Send client html.
app.get('/teacher', function (req, res) {
    res.sendfile(__dirname + '/teacher.html')
});
app.get('/student', function (req, res) {
    res.sendfile(__dirname + '/student.html')
});

app.listen(7076);
