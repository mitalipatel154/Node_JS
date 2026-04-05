exports.dashboard = (req, res) => {
  const dashboardData = {
    transactions: 1352,
    sales: 563,
    orders: 720,
    revenue: 5900
  };
  res.render('dashboard', { title: 'Dashboard', data: dashboardData });
};

exports.subscribe = (req, res) => {
  const { email } = req.body;
  console.log('New subscriber:', email);
  res.redirect('/');
};