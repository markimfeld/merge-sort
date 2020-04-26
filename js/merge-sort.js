$(document).ready(function () {

  const getRandomArray = (min, max) => {
    return Math.floor(Math.random() * max) + min;
  }

  let animationTime = 500;


  let sidenav = $('#side-nav');
  let mainContent = $('.hide');

  const translateNav = grades => {
    sidenav.css({
      '-webkit-transform': `translateX(${grades}%)`,
      '-moz-transform': `translateX(${grades}%)`,
      '-ms-transform': `translateX(${grades}%)`,
      '-o-transform': `translateX(${grades}%)`,
      'transform': `translateX(${grades}%)`,
      'transition-duration': `${500}ms`,
      'transition-timing-function': `ease-in-out`
    });
  }

  const changeOpaticy = n => {
    mainContent.animate({
      '-webkit-opacity': n,
      '-moz-opacity': n,
      'opacity': n
    });
  }

  const createItem = i => {
    let p = $(document.createElement('p')).addClass("item");
    let text = $(document.createTextNode(i));
    p.append(text);
    $("#array").append(p);
  }

  const isnum = v => /^\d+$/.test(v);

  const showMessage = flag => {
    let msgOk = $(".saved");
    let msgError = $(".errors");

    if (flag) {
      msgOk.hide();
      msgError.fadeIn();
    } else {
      msgOk.fadeIn();
      msgError.hide();
    }
  }

  $("#btn-nav-bar").click(() => {
    translateNav(0);
    changeOpaticy(0.4);
  });

  $("#btn-nav-close").click(() => {
    translateNav(-100);
    changeOpaticy(1);
  });

  $("#btn-save").click(() => {
    let valueArray = $("#input-array").val().split(',');
    /* validate each item be a number */
    if (valueArray.every(isnum) && valueArray.length >= 2 && animationTime != '') {
      valueArray.map(Number);

      /* remove all old items */
      $(".lista").children().remove();
      /* add new items */
      for (let i of valueArray) {
        createItem(i);
      }

      if ($('#input-timing-animation').val() != '') {
        animationTime = Number.parseInt($('#input-timing-animation').val());
      } else {
        animationTime = 500;
      }
      showMessage(false);
    } else {
      /* here put code for errors */
      showMessage(true);
    }
    console.log(animationTime);

  });


  $("#btn-sort").click(() => {
    let arr = $("#array").children().toArray();



    console.log(arr);


  })

  $("#btn-unsort").click(() => {
    let array = $("#array").children().toArray();

    let values = new Array();
    for (let i of array) {
      values.push(i.innerText);
    }

    let newArray = new Array();
    while (newArray.length < array.length) {
      let r = getRandomArray(0, array.length);
      if (newArray.indexOf(r) === -1) newArray.push(r);
    }

    let mapping = new Map();

    for (let i = 0; i < array.length; i++) {
      mapping.set(newArray[i], values[i]);
    }

    /* remove all old items */
    $(".lista").children().remove();
    /* add new items */

    // sort map 
    let map = new Map(
      Array
        .from(mapping)
        .sort((a, b) => {
          return a[0] - b[0];
        })
    )
    // create array items
    for (let i of map) {
      createItem(i[1]);
    }
  })

});


