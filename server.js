var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Article1={
  title: 'Article one--GRM',
  heading: 'Article 1',
  date: 'Sep 28,2016',
  content: `
        <p>
            This the content for my first article in my first webapp.This webapp was created by me on Sep 28,2016
            using the imad code console for the NPTEL online course.The contents may be subject to copywright if
            unauthorised usage is encountered.
        </p>
        <p>
            This the content for my first article in my first webapp.This webapp was created by me on Sep 28,2016
            using the imad code console for the NPTEL online course.The contents may be subject to copywright if
            unauthorised usage is encountered.
        </p>
        <p>
            This the content for my first article in my first webapp.This webapp was created by me on Sep 28,2016
            using the imad code console for the NPTEL online course.The contents may be subject to copywright if
            unauthorised usage is encountered.
        </p>`
};
function createTemplate(data){
    var title= data.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
        var htmlTemplate=`                   
        <html>
            <header>
                <title>
                    ${title}
                </title>
                <link href="/ui/style.css" rel="stylesheet" />
            </header>
            <body>
                <div class="Container">
                    <div>
                        <a href="/">,HOME</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>
        `;
        return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article1',function(req,res){
    res.send(createTemplate(Article1))
});
app.get('/Article2',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'Article2.html'));
});
app.get('/Article3',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'Article3.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
