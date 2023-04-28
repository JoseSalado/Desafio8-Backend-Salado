function produdctPrivateAccess (req, res, next){
    console.log(req.session);
    console.log(req.user);
    if(!req.user === 'admin') return res.json({msg: "ingreso no autorizado"})
    next()
}   

export default produdctPrivateAccess