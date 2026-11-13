exports.api = function(req, res) {
  res.json({
    resource: 'waterfalls',
    endpoints: [
      { method: 'GET', path: '/resource/waterfalls' },
      { method: 'GET', path: '/resource/waterfalls/:id' },
      { method: 'POST', path: '/resource/waterfalls' },
      { method: 'PUT', path: '/resource/waterfalls/:id' },
      { method: 'DELETE', path: '/resource/waterfalls/:id' }
    ]
  });
};