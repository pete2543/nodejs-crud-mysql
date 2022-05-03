let express = require("express");
let router = express.Router();
let dbCon = require("../lib/db");

// display Product page
router.get("/", (req, res, next) => {
  dbCon.query("SELECT * FROM product_over ORDER BY id asc", (err, rows) => {
    if (err) {
      req.flash("error", err);
      res.render("books", { data: "" });
     // res.render("/books/show", { data: rows });
    } else {
      res.render("books", { data: rows });
     // res.render("/books/show", { data: rows });
    }
  });
});
//show pay
router.get("/pay", (req, res, next) => {
  dbCon.query("SELECT * FROM ppay ORDER BY id asc", (err, rows) => {
    if (err) {
      req.flash("error", err);
      res.render("books/pay", { data: "" });
     // res.render("/books/show", { data: rows });
    } else {
      res.render("books/pay", { data: rows });
     // res.render("/books/show", { data: rows });
    }
  });
});

router.get("/show",(req,res,next)=>{
  dbCon.query("SELECT * FROM product_over ORDER BY id asc", (err, rows) => {
    if (err) {
      req.flash("error", err);
      res.render("books/show", { data: "" });
    } else {
      res.render("books/show", { data: rows });
    }
  });
})

router.get("/bay(:id)", (req, res, next) => {
  let id = req.params.id;
  dbCon.query("SELECT * FROM product_over WHERE id = " + id, (err, rows, fields) => {
    if (rows.length <= 0) {
      req.flash("error", "product_over not found with id = " + id);
      res.redirect("/books");
    } else {
      res.render("books/bay", {
        title: "show book",
        id: rows[0].id,
        category: rows[0].category,
        product: rows[0].product,
        price: rows[0].price,
        GB: rows[0].GB,
      });
    }
  });
});

//show Detail
router.get("/detail",(req,res,next)=>{
  dbCon.query("SELECT * FROM product_over ORDER BY id asc", (err, rows) => {
    if (err) {
      req.flash("error", err);
      res.render("books/detail", { data: "" });
    } else {
      res.render("books/detail", { data: rows });
    }
  });
})

// display add product page
router.get("/add", (req, res, next) => {
  res.render("books/add", {
    category: '',
    product: '',
    price: '',
    
    GB: '',
  });
});

// add a new book
router.post("/add", (req, res, next) => {
    let category = req.body.category;
    let product = req.body.product;
    let price = req.body.price;
    //let productcolor = req.body.productcolor;
    let GB = req.body.GB;
    let errors = false;

  if (category.length === 0 ||
    product.length === 0 ||
    price.length === 0 ||
    GB.length === 0) {
    errors = true;
    // set flash message
    req.flash("error", "Please enter name and author");
    // render to add.ejs with flash message
    res.render("books/add", {
        category: category,
        product: product,
        price: price,
        GB: GB,
    });
  }

  // if no error
  if (!errors) {
    let form_data = {
        category: category,
        product: product,
        price: price,
        GB: GB
    };

    // insert query
    dbCon.query("INSERT INTO product_over SET ?", form_data, (err, result) => {
      if (err) {
        req.flash("error", err);

        res.render("books/add", {
            category: form_data.category,
            product: form_data.product,
            price: form_data.price,
            product_color: form_data.product_color,
            GB: form_data.GB,
        });
      } else {
        req.flash("success", "Book successfully added");
        res.redirect("/books");
      }
    });
  }
});


//ADD PAY


// display edit product page
router.get("/edit/(:id)", (req, res, next) => {
  let id = req.params.id;

  dbCon.query("SELECT * FROM product_over WHERE id = " + id, (err, rows, fields) => {
    if (rows.length <= 0) {
      req.flash("error", "product_over not found with id = " + id);
      res.redirect("/books");
    } else {
      res.render("books/edit", {
        title: "Edit book",
        id: rows[0].id,
        category: rows[0].category,
        product: rows[0].product,
        price: rows[0].price,
        GB: rows[0].GB,
      });
    }
  });
});

// update product_overpage
router.post("/update/:id", (req, res, next) => {
    let id = req.params.id;
    let category = req.body.category;
    let product = req.body.product;
    let price = req.body.price;
    let GB = req.body.GB;
  let errors = false;

  if (category.length === 0 ||
    product.length === 0 ||
    price.length === 0 ||
    GB.length === 0) {
    errors = true;
    req.flash("error", "Please enter Product");
    res.render("books/edit", {
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
        GB: GB,
    };
    // update query
    dbCon.query(
      "UPDATE product_over SET ? WHERE id = " + id,
      form_data,
      (err, result) => {
        if (err) {
          req.flash("error", err);
          res.render("books/edit", {
            id: req.params.id,
            name: form_data.name,
            author: form_data.author,
          });
        } else {
          req.flash("success", "Book successfully updated");
          res.redirect("/books");
        }
      }
    );
  }
});

// delete book
router.get("/delete/(:id)", (req, res, next) => {
  let id = req.params.id;

  dbCon.query("DELETE FROM product_over WHERE id = " + id, (err, result) => {
    if (err) {
      req.flash("error", err), res.redirect("/books");
    } else {
      req.flash("success", "Book successfully deleted! ID = " + id);
      res.redirect("/books");
    }
  });
});


router.get("/address", (req, res, next) => {
  res.render("books/address", {
    House: '',
    district: '',
    amphur: '',
    province:'',
    Post: '',
  });
});

// add เพิ่มที่อยู่
router.post("/address", (req, res, next) => {
    let 	House = req.body.	House;
    let district = req.body.district;
    let amphur = req.body.amphur	;
    //let productcolor = req.body.productcolor;
    let 	province = req.body.	province;
    let Post = req.body.Post;
    let errors = false;

    // set flash message
    req.flash("error", "Please enter name and author");
    // render to add.ejs with flash message
    res.render("books/address", {
         House: House,
         district: district,
         amphur: amphur,
         province:province,
         Post:Post,
    });

  // if no error
  if (!errors) {
    let form_data = {
       House: House,
      district: district,
      amphur: amphur,
      province:province,
      Post:Post,
    };

    // insert query
    dbCon.query("INSERT INTO address SET ?", form_data, (err, result) => {
      if (err) {
        req.flash("error", err);

        res.render("books/address", {
            House: form_data.House,
            district: form_data.district,
            amphur: form_data.amphur,
             province: form_data.province,
             Post: form_data.Post,
        });
      } else {
        req.flash("success", "Book successfully added");
       // res.redirect("/books");//รอเขียนเพิ่มเติม คือ เมื่อใส่ที่อยุ่เสร็จเเล้วก็จะสมบรู
      }
    });
  }
});

router.post("/addpay", (req, res, next) => {
  let pay = req.body.pay;
  let bank = req.body.bank;

  let errors = false;

if (pay.length === 0 ||bank.length === 0 ) {
  errors = true;
  // set flash message
  req.flash("error", "Please enter name and author");
  // render to add.ejs with flash message
  res.render("books/add", {
      pay:pay,
      bank:bank,
  });
}

// if no error
if (!errors) {
  let form_data = {
    pay:pay,
    bank:bank,
  };

  // insert query
  dbCon.query("INSERT INTO pay SET ?", form_data, (err, result) => {
    if (err) {
      req.flash("error", err);

      res.render("books/addpay", {
        pay:form_data.pay,
        bank:form_data.bank,
      });
    } else {
      req.flash("success", "Book successfully added");
      res.redirect("/books/pay");
    }
  });
}
});

module.exports = router;


