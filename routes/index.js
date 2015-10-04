exports.index = function(req, res){
  res.render('index', {
    title: 'Home', 
    description: '',
    author: ''
  });
};