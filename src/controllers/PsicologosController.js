const Psicologos = require('../models/Psicologos');

module.exports ={
    async store (req,res){

        try{

        const {nome, email, senha, apresentacao} = req.body;

        const psicologos = await psicologos.create({nome, email, senha, apresentacao});
        
        return res.json(psicologos);

} catch (error){
        console.log(error.message);
        res
        .status(500)
        .json({error:"An error has ocurred"})
    }
},
    async index (req,res){

    try{
        const psicologos= await Psicologos.findAll();
        res.json(psicologos).status(200);

    }catch (error){
        console.log(error.message);
        res
        .status(500)
        .json({error:"Erro encontrado"})
    }
},
    async show (req,res) {
    const {id}=req.params;

    try{
        const psicologos =await Psicologos.findByPk(id)

        if(!psicologos){
            res.status(404).json({
                message:"Id não encontrado",
            });

        }

        res.json(psicologos).status(200);


    }catch (error){
        console.log(error.message);
        res
        .status(500)
        .json({error:"Ocorreu um erro"})
    }

},
    async update(req,res) {
    const{id} = req.params;

    try{
        const {nome,email,senha,apresentacao} = req.body;

        const psicologos =await Psicologos.findByPk(id);

        if(!psicologos){
            res.status(400).json({
                message:"Paciente não encontrado",
            });
        };

        await psicologos.update({
            nome, email, senha, apresentacao},{where:{id:id}});
            const psicologosUpdated = await Psicologos.findByPk(id);

            res.json(psicologosUpdated).status(200);

    }catch (error){
        console.log(error.message);
        res
        .status(500)
        .json({error:"Ocorreu um erro"})
    }

},
    async destroy (req,res){
        const {id} = req.params;

        try{
        const psicologos= await psicologos.findByPk(id);
            
        if(!psicologos){
            res.status(404).json({
                message:"Id não encontrado"
            });
        }
            await psicologos.destroy();

            res.status(204).send("");
        

    }catch (error){
        res
        .status(500)
        .json({error:"Erro encontrado"})
    }
}
}