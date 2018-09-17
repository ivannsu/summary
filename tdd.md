# Run mocha Tips
cannot run process on same port, kill process using
```
sudo kill `sudo lsof -t -i:<PORT>`
```

app.js should module.exported
```
module.exports = app;
```
