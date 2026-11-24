(function () {
  var nodes = document.querySelectorAll('.obfuscated-email');
  for (var i = 0; i < nodes.length; i++) {
    var address = atob(nodes[i].getAttribute('data-email'));
    var link = document.createElement('a');
    link.href = 'mailto:' + address;
    link.textContent = address;
    nodes[i].replaceWith(link);
  }
})();
