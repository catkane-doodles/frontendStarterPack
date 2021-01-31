var tabs = new Vue({
  el: "#tabs",
  data: {
    tabs: [markup, scripting, styling, frameworks],
  },
});

var details = new Vue({
  el: "#details",
  data: {
    details: [markup, scripting, styling, frameworks],
  },
  methods: {
    inside: function(name) {
      return ['Bulma', 'Materialize', 'JQuery'].includes(name)
    }
  }
});

function toggle(category, tabs) {
  for (tab of tabs)
    if (tab != category) {
      tab.seen = false;
      $("#" + tab.title).removeClass("is-active");
    }
  category.seen = true;
  $("#" + category.title).addClass("is-active");
}
