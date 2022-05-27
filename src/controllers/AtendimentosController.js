const Pacientes = require('../models/Pacientes');
const Atendimentos = require('../models/Atendimentos');
const Psicologos = require('../models/Psicologos');
const { update } = require('../models/Psicologos');


module.exports ={
    async index (req,res){

        try{
            const atendimentos= await Atendimentos.findAll();
            res.json(atendimentos).status(200);

        }catch (error){
            console.log(error.message);
            res
            .status(500)
            .json({error:"Erro encontrado"})
        }
},

    async store (req,res) {
    try{   
        const {paciente_Id, psicologo_Id, data_atendimento, observacao} = req.body;

        const pacientes = await Pacientes.findByPk(pacientes_Id);
        const psicologos = await Psicologos.findByPk(psicologos_Id);

        if(!pacientes) {
            return res.status(400).json({error:'Paciente não encontrado'})
        }

       if(!psicologos){
         return res.status(400).json({error:'Ocorreu um erro'})
       }

        const atendimentos = await Atendimentos.create({
            "data_atendimento" : dataAtendimento,
            "paciente_id" : pacientesId,
            "psicologo_id" : psicologosId,
            observacao, 
        })

        //const pacientes = await Pacientes.create({nome,email,'data-de-nascimento': dataDeNascimento});


        return res.json(atendimentos);

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
            const atendimentos =await Atendimentos.findByPk(id)

            if(!atendimentos){
                res.status(404).json({
                    message:"Id não encontrado",
                });

            }

            res.json(atendimentos).status(200);


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
            const {data_Atendimento, observacao} = req.body;

            const atendimentos =await Atendimentos.findByPk(id);

            if(!atendimentos){
                res.status(404).json({
                    message:"atendimento não encontrado",
                });

            };

            await Atendimentos.update({
                data_Atendimento,observacao},{where:{id:id}});
                const atendimentosUpdated = await Atendimentos.findByPk(id);

                res.json(atendimentosUpdated).status(200);

        }catch (error){
            console.log(error.message);
            res
            .status(500)
            .json({error:"Ocorreu um erro"})
        }

    }
}





       
    
