export default {
  siteGet: (req, res) => {
    // if (req.swagger.useStubs) {
    res.json({
      setupRequired: true,
        // setupRequired: false,
        // siteTitle: 'Awesome site',
    });
    // }
  },
};