## Unique email validation

```
email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Format email kamu salah pak'
        },
        isUniqueEmail: function(val, next) {
          console.log(this.id)
          Teacher.findOne({
            where: {
              email: val,
              id: {
                [Op.ne]: this.id
              }
            }
          })
          .then(row => {
            console.log(row);
            if (row) {
              return next('Email kamu sudah dipakai pak');
            } else {
              next()
            }

          })
          .catch(err => {
            return next(err);
          });
 ```
