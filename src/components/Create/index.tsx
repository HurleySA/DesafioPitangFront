import { showNotification } from '@mantine/notifications';
import { addHours, subHours } from 'date-fns';
import { Field, Form, Formik } from 'formik';
import ReactDatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { api } from '../../services/api';
import { Button, ContainerButtons, Error } from '../FormUpdate/style';
import { Container } from "./style";

interface MyFormValues {
    name: string;
    born_date?: Date;
    vaccination_date?: Date;
  }

const today = new Date();
today.setHours((today.getHours() - 3), today.getMinutes(), 0, 0)


const SignupSchema = Yup.object().shape({
    name: Yup.string().required().min(5, "Must have more than 5 characteres."),
    born_date: Yup.date().nullable(true).max(today, "Cannot born in the future."),
    vaccination_date: Yup.date().nullable(true).min(today, "Cannot vaccinate in the past."),
    
  })

  const postVaccineSchedule = async ({name, born_date, vaccination_date}: MyFormValues) => {
    try{
      const config = { headers: {'Content-Type': 'application/json'} };
      await api.post(`/vaccineSchedule`,{
        name,
        born_date,
        vaccination_date,
      },config)
      
    }catch(err:any){
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
  }


export const Create= () => {
    let navigate = useNavigate()
    const initialValues:MyFormValues = {name: "", born_date:undefined, vaccination_date:undefined};
    return (
        <Container>
            <div className='container'>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={async (values, actions) => {
                    try{
                        await postVaccineSchedule(values);
                        navigate("/");
                        localStorage.removeItem("schedules")
                    }catch(err ){
                        if(err instanceof Error) alert(err);
                      }
                    actions.setSubmitting(false);
                }}
                
            >
                {({ errors, touched, setFieldValue, values, handleReset }) => (
                    <Form>
                        <label htmlFor="name">Nome:</label>
                        <Field type="text" id="name" name="name" placeholder="Digite o novo nome (Opcional)" />
                        {errors.name ? (<Error>{errors.name}</Error>
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
                        name="vaccination_date"
                        onChange={(date:Date) => setFieldValue('vaccination_date', subHours(new Date(date),3))} 
                        placeholderText="Digite uma nova data de Vacinação(Opcional)" />
                        {errors.vaccination_date ? (<Error>{errors.vaccination_date}</Error>
                        ) : null }
                        <ContainerButtons>
                            <Button onClick={handleReset}>Reset</Button> 
                            <Button type="submit" >Agendar</Button> 
                        </ContainerButtons>

                    </Form>
                    
                )}
                
                
            </Formik>
            </div>
        </Container>
    )
}