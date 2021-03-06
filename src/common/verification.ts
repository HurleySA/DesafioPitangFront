import * as Yup from 'yup';
const today = new Date();
today.setHours((today.getHours() - 3), today.getMinutes(), 0, 0)

const UpdateSchema = Yup.object().shape({
    name: Yup.string().min(5, "O nome precisa ter no minímo 5 caracteres."),
    born_date: Yup.date().typeError("Digite uma nova data ou clique em reset.").max(today, "Agendamento não disponivel para viajantes do tempo."),
    vaccination_date: Yup.date().typeError("Digite uma nova data ou clique em reset.").min(today, "Agendamento não disponivel para viajantes do tempo."),
    vaccinated: Yup.boolean().required(),
    conclusion: Yup.string().when("vaccinated",{
      is: true,
      then: Yup.string().required("Por favor escreva uma conclusão.")
    })
    
  })

const CreateSchema = Yup.object().shape({
    name: Yup.string().required("Nome é um campo obrigatório.").min(5, "O nome precisa ter no minímo 5 caracteres."),
    born_date: Yup.date().typeError("Data de Nascimento é um campo obrigatório.").required("Data de Nascimento é um campo obrigatório.").max(today, "Agendamento não disponivel para viajantes do tempo."),
    vaccination_date: Yup.date().typeError("Data de Vacinação é um campo obrigatório.").required("Data de Vacinação é um campo obrigatório.").min(today, "Agendamento não disponivel para viajantes do tempo."),
    
  })

export { CreateSchema, UpdateSchema };

