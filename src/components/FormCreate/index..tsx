
import { showNotification } from '@mantine/notifications';
import { addHours, subHours } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import { CreateFormValues } from '../../common/dto';
import { CreateSchema } from '../../common/verification';
import { SchedulesContext } from '../../contexts/SchedulesContext';
import { Button } from '../Button';
import { ContainerButtons, Error } from '../FormUpdate/style';
import { Loading } from '../Loading';
import { Container } from './style';

export const FormCreate: React.FC = () => {
    let navigate = useNavigate()
    const initialValues:CreateFormValues = {name: "", born_date:undefined, vaccination_date:undefined};

    const {postVaccineSchedule} = useContext(SchedulesContext);
    return (
        <Container>
        <Formik
                initialValues={initialValues}
                validationSchema={CreateSchema}
                onSubmit={async (values, actions) => {
                    try{
                        await postVaccineSchedule(values);
                        setTimeout(() => {navigate("/list")}, 1000);

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
                    <Form autoComplete="off">
                        <label htmlFor="name">Nome:</label>
                        <Field type="text" id="name" name="name" placeholder="Digite o nome" autoComplete="off"/>
                        {errors.name ? (<Error>{errors.name}</Error>
                        ) : null }
            
                        <label htmlFor="born_date">Data de Nascimento:</label>
                        <ReactDatePicker 
                        selected={values.born_date ? new Date(values.born_date): null} 
                        dateFormat="dd/MMMM/yyyy"
                        className="form-control"
                        maxDate={new Date()}
                        autoComplete="off"
                        locale={ptBR}
                        name="born_date"
                        onChange={(date:Date) => setFieldValue('born_date', date)}
                        placeholderText="Digite a data de Nascimento" />
                        {errors.born_date ? (<Error>{errors.born_date}</Error>
                        ) : null }

                        <label htmlFor="vaccination_date">Data de Vacina????o:</label>
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
                          placeholderText="Digite uma nova data de Vacina????o(Opcional)" />
                          {errors.vaccination_date ? (<Error>{errors.vaccination_date}</Error>
                        ) : null }

                        <ContainerButtons>
                            <Button theme="orange" onClick={handleReset}>Reset</Button> 
                            <Button theme="orange" disabled={isSubmitting} type="submit" >Agendar</Button> 
                        </ContainerButtons>
                        {isSubmitting ? <Loading/>: null }
                    </Form>
                )}
            </Formik>
            </Container>
    )
}