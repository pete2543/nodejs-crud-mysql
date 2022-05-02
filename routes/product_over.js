let express = require("express");
let router = express.Router();
let dbCon = require("../lib/db");

// display proudcut_over page
/*router.get("/", (req, res, next) => {
  dbCon.query("SELECT * FROM product_over ORDER BY id desc", (err, rows) => {
    if (err) {
      req.flash("error", err);
      res.render("product", { data: '' });
    } else {
      res.render("product_over", { data: rows });
    }
  });
});

// display add product_over page
router.get("/add", (req, res, next) => {
  res.render("product/add", {
    category: "",
    product: "",
    price: "",
    product_color: "",
    GB: "",
  });
});

// add a new book
/*routers.post("/adds", (req, res, next) => {
  let category = req.body.category;
  let product = req.body.product;
  let price = req.body.price;
  let product_color = req.body.product_color;
  let GB = req.body.GB;
  let errors = false;

  if (
    category.length === 0 ||
    product.length === 0 ||
    price.length === 0 ||
    product_color.length === 0 ||
    GB.length === 0
  ) {
    errors = true;
    // set flash message
    req.flash("error", "Please enter name and author");
    // render to add.ejs with flash message
    res.render("product/add", {
      category: category,
      product: product,
      price: price,
      product_color: product_color,
      GB: GB,
    });
  }
  // if no error
  if (!errors) {
    let form_data = {
      category: category,
      product: product,
      price: price,
      product_color: product_color,
      GB: GB,
    };

    // insert query
    dbCon.query("INSERT INTO product_over SET ?", form_data, (err, result) => {
      if (err) {
        req.flash("error", err);

        res.render("product/add", {
          category: form_data.category,
          product: form_data.product,
          price: form_data.price,
          product_color: form_data.product_color,
          GB: form_data.GB,
        });
      } else {
        req.flash("success", "product successfully added");
        res.redirect("/product_over");
      }
    });
  }
});


// display edit Product page
routers.get('/edit/(:id)', (req, res, next) => {
  let id = req.params.id;

  dbCon.query('SELECT * FROM product_over WHERE id = ' + id, (err, rows, fields) => {
      if (rows.length <= 0) {
          req.flash('error', 'Book not found with id = ' + id)
          res.redirect('/product_over');
      } else {
          res.render('product/edit', {
              title: 'Edit book',
              id: rows[0].id,
              name: rows[0].name,
              author: rows[0].author
          })
      }
  });
})
// update product_over page
routers.post("/updates/:id", (req, res, next) => {
  let id = req.params.id;
  let category = req.body.category;
  let product = req.body.product;
  let price = req.body.price;
  let product_color = req.body.product_color;
  let GB = req.body.GB;
  let errors = false;

  if (
    category.length === 0 ||
    product.length === 0 ||
    price.length === 0 ||
    product_color.length === 0 ||
    GB.length === 0
  ) {
    errors = true;
   
    req.flash("error", "Please enter product_over");
    res.render("product/edit", {
       id: req.params.id,
      category: category,
      product: product,
      price: price,
      product_color: product_color,
      GB: GB,
    });
  }
  // if no error
  if (!errors) {
    let form_data = {
      
      category: category,
      product: product,
      price: price,
      product_color: product_color,
      GB: GB,
    };

    // update query
    dbCon.query("UPDATE product_over SET ? WHERE id = ?"+id, form_data, (err, result) => {
      if (err) {
        req.flash("error", err);
        res.render("product/edit", {
          id:req.params.id,
          category: form_data.category,
          product: form_data.product,
          price: form_data.price,
          product_color: form_data.product_color,
          GB: form_data.GB,
        });
      } else {
        req.flash("success", "product successfully updated");
        res.redirect("/product_over");
      }
    });
  }
});

// delete Product_OVer
routers.get('/deletes/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('DELETE FROM product_over WHERE id = ' + id, (err, result) => {
        if (err) {
            req.flash('error', err),
            res.redirect('/product_over');
        } else {
            req.flash('success', 'product_oversuccessfully deleted! ID = ' + id);
            res.redirect('/product_over');
        }
    })
})*/

module.exports = router;
