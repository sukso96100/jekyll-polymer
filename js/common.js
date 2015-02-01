        // custom transformation: scale header's title
        var titleStyle = document.querySelector('.title').style;
        // added code - here we need to obtain the title div as well
        var title = document.querySelector('.title');
//        var subtitle = document.querySelector('.subtitle');
//        var subtitleStyle = document.querySelector('.subtitle').style;

        addEventListener('core-header-transform', function (e) {
            var d = e.detail;
            var m = d.height - d.condensedHeight;
            var scale = Math.max(0.5, (m - d.y) / (m / 0.25)  + 0.5);
            titleStyle.transform = titleStyle.webkitTransform =
                'scale(' + scale + ') translateZ(0)';
//            subtitleStyle.transform = subtitleStyle.webkitTransform =
//                'scale(' + scale + ') translateZ(0)';
//             added code - here we hide the title when the header is condensed
//            subtitle.hidden = d.y == m;
        });


(function () {
    var titleStyle;
    var scale;
    Polymer({
      ready:function() {
        titleStyle = this.$.title.style;
      },
      onHeaderTransform: function (event, detail, sender) {
        var m = detail.height - detail.condensedHeight;
        var newScale = Math.max(0.5, (m - detail.y) / (m / 0.5)  + 0.5);
        if(scale != newScale) {
          scale = newScale;
          titleStyle.transform =
            titleStyle.webkitTransform =
            titleStyle.mozTransform =
            titleStyle.msTransform = 'scale(' + scale + ')';
        }
      }
    });
  })();


document.addEventListener('polymer-ready', function() {
  var navicon = document.getElementById('navicon');
  var drawerPanel = document.getElementById('drawerPanel');
  navicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });
});