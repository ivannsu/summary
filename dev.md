Packages List Shorthand
```
npm install --save express mongodb mongoose dotenv axios request jsonwebtoken cors
```

Packages List Utilities
* nodemon
* live-server (--cors)


# Axios
## Handling THEN
```
.then(response) {
  res.status(200).json({
    data: response.data
  });
}
```

## Handling Catch
```
.catch(err) {
  res.status(200).json({
    error: err.message
  });
}
```
