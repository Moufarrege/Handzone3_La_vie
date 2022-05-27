const Pacientes = require('../models/Pacientes');

module.exports ={
    async index (req,res){

        try{
            const pacientes= await Pacientes.findAll();
            res.json(pacientes).status(200);

        }catch (error){
            console.log(error.message);
            res
            .status(500)
            .json({error:"Erro encontrado"})
        }
},
    async store (req,res){

        try{

        const {nome, email, dataDeNascimento} = req.body;
            console.log(new Date(dataDeNascimento));

        const pacientes = await Pacientes.create({nome,email,'data-de-nascimento': new Date(dataDeNascimento)});

        return res.json(pacientes)

        
    } catch (error){
        console.log(error.message);
        res
        .status(500)
        .json({error:"An error has ocurred"})
    }
},
    async show (req,res) {
    const {id}=req.params;

    try{
        const pacientes =await Pacientes.findByPk(id)

        if(!pacientes){
            res.status(404).json({
                message:"Id não encontrado",
            });

        }

        res.json(pacientes).status(200);


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
        const {nome,email,dataDeNascimento} = req.body;

        const pacientes =await Pacientes.findByPk(id);

        if(!pacientes){
            res.status(404).json({
                message:"Paciente não encontrado",
            });
        };

        await pacientes.update({
            nome, email, 'data-de-nascimento':dataDeNascimento},{where:{id:id}});
            const pacientesUpdated = await Pacientes.findByPk(id);

            res.json(pacientesUpdated).status(200);

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
                const pacientes= await Pacientes.findByPk(id);
                    
                if(!pacientes){
                    res.status(404).json({
                        message:"Id não encontrado"
                    });
                }
                    await pacientes.destroy();

                    res.status(204).send("");
                

            }catch (error){
                res
                .status(500)
                .json({error:"Erro encontrado"})
            }
}
}