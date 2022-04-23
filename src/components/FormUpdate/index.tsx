
import { showNotification } from "@mantine/notifications";
import { addHours, subHours } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IFormUpdatePros, UpdateFormValues } from "../../common/dto";
import { UpdateSchema } from "../../common/verification";
import { SchedulesContext } from "../../contexts/SchedulesContext";
import { Button } from "../Button";
import { Loading } from "../Loading";
import { ContainerButtons, ContainerForm, Error } from "./style";

const removeEmptyAttrs = (values: any) => {
  Object.keys(values).forEach(key => {
    if(values[key] === undefined || values[key] === "") delete values[key]
      })
}
export const FormUpdate: React.FC<IFormUpdatePros> = ({modalSchedule, setModalOpened}) =>{


  let {name, born_date, vaccination_date, vaccinated, conclusion } = modalSchedule;
  if(!vaccinated) conclusion = "Ainda não Vacinado";
  const initialValues: UpdateFormValues = {name, born_date, vaccination_date, vaccinated, conclusion };

  const {putVaccineSchedule, getVaccineSchedules} = useContext(SchedulesContext);
   return (
       <Formik
         initialValues={initialValues}
         validationSchema={UpdateSchema}
         onSubmit={async (values, actions) => {
          try{
            removeEmptyAttrs(values)
            await putVaccineSchedule(modalSchedule.id, values);
            await getVaccineSchedules();
            setModalOpened(false)
          }catch(err:any ){
            showNotification({
              title:"Error:",
              message: JSON.stringify(err.response.data.error),
              styles: (theme) => ({
                root: {
                  borderColor: "#CA4F2F",
                  '&::before': { backgroundColor: "#CA4F2F" },
                },
              })
            })
          }
          actions.setSubmitting(false);
         }}
         
       >
         {({ errors, isSubmitting, setFieldValue, values, handleReset }) => (
           <ContainerForm>

            <Form autoComplete="off"> 
            <label htmlFor="name">Nome:</label>
            <Field type="text" id="name" name="name" placeholder="Digite o novo nome (Opcional)" autoComplete="off"/>
            {errors.name ? (<Error>{errors.name}</Error>
            ) : null }
  
            <label htmlFor="born_date">Data de Nascimento:</label>
            <ReactDatePicker 
              selected={values.born_date ? new Date(values.born_date): null} 
              dateFormat="dd/MMMM/yyyy"
              className="form-control"
              maxDate={new Date()}
              name="born_date"
              locale={ptBR}
              onChange={(date:Date) => setFieldValue('born_date', date)}
              autoComplete="off"
              placeholderText="Digite uma nova data de Nascimento(Opcional)" />
              {errors.born_date ? (<Error>{errors.born_date}</Error>
            ) : null }

            <label htmlFor="vaccination_date">Data de Vacinação:</label>
            <ReactDatePicker 
              selected={values.vaccination_date ? addHours(new Date(values.vaccination_date),3) : null }  // addHours(new Date(values.vaccination_date), new Date().getTimezoneOffset() / 60)
              dateFormat="dd/MMMM/yyyy HH:mm:ss"
              className="form-control"
              timeFormat="HH:mm"
              minDate={new Date()}
              showTimeSelect
              locale={ptBR}
              autoComplete="off"
              name="vaccination_date"
              onChange={(date:Date) => date ? setFieldValue('vaccination_date', subHours(new Date(date),3)) : setFieldValue('vaccination_date', null)} 
              placeholderText="Digite uma nova data de Vacinação(Opcional)" />
              {errors.vaccination_date ? (<Error>{errors.vaccination_date}</Error>
            ) : null }
            

  <         label htmlFor="vaccinated">Vacinado</label>
            <Field type="checkbox" id="vaccinated" name="vaccinated" placeholder="Vacinação foi realizada?" autoComplete="off"/>
            
            <label htmlFor="conclusion">Conclusão:</label>
            <Field type="text" id="conclusion" name="conclusion" placeholder="Informe uma nova conclusão" autoComplete="off"/>
            {errors.conclusion ? (<Error>{errors.conclusion}</Error>) : null}

            <ContainerButtons>
              <Button theme="orange" onClick={handleReset}>Reset</Button> 
              <Button theme="orange" disabled={isSubmitting} type="submit" >Atualizar</Button> 
            </ContainerButtons>
            {isSubmitting ? <Loading/>: null }
              
            </Form>
          </ContainerForm>
         )}
       </Formik>
   );
}
