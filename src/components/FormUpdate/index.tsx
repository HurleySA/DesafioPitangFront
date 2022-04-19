
import { addHours, subHours } from "date-fns";
import { Field, Form, Formik } from "formik";
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { api } from "../../services/api";
import { Button, ContainerButtons, ContainerForm } from "./style";

interface ISchedule {
  id: string;
  name: string;
  born_date: Date;
  vaccination_date: Date;
  vaccinated: boolean;
  conclusion: string;
  created_at: Date;
}


interface MyFormValues {
  name?: string;
  born_date?: Date;
  vaccination_date?: Date;
  vaccinated: boolean;
  conclusion: string;
}


const SignupSchema = Yup.object().shape({
  name: Yup.string().nullable(true).min(5, "Must have more than 5 characteres."),
  born_date: Yup.date().nullable(true),
  vaccination_date: Yup.date().nullable(true),
  vaccinated: Yup.boolean().required(),
  conclusion: Yup.string().when("vaccinated",{
    is: true,
    then: Yup.string().required("Please write an conclusion.")
  })
  
})

const putVaccineSchedule = async (id: string, {name, born_date, vaccination_date, vaccinated, conclusion }: MyFormValues) => {
  try{
    const config = { headers: {'Content-Type': 'application/json'} };
    await api.put(`/vaccineSchedule/${id}`,{
      name,
      born_date,
      vaccination_date,
      vaccinated, 
      conclusion
    },config)
  }catch(err){
    if(err instanceof Error){
      alert(err.message)
    }
  }
}

const removeEmptyAttrs = (values: any) => {
  Object.keys(values).forEach(key => {
    if(values[key] === undefined) delete values[key]
      })
}

const notify = () => toast("Wow so easy !");


export const FormUpdate: React.FC<{modalSchedule:ISchedule, getData: () => Promise<void>, setModalOpened: (value: React.SetStateAction<boolean>) => void}> = (props) =>{
  let {vaccinated, conclusion } = props.modalSchedule;
  if(!vaccinated) conclusion = "Ainda não Vacinado";
  const initialValues: MyFormValues = {name:undefined, born_date:undefined, vaccination_date:undefined, vaccinated, conclusion };
   return (
     <div >
       <Formik
         initialValues={initialValues}
         validationSchema={SignupSchema}
         onSubmit={async (values, actions) => {
       /*    if(values.name?.length < 5) values.name = initialValues.name;
          if(!values.born_date) values.born_date = initialValues.born_date;
          if(values.vaccination_date > new Date()) values.vaccinated = false;
          if(!values.vaccination_date) values.vaccination_date = initialValues.vaccination_date;
          */
          
          try{
            
            removeEmptyAttrs(values)
            await putVaccineSchedule(props.modalSchedule.id, values);
            await props.getData();
            props.setModalOpened(false)
          }catch(err ){
            if(err instanceof Error) notify();
          }
          actions.setSubmitting(false);
         }}
         
       >
         {({ errors, touched, setFieldValue, values, handleReset }) => (
           
           <ContainerForm>
            <Form>
              
            <label htmlFor="name">Nome:</label>
            <Field type="text" id="name" name="name" placeholder="Digite o novo nome (Opcional)"  />
            {errors.name ? (<div>{errors.name}</div>
            ) : null }
  
            <label htmlFor="born_date">Data de Nascimento:</label>
            <ReactDatePicker 
              selected={values.born_date ? new Date(values.born_date): null} 
              dateFormat="dd/MMMM/yyyy"
              className="form-control"
              maxDate={new Date()}
              name="born_date"
              onChange={(date:Date) => setFieldValue('born_date', date)}
              placeholderText="Digite uma nova data de Nascimento(Opcional)" />

            <label htmlFor="vaccination_date">Data de Vacinação:</label>
            <ReactDatePicker 
              selected={values.vaccination_date ? addHours(new Date(values.vaccination_date),new Date().getTimezoneOffset() / 60) : null }  // addHours(new Date(values.vaccination_date), new Date().getTimezoneOffset() / 60)
              dateFormat="dd/MMMM/yyyy HH:mm:ss"
              className="form-control"
              timeFormat="HH:mm"
              minDate={new Date()}
              showTimeSelect
              name="vaccination_date"
              onChange={(date:Date) => setFieldValue('vaccination_date', subHours(new Date(date),new Date(date).getTimezoneOffset() / 60))} 
              placeholderText="Digite uma nova data de Vacinação(Opcional)" />

  <         label htmlFor="vaccinated">Vacinado</label>
            <Field type="checkbox" id="vaccinated" name="vaccinated" placeholder="Vacinação foi realizada?">
            </Field>
            
            <label htmlFor="conclusion">Conclusão:</label>
            <Field type="text" id="conclusion" name="conclusion" placeholder="Informe uma nova conclusão" />
            {errors.conclusion ? (<div>{errors.conclusion}</div>) : null}


            
            <ContainerButtons>
              <Button onClick={handleReset}>Reset</Button> 
              <Button type="submit" onClick={() => console.log(errors)}>Submit</Button> 
            </ContainerButtons>
              
            </Form>
          </ContainerForm>
         )}
         
       </Formik>
     </div>
   );
}
